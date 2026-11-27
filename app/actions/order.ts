"use server";

import { headers } from "next/headers";
import { auth } from "@/app/lib/auth/auth";
import { IngredientIdAndDensity, UserIdAndSessionId } from "@/app/lib/definitions";

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
export async function addToOrderAction(productId: number, qty: number, addressId: number, modifiers?: IngredientIdAndDensity[]) {
  const userSession = await getUserSession();
  const userIdAndSessionId: UserIdAndSessionId = {
    userId: userSession.user.id,
    sessionId: userSession.session.id
  }


}