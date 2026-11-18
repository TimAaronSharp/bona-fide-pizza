"use server";

import { headers } from "next/headers";
import { auth } from "../lib/auth/auth";
import { Density, IngredientIdAndDensity } from "../lib/definitions";

const DENSITY_CODE: Record<Density, string> = {
  remove: "r",
  light: "l",
  normal: "n",
  extra: "e"
};

export const getUserId = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    throw new Error("No user found. Please log in.");
  }
  console.log(`Hello user ${session.user.id}`);
}
/*Modifiers is optional in the event that the user did not customize the product. */
export const addToCartAction = async (productId: number, modifiers?: IngredientIdAndDensity[]) => {
  const user = getUserId();
  let productSignature: string = "";

  if (modifiers) {
    console.log("made it to has modifiers");
    productSignature = buildProductSignature(productId, modifiers);
    console.log("productSignature returned", productSignature);
  }
  else {
    console.log("made it to no modifiers");
    productSignature = buildProductSignature(productId);
    console.log("productSignature returned", productSignature);
  }

}

function buildProductSignature(productId: number, modifiers?: IngredientIdAndDensity[]): string {
  if (!modifiers || modifiers.length === 0) {
    return `prod_${productId}`;
  }

  const sortedModifiers = [...modifiers].sort((a, b) => a.id - b.id).map((m) => `${DENSITY_CODE[m.density]}_${m.id}`);

  return `prod_${productId}_${sortedModifiers.join("_")}`;
}