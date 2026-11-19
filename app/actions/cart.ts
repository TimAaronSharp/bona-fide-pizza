"use server";

import { headers } from "next/headers";
import { auth } from "../lib/auth/auth";
import { Density, IngredientIdAndDensity, Transaction, UserIdAndSessionId } from "../lib/definitions";
import { db } from "../db/drizzle";
import * as schemas from "@/app/db/schema.db";
import { and, eq, inArray, sql } from "drizzle-orm";


const DENSITY_CODE: Record<Density, string> = {
  remove: "r",
  light: "l",
  normal: "n",
  extra: "e"
};

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    throw new Error("No user found. Please log in.");
  }
  console.log(`Hello user ${session.user.id}`);
  return session;
}
/*Modifiers is optional in the event that the user did not customize the product. */
export const addToCartAction = async (productId: number, qty: number, modifiers?: IngredientIdAndDensity[]) => {
  const userSession = await getUserSession();
  const userIdAndSessionId: UserIdAndSessionId = {
    userId: userSession.user.id,
    sessionId: userSession.session.id
  };

  let productSignature = "";

  if (modifiers) {
    console.log("made it to has modifiers");
    productSignature = buildProductSignature(productId, modifiers);
    console.log("productSignature returned", productSignature);
    await getOrCreateCart(userIdAndSessionId, qty, productId, productSignature, modifiers);
  }
  else {
    console.log("made it to no modifiers");
    productSignature = buildProductSignature(productId);
    console.log("productSignature returned", productSignature);
    await getOrCreateCart(userIdAndSessionId, qty, productId, productSignature);
  }
}

function buildProductSignature(productId: number, modifiers?: IngredientIdAndDensity[]): string {
  if (!modifiers || modifiers.length === 0) {
    return `prod_${productId}`;
  }

  const sortedModifiers = [...modifiers].sort((a, b) => a.id - b.id).map((m) => `${DENSITY_CODE[m.density]}_${m.id}`);

  return `prod_${productId}_${sortedModifiers.join("_")}`;
}

/*NOTE sessionId is included for when I eventually decide to allow guest users to place orders. Their orders/carts
will be tracked by a session id that will be generated (in which case, I may need to make a new function/refactor a
function to get that generated sessionId (uuid)) (may need to rethink this, because betterAuth session ids are 32-char
strings, not uuids (36-char strings). Maybe generate a uuid and remove the -'s to make it a 32-char string? Investigate.
*/

const getOrCreateCart = async (userIdAndSessionId: UserIdAndSessionId, qty: number, productId: number, customizationSignature: string, modifiers?: IngredientIdAndDensity[]) => {
  console.log("Getting or creating cart...");
  try {
    await db.transaction(async (tx) => {
      const [cart] = await tx.select({ id: schemas.cart.id }).from(schemas.cart).where(eq(schemas.cart.userId, userIdAndSessionId.userId)).limit(1);
      if (!cart) {
        const [newCart] = await tx.insert(schemas.cart).values({ userId: userIdAndSessionId.userId }).returning({ id: schemas.cart.id });
        console.log("newCart is", newCart);
        if (modifiers) {
          getOrCreateCartItem(newCart.id, qty, productId, customizationSignature, tx, modifiers);
        } else {
          getOrCreateCartItem(newCart.id, qty, productId, customizationSignature, tx);
        }
      }
      else {
        console.log("Found cart is", cart);
        if (modifiers) {
          getOrCreateCartItem(cart.id, qty, productId, customizationSignature, tx, modifiers);
        }
        else {
          getOrCreateCartItem(cart.id, qty, productId, customizationSignature, tx);
        }
      }
    })
  } catch (error) {
    console.error("❌ Could not get or create cart:", error);
  }
}
/*TODO Look into making the combination of cartId and customizationSignature unique on cart_item table, but to have
added data integrity. */
const getOrCreateCartItem = async (cartId: number, qty: number, productId: number, customizationSignature: string, tx: Transaction, modifiers?: IngredientIdAndDensity[]) => {
  console.log("Getting or creating cart_item...");
  try {
    const [unitPrice] = await tx.select({ price: schemas.product.price }).from(schemas.product).where(eq(schemas.product.id, productId));
    console.log("unitPrice is", unitPrice);
    const [cartItem] = await tx.select().from(schemas.cartItem).where(and(eq(schemas.cartItem.customizationSignature, customizationSignature), eq(schemas.cartItem.cartId, cartId))).limit(1);
    if (!cartItem) {
      const [newCartItem] = await tx.insert(schemas.cartItem).values({ cartId: cartId, productId: productId, quantity: qty, unitPrice: unitPrice.price, customizationSignature: customizationSignature }).returning({ id: schemas.cartItem.id });
      if (modifiers) {
        createOrUpdateCartItemModifier(newCartItem.id, tx, modifiers)
      }
    }
    else {
      const currentQty = cartItem.quantity;
      // const [currentQty] = await tx.select({ quantity: schemas.cartItem.quantity }).from(schemas.cartItem).where(and(eq(schemas.cartItem.customizationSignature, customizationSignature), eq(schemas.cartItem.cartId, cartId))).limit(1);
      const newQty = (currentQty + qty);
      const [updatedCartItem] = await tx.update(schemas.cartItem).set({ quantity: newQty }).where(eq(schemas.cartItem.id, cartItem.id)).returning({ id: schemas.cartItem.id });
      if (modifiers) {
        createOrUpdateCartItemModifier(updatedCartItem.id, tx, modifiers)
      }
    }
  } catch (error) {
    console.error("❌ Could not get or create cart_item:", error);
  }
}

const createOrUpdateCartItemModifier = async (cartItemId: number, tx: Transaction, modifiers: IngredientIdAndDensity[]) => {
  console.log("Getting or creating cart_item_modifiers...");
  try {
    const modifierIds: number[] = [];
    modifiers.forEach((mod) => {
      modifierIds.push(mod.id);
    });

    const ingredients = await tx.select().from(schemas.ingredient).where((inArray(schemas.ingredient.id, modifierIds)));

    const ingredientMap = new Map(ingredients.map((ingredient) => [ingredient.id, ingredient.price]));

    const cartItemModifiers = modifiers.map((mod) => {
      const basePrice = ingredientMap.get(mod.id);
      let ingredientPrice = 0;
      /*TODO Decide if you want this to throw an error or just = 0 if undefined. */
      if (basePrice === undefined) {
        throw new Error(`Ingredient with id: ${mod.id} not found.`);
      }

      if (mod.density === "remove") {
        ingredientPrice = 0;
      } else if (mod.density === "light" || mod.density === "normal") {
        ingredientPrice = basePrice;
      } else if (mod.density === "extra") {
        ingredientPrice = basePrice * 2;
      }
      return {
        cartItemId,
        ingredientId: mod.id,
        modifierType: mod.density,
        modifierPrice: ingredientPrice
      }
    });

    await tx
      .insert(schemas.cartItemModifier)
      .values(cartItemModifiers)
      .onConflictDoUpdate({
        target: [schemas.cartItemModifier.cartItemId, schemas.cartItemModifier.ingredientId],
        set: {
          modifierType: sql`excluded.modifier_type`,
          modifierPrice: sql`excluded.modifier_price`
        }
      });
  } catch (error) {
    console.error("❌ Could not get or create cart_item_modifier:", error);
  }
}