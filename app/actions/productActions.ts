"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { pizza } from "@/app/db/schema";

export const getProducts = async () => {
  const data = await db.select().from(pizza);
  return data;
};

export const addProduct = async (name: string, description: string, img: string) => {
  await db.insert(pizza).values({
    name: name,
    description: description,
    img: img
  });
  // revalidatePath("/");
};

export const deleteProduct = async (id: number) => {
  await db.delete(pizza).where(eq(pizza.id, id));
  // revalidatePath("/");
};

export const editProduct = async (id: number, name: string, description: string) => {
  await db
    .update(pizza)
    .set({ name: name, description: description })
    .where(eq(pizza.id, id));

  // revalidatePath("/");
};