import z from "zod";

// export const DbProductSchema = z.object({
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

// #region db zod schemas

export const DbProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  href: z.string(),
  paramName: z.string(),
  imgId: z.number(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbProductSeedSchema = DbProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbMenuCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  href: z.string(),
  imgId: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbMenuCategorySeedSchema = DbMenuCategorySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbImageSchema = z.object({
  id: z.number(),
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbImageSeedSchema = DbImageSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbIdSeedSchema = z.object({
  id: z.number()
});

export const DbIngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  imgId: z.number(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbIngredientSeedSchema = DbIngredientSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbProductIngredientSchema = z.object({
  productId: z.number(),
  ingredientId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbProductIngredientSeedSchema = DbProductIngredientSchema.omit({
  createdAt: true,
  updatedAt: true
})

export const DbUserSchema = z.object({
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



export const DbOrderSchema = z.object({
  id: z.number(),
  userId: z.string(),
  addressId: z.number(),
  orderTotal: z.number(),
  orderStatus: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbOrderSeedSchema = DbOrderSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbOrderItemSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
  quantity: z.number(),
  orderItemTotal: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbOrderItemSeedSchema = DbOrderItemSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbAddressSchema = z.object({
  id: z.number(),
  line1: z.string(),
  line2: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  userId: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbAddressSeedSchema = DbAddressSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export const DbAddressAndUserIdSeedSchema = z.object({
  id: z.number(),
  userId: z.string()
});

// #endregion

// #region Inferred db types

export type DbProductSchemaType = z.infer<typeof DbProductSchema>;
export type DbProductSeedSchemaType = z.infer<typeof DbProductSeedSchema>;

export type DbMenuCategorySchemaType = z.infer<typeof DbMenuCategorySchema>;
export type DbMenuCategorySeedSchemaType = z.infer<typeof DbMenuCategorySeedSchema>;

export type DbImageSchemaType = z.infer<typeof DbImageSchema>;
export type DbImageSeedSchemaType = z.infer<typeof DbImageSeedSchema>;

export type DbIdSeedSchemaType = z.infer<typeof DbIdSeedSchema>;

export type DbIngredientSchemaType = z.infer<typeof DbIngredientSchema>;
export type DbIngredientSeedSchemaType = z.infer<typeof DbIngredientSeedSchema>;

export type DbProductIngredientSchemaType = z.infer<typeof DbProductIngredientSchema>;
export type DbProductIngredientSeedSchemaType = z.infer<typeof DbProductIngredientSeedSchema>;

export type DbUserSchemaType = z.infer<typeof DbUserSchema>;


export type DbOrderSchemaType = z.infer<typeof DbOrderSchema>;
export type DbOrderSeedSchemaType = z.infer<typeof DbOrderSeedSchema>;

export type DbOrderItemSchemaType = z.infer<typeof DbOrderItemSchema>;
export type DbOrderItemSeedSchemaType = z.infer<typeof DbOrderItemSeedSchema>;

export type DbAddressSchemaType = z.infer<typeof DbAddressSchema>;
export type DbAddressSeedSchemaType = z.infer<typeof DbAddressSeedSchema>;

export type DbAddressAndUserIdSeedSchemaType = z.infer<typeof DbAddressAndUserIdSeedSchema>;

// #endregion

// #region zod local schemas

export const ProductSchema = z.object({
  link: {
    name: z.string(),
    href: z.string()
  },
  image: {
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number()
  },
  info: {
    id: z.number(),
    name: z.string(),
    description: z.string()
  }
});

export const MenuCategoryPropSchema = z.object({
  image: DbImageSchema,
  menu_category: DbMenuCategorySchema
});

// #endregion

// #region Inferred local types

export type ProductSchemaType = z.infer<typeof ProductSchema>;

export type MenuCategoryPropSchemaType = z.infer<typeof MenuCategoryPropSchema>;

// #endregion

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


// export type TableSchemaTypeUnion = DbProductSchemaType |
//   DbMenuCategorySchemaType |
//   DbImageSchemaType |
//   DbIngredientSchemaType |
//   DbUserSchemaType |
//   DbOrderSchemaType |
//   DbOrderItemSchemaType |
//   DbAddressSchemaType;

// export type SeedSchemaTypeUnion = DbProductSeedSchemaType |
//   DbMenuCategorySeedSchemaType |
//   DbImageSeedSchemaType |
//   DbIngredientSeedSchemaType |
//   // DbUserSchemaType | DbUserSchemaType has an id and can't be used here yet.
//   DbOrderSeedSchemaType |
//   DbOrderItemSeedSchemaType |
//   DbAddressSeedSchemaType;

// export type Product = z.infer<typeof DbProductSchema>;