"use server";

import { auth } from "@/app/lib/auth/auth"
import { headers } from "next/headers"
import { menuCategory } from "@/app/db/schema.db";
import { db } from "@/app/db/drizzle";
import { eq } from "drizzle-orm";


export const editMenuCategory = async (id: number, name: string, href: string, imgId: number) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    throw new Error("Unauthorized: You must be logged in.");
  }

  // TODO create permissions for menuCategories.

  // const hasPermission = await auth.api.userHasPermission({
  //   body: {
  //     userId: session.user.id,
  //     permissions: {

  //     }
  //   }
  // })

  // if (!hasPermission.success) {
  //   throw new Error("Forbidden: You do not have permission to edit menu categories.")
  // }

  await db
    .update(menuCategory)
    .set({ name, href, imgId })
    .where(eq(menuCategory.id, id));
}