import z from "zod";

export const ProductSchema = z.object({
  link: z.object({
    name: z.string(),
    href: z.string()
  }),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number()
  }),
  product: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string()
  })
});

export type Product = z.infer<typeof ProductSchema>;

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