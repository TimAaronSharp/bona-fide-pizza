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

// #region -- DbImageSchemas

export const DbImageSchema = z.object({
  id: z.number(),
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  creatorId: z.string(),
  updaterId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbImageSeedSchema = DbImageSchema.omit({
  id: true,
  updaterId: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbMenuCategorySchemas

export const DbMenuCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  href: z.string(),
  imgId: z.number().nullable(),
  creatorId: z.string(),
  updaterId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbMenuCategorySeedSchema = DbMenuCategorySchema.omit({
  id: true,
  updaterId: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbProductSchemas

// NOTE May need/want to add "isActive" property to match db schema config for admin dashboard (to alter active menu)?
export const DbProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  href: z.string(),
  paramName: z.string(),
  imgId: z.number().nullable(),
  price: z.number(),
  creatorId: z.string(),
  updaterId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbProductSeedSchema = DbProductSchema.omit({
  id: true,
  updaterId: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbIngredientSchemas

// NOTE May need/want to add "isActive" property to match db schema config for admin dashboard (to alter active menu)?
export const DbIngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  imgId: z.number(),
  price: z.number(),
  creatorId: z.string(),
  updaterId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbIngredientSeedSchema = DbIngredientSchema.omit({
  id: true,
  updaterId: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbProductIngredientSchemas

export const DbProductIngredientSchema = z.object({
  productId: z.number(),
  ingredientId: z.number(),
  creatorId: z.string(),
  updaterId: z.string().nullable(), // NOTE May change my mind on this. Might just delete/create new entries when updating?
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbProductIngredientSeedSchema = DbProductIngredientSchema.omit({
  updaterId: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbUserSchemas

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

// #endregion

// #region -- DbBaseItemSchemas

// Base schema used for both DbOrderItemSchema and DbCartItemSchema
export const DbBaseItemSchema = z.object({
  id: z.number(),
  productId: z.number(),
  quantity: z.number(),
  unitPrice: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbBaseItemModifierSchema = z.object({
  ingredientId: z.number(),
  modifierType: z.string(),
  modifierPrice: z.number()
});

// #endregion

// #region -- DbOrderSchemas

export const DbOrderSchema = z.object({
  id: z.number(),
  userId: z.string(),
  addressId: z.number(),
  orderStatus: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const DbOrderSeedSchema = DbOrderSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbOrderItemSchemas

export const DbOrderItemSchema = DbBaseItemSchema.extend({
  orderId: z.number(),
});

export const DbOrderItemSeedSchema = DbOrderItemSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// #endregion

// #region -- DbOrderItemModifierSchemas

export const DbOrderItemModifierSchema = DbBaseItemModifierSchema.extend({
  orderItemId: z.number()
});

// #endregion

// #region -- DbCartSchemas

export const DbCartSchema = z.object({
  id: z.number(),
  userId: z.string(),
  sessionId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

// TODO Should I make a DbCartSeedSchema?

// #endregion

// #region -- DbCartItemSchemas

export const DbCartItemSchema = DbBaseItemSchema.extend({
  cartId: z.number(),
});

// #endregion

// #region -- DbCartItemModifierSchemas

export const DbCartItemModifierSchema = DbBaseItemModifierSchema.extend({
  cartItemId: z.number()
});

// #endregion

// #region -- DbAddressSchemas

export const DbAddressSchema = z.object({
  id: z.number(),
  line1: z.string(),
  line2: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
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

// #endregion
/*TODO Decide if you still want this as a type of just extract the .id from the returned
object. ie) const imageId = seededImages.id (Would be more complex than this since you're
dealing with an array of ids, and it may be more work to refactor this than to keep as is,
so it may not really be worth it to change). */
export const DbIntIdSeedSchema = z.object({
  id: z.number()
});

export const DbAddressAndUserIdSeedSchema = z.object({
  id: z.number(),
  userId: z.string()
});

// #endregion

// #region Inferred db types

export type DbImageSchemaType = z.infer<typeof DbImageSchema>;
export type DbImageSeedSchemaType = z.infer<typeof DbImageSeedSchema>;

export type DbMenuCategorySchemaType = z.infer<typeof DbMenuCategorySchema>;
export type DbMenuCategorySeedSchemaType = z.infer<typeof DbMenuCategorySeedSchema>;

export type DbProductSchemaType = z.infer<typeof DbProductSchema>;
export type DbProductSeedSchemaType = z.infer<typeof DbProductSeedSchema>;

export type DbIngredientSchemaType = z.infer<typeof DbIngredientSchema>;
export type DbIngredientSeedSchemaType = z.infer<typeof DbIngredientSeedSchema>;

export type DbProductIngredientSchemaType = z.infer<typeof DbProductIngredientSchema>;
export type DbProductIngredientSeedSchemaType = z.infer<typeof DbProductIngredientSeedSchema>;

export type DbUserSchemaType = z.infer<typeof DbUserSchema>;

export type DbOrderSchemaType = z.infer<typeof DbOrderSchema>;
export type DbOrderSeedSchemaType = z.infer<typeof DbOrderSeedSchema>;

export type DbOrderItemSchemaType = z.infer<typeof DbOrderItemSchema>;
export type DbOrderItemSeedSchemaType = z.infer<typeof DbOrderItemSeedSchema>;

export type DbOrderItemModifierSchemaType = z.infer<typeof DbOrderItemModifierSchema>;

export type DbCartSchemaType = z.infer<typeof DbCartSchema>;

export type DbCartItemSchemaType = z.infer<typeof DbCartItemSchema>;

export type DbCartItemModifierSchemaType = z.infer<typeof DbCartItemModifierSchema>;

export type DbAddressSchemaType = z.infer<typeof DbAddressSchema>;
export type DbAddressSeedSchemaType = z.infer<typeof DbAddressSeedSchema>;

export type DbIntIdSeedSchemaType = z.infer<typeof DbIntIdSeedSchema>;

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

export const IngredientSchema = DbIngredientSeedSchema.omit({
  creatorId: true
})

/* TODO Look at removing the newly added "creatorId/updaterId" for these. Those won't be needed when queried from the db. */
export const MenuCategoryAndImagePropSchema = z.object({
  image: DbImageSchema,
  menu_category: DbMenuCategorySchema
});

export const ProductAndImageQueryPropSchema = z.object({
  product: DbProductSchema,
  image: DbImageSchema
});

// #endregion

// #region Inferred local types

export type ProductSchemaType = z.infer<typeof ProductSchema>;

export type Ingredient = z.infer<typeof IngredientSchema>;

export type MenuCategoryAndImagePropSchemaType = z.infer<typeof MenuCategoryAndImagePropSchema>;

export type ProductAndImageQueryPropSchemaType = z.infer<typeof ProductAndImageQueryPropSchema>;

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