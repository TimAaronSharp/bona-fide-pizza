import { and, eq } from "drizzle-orm";
import { db } from "../db/drizzle"
import * as schemas from "@/app/db/schema.db";
import { getUserSession } from "../lib/session";

export default async function CartPage() {
  const userSession = await getUserSession();

  const cartTransaction = await db.transaction(async (tx) => {
    const [cart] = await tx.select().from(schemas.cart).where(eq(schemas.cart.userId, userSession.user.id)).limit(1);
    const cartItems = await tx.select().from(schemas.cartItem).where(eq(schemas.cartItem.cartId, cart.id));
    const cartItemModifiers = await tx.select().from(schemas.cartItemModifier).where(eq(schemas.cartItem.cartId, cartItems[0].id));

    console.log("cartItems[0].id is", cartItems[0].id);
    console.log("cart is", cart);
    console.log("cartItems is", cartItems);
    console.log("cartItemModifiers is", cartItemModifiers);
  });

  // const cart = await db
  //   .select()
  //   .from(schemas.cart)
  //   .where(eq(schemas.cart.userId, userSession.user.id))
  //   .innerJoin(schemas.cartItem, eq(schemas.cartItem.cartId, schemas.cart.id))
  //   .innerJoin(schemas.cartItemModifier, eq(schemas.cartItemModifier.cartItemId, schemas.cartItem.id));

  // console.log("cart is", cart);
  return (
    <>
      <h1>Hi!</h1>
    </>
  )
}