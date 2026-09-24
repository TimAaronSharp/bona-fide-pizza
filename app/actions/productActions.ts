"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { specialtyPizza } from "@/app/db/schema";

export const getProducts = async () => {
  const data = await db.select().from(specialtyPizza);
  return data;
};

export const addProduct = async (name: string, description: string, img: string) => {
  await db.insert(specialtyPizza).values({
    name: name,
    description: description,
    img: img
  });
  // revalidatePath("/");
};

export const deleteProduct = async (id: number) => {
  await db.delete(specialtyPizza).where(eq(specialtyPizza.id, id));
  // revalidatePath("/");
};

export const editProduct = async (id: number, name: string, description: string) => {
  await db
    .update(specialtyPizza)
    .set({ name: name, description: description })
    .where(eq(specialtyPizza.id, id));

  // revalidatePath("/");
};