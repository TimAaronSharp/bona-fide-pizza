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

export const ProductSeedSchema = ProductSchema.omit({
  id: true
});

export const MenuCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  href: z.string(),
  imgId: z.number()
});

export const MenuCategorySeedSchema = MenuCategorySchema.omit({
  id: true
});

export const ImageSchema = z.object({
  id: z.number(),
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number()
});

export const ImageSeedSchema = ImageSchema.omit({
  id: true
});

export const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  imgId: z.number(),
  price: z.number()
});

export const IngredientSeedSchema = IngredientSchema.omit({
  id: true
});

export const ProductIngredientSchema = z.object({
  productId: z.number(),
  ingredientId: z.number()
});

export const UserSchema = z.object({
  id: z.string().trim().regex(/^[a-zA-Z0-9]{32}$/, "Invalid ID format"),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  role: z.string(),
  banned: z.boolean(),
  banReason: z.string(),
  banExpires: z.date(),
  firstName: z.string(),
  lastName: z.string()
});

// TODO Make UserSeedSchema.

export const OrderSchema = z.object({
  id: z.number(),
  userId: z.string(),
  addressId: z.number(),
  orderTotal: z.number(),
  orderStatus: z.string()
});

export const OrderSeedSchema = OrderSchema.omit({
  id: true
});

export const OrderItemSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
  quantity: z.number(),
  orderItemTotal: z.number()
});

export const OrderItemSeedSchema = OrderItemSchema.omit({
  id: true
});

export const AddressSchema = z.object({
  id: z.number(),
  userId: z.string(),
  line1: z.string(),
  line2: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string()
});

export const AddressSeedSchema = AddressSchema.omit({
  id: true
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type ProductSeedSchemaType = z.infer<typeof ProductSeedSchema>;

export type MenuCategorySchemaType = z.infer<typeof MenuCategorySchema>;
export type MenuCategorySeedSchemaType = z.infer<typeof MenuCategorySeedSchema>;

export type ImageSchemaType = z.infer<typeof ImageSchema>;
export type ImageSeedSchemaType = z.infer<typeof ImageSeedSchema>;

export type IngredientSchemaType = z.infer<typeof IngredientSchema>;
export type IngredientSeedSchemaType = z.infer<typeof IngredientSeedSchema>;

export type ProductIngredientSchemaType = z.infer<typeof ProductIngredientSchema>;

export type UserSchemaType = z.infer<typeof UserSchema>;


export type OrderSchemaType = z.infer<typeof OrderSchema>;
export type OrderSeedSchemaType = z.infer<typeof OrderSeedSchema>;

export type OrderItemSchemaType = z.infer<typeof OrderItemSchema>;
export type OrderItemSeedSchemaType = z.infer<typeof OrderItemSeedSchema>;

export type AddressSchemaType = z.infer<typeof AddressSchema>;
export type AddressSeedSchemaType = z.infer<typeof AddressSeedSchema>;

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