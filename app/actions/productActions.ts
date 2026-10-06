"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { specialty_pizza } from "@/app/db/schema.db";
import { headers } from "next/headers";
import { auth } from "../lib/auth/auth";

export const getProducts = async () => {
  const data = await db.select().from(specialty_pizza);
  return data;
};

// const getHeaders = async () {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })
// }

export const addProduct = async (name: string, description: string, paramName: string, href: string, imgSrc: string, imgAlt: string, imgWidth: number, imgHeight: number) => {

  const session = await auth.api.getSession({
    headers: await headers()
  });
  debugger
  if (!session) {
    throw new Error("Unauthorized: You must be logged in.")
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


  await db.insert(specialty_pizza).values({
    name,
    description,
    paramName,
    href,
    imgSrc,
    imgAlt,
    imgWidth,
    imgHeight
  });

  return { success: true };
  // revalidatePath("/");
};

export const deleteProduct = async (id: number) => {
  await db.delete(specialty_pizza).where(eq(specialty_pizza.id, id));
  // revalidatePath("/");
};

export const editProduct = async (id: number, name: string, description: string) => {
  await db
    .update(specialty_pizza)
    .set({ name: name, description: description })
    .where(eq(specialty_pizza.id, id));

  // revalidatePath("/");
};