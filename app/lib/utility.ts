import { } from "@/app/db/schema.db";
import { ProductAndImageQueryPropSchemaType, ProductIngredient } from "./definitions";

// Menu and all product tables share the same schema, so I'm just using menu to infer the type for Schema.
// type Schema = typeof menuCategory.$inferSelect;

// export function generateProduct(data: ProductAndImageQueryPropSchemaType): ProductSchemaType {
//   const { image, product } = data
//   return {
//     link: {
//       name: product.paramName,
//       href: product.href
//     },
//     image: {
//       src: image.src,
//       alt: image.alt,
//       width: image.width,
//       height: image.height
//     },
//     info: {
//       id: product.id,
//       name: product.name,
//       description: product.description
//     }
//   };
// }

export function generateDefaultToppings(productIngredients: ProductIngredient[]) {

  const excludedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const toppingsRecord = productIngredients.reduce((acc, topping) => {
    if (!excludedIds.includes(topping.ingredientId)) {
      acc[topping.ingredientId.toString()] = "normal";
    }
    return acc;
  }, {} as Record<string, "light" | "normal" | "extra">);
  return toppingsRecord;
}