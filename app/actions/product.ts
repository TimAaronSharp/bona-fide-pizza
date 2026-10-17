"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { product } from "@/app/db/schema.db";
import { headers } from "next/headers";
import { auth } from "@/app/lib/auth/auth";

export const getProducts = async () => {
  const data = await db.select().from(product);
  return data;
};

/* TODO If I invoke create "getHeaders() and invoke it in other functions it says "Property 'user' does not exist on
type 'Promise<void>'. If I simply write the function logic inside the other functions it does not give that error. It's
not important for the functionality of this project, but look into why that is later. I would like to have the logic in
a utility if possible so the other functions are cleaner, unless there is a reason not to. */

// const getHeaders = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })
// }

export const addProduct = async (name: string, description: string, category: string, paramName: string, href: string, imgId: number, price: number) => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  // const session = getHeaders()

  if (!session) {
    throw new Error("Unauthorized: You must be logged in.");
  }

  const hasPermission = await auth.api.userHasPermission({
    body: {
      userId: session.user.id,
      permissions: {
        product: ["create"]
      },
    },
  });

  if (!hasPermission.success) {
    throw new Error("Forbidden: You do not have permission to create products.");
  }


  await db.insert(product).values({
    name,
    description,
    category,
    paramName,
    href,
    imgId,
    price
  });

  return { success: true };
  // revalidatePath("/");
};

export const deleteProduct = async (id: number) => {
  await db.delete(product).where(eq(product.id, id));
  // revalidatePath("/");
};

export const editProduct = async (id: number, name: string, description: string, category: string, paramName: string, href: string, imgId: number, price: number) => {
  await db
    .update(product)
    .set({ name, description, category, paramName, href, imgId, price })
    .where(eq(product.id, id));

  // revalidatePath("/");
};