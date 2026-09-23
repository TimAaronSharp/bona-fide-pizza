"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { product } from "@/app/db/schema";

export const getProducts = async () => {
  const data = await db.select().from(product);
  return data;
};

export const addProduct = async (name: string, description: string) => {
  await db.insert(product).values({
    name: name,
    description: description,
  });
  // revalidatePath("/");
};

export const deleteProduct = async (id: number) => {
  await db.delete(product).where(eq(product.id, id));
  // revalidatePath("/");
};

export const editProduct = async (id: number, name: string, description: string) => {
  await db
    .update(product)
    .set({ name: name, description: description })
    .where(eq(product.id, id));

  // revalidatePath("/");
};