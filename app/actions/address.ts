"use server";

import { auth } from "@/app/lib/auth/auth";
import { headers } from "next/headers";
import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema.db"
import { FormState } from "@/app/lib/definitions";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
    query: {
      disableCookieCache: true
    }
  });
  if (!session) {
    throw new Error("No user found. Please log in.");
  }
  console.log(`Hello user ${session.user.id}`);
  return session;
}
/*TODO Look into returning the formData back with a "success: false" so that if the server action isn't completed, like
if the zipCode is not correct, the whole form isn't blown away and the user has to enter everything in again.*/
export async function createAddress(prevState: FormState, formData: FormData): Promise<FormState> {
  const userSession = await getUserSession();
  const userId = userSession.user.id;

  const line1 = formData.get("line1") as string;
  const line2 = formData.get("line2") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zipCode = formData.get("zipCode") as string;

  if (!line1 || !city || !state || !zipCode) {
    return { error: "Please fill out all required fields", success: false };
  }
  try {
    await db.transaction(async (tx) => {
      if (line2) {
        await tx.insert(schemas.address).values({ line1, line2, city, state, zipCode, userId })
      } else {
        await tx.insert(schemas.address).values({ line1, city, state, zipCode, userId })
      }
    })
  } catch (error) {
    return { error: "Failed to save address. Please try again.", success: false };
  }

  return { success: true };
}