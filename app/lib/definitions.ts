import z from "zod";

// export const ProductSchema = z.object({
//   link: z.object({
//     paramName: z.string(),
//     href: z.string()
//   }),
//   image: z.object({
//     src: z.string(),
//     alt: z.string(),
//     width: z.number(),
//     height: z.number()
//   }),
//   product: z.object({
//     id: z.number(),
//     name: z.string(),
//     description: z.string(),
//     category: z.string()
//   })
// });

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  href: z.string(),
  paramName: z.string(),
  imgId: z.number(),
  price: z.number()
});

export const MenuCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  href: z.string(),
  imgId: z.number()
});

export const ImageSchema = z.object({
  id: z.number(),
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number()
});

export const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  imgId: z.number(),
  price: z.number()
})

export const OrderItemSchema = z.object({
  id: z.number(),
  productId: z.number(),
  qty: z.number()
})

export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type MenuCategorySchemaType = z.infer<typeof MenuCategorySchema>;
export type ImageSchemaType = z.infer<typeof ImageSchema>;
export type IngredientSchemaType = z.infer<typeof IngredientSchema>;
export type OrderItemSchemaType = z.infer<typeof OrderItemSchema>;

// export type Product = z.infer<typeof ProductSchema>;

export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type LinkInfo = {
  name: string;
  href: string;
}

export type ProductInfo = {
  id: number;
  name: string;
  description: string;
}

export type IngredientOptions = {
  crusts?: Ingredient[];
  crustSeasonings?: Ingredient[];
  sauces?: Ingredient[];
  mozzarella?: Ingredient[];
  meats?: Ingredient[];
  veggiesNMore?: Ingredient[];
  addOnCheeses?: Ingredient[];
  specialInstructions?: string;
  dippingsCups?: Ingredient[];
}

export type Ingredient = {
  id: number;
  name: string;
  category: "quantity" | "crust" | "crust seasoning" | "sauce" | "mozzarella" | "meats" | "veggies & more" | "add-on cheeses" | "special instructions" | "dipping cups";
  density?: "light" | "normal" | "extra"
}