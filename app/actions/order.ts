"use server";

import { headers } from "next/headers";
import { auth } from "@/app/lib/auth/auth";
import { FormState, IngredientIdAndDensity, UserIdAndSessionId } from "@/app/lib/definitions";
import { CartEntries, getCart, queryCartEntries } from "@/app/actions/cart";
import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema.db";
import { eq } from "drizzle-orm";


async function getUserSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
    query: {
      disableCookieCache: true
    }
  });
  if (!session) {
    throw new Error("No user found. Please log in.");
  }
  console.log(`Hello user ${session?.user.id}`);
  return session;
}
/*NOTE Order table currently does not support guest orders, but leaving sessionId in for when it does. */
export async function addToOrderAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const userSession = await getUserSession();
  // console.log("userSession is", userSession);
  const userIdAndSessionId: UserIdAndSessionId = {
    userId: userSession.user.id,
    sessionId: userSession.session.id
  }

  // console.log("selectedAddress is", selectedAddress);

  const cartEntries = await queryCartEntries();

  await createOrder(userIdAndSessionId, cartEntries, formData);

  return { success: true };
}

export async function createOrder(userIdAndSessionId: UserIdAndSessionId, cartEntries: CartEntries, formData: FormData) {
  const selectedAddress = Number(formData.get("address-selection-group"));
  const cart = await getCart();
  console.log("cart from createOrder is", cart);
  try {
    await db.transaction(async (tx) => {
      const [order] = await tx.select({ id: schemas.order.id }).from(schemas.order).where(eq(schemas.order.userId, userIdAndSessionId.userId)).limit(1);
      if (!order) {
        const [newOrder] = await tx.insert(schemas.order).values({ userId: userIdAndSessionId.userId, addressId: selectedAddress, orderStatus: "In Progress" }).returning({ id: schemas.order.id });
        /*TODO Look into type narrowing down earlier so you don't need to do a null check here. */
        if (cartEntries !== null && cartEntries.queriedCartItems.length > 0) {
          console.log("HI THERE ARE CARTENTRIES!~!!");
        }
      }
    })
  } catch (error) {

  }
  /*TODO Look at narrowing this down earlier. */
  if (cart) {
    if (userIdAndSessionId.userId !== cart.userId) {
      return { error: "User id does not match user id of cart. Cannot place order.", success: false };
    }
  }
}