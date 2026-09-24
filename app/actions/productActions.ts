"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { specialty_pizza } from "@/app/db/schema";

export const getProducts = async () => {
  const data = await db.select().from(specialty_pizza);
  return data;
};

export const addProduct = async (name: string, description: string, img: string) => {
  await db.insert(specialty_pizza).values({
    name: name,
    description: description,
    img: img
  });
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