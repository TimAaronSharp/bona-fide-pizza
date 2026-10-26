import { pgTable, serial, text, integer, timestamp, primaryKey, boolean, varchar } from "drizzle-orm/pg-core";
import { user } from "@/app/db/auth-schema.db";
// Database schemas
/* ...getProductColumns returns an object with all of the column definitions and spreads them out for the 
drizzle-kit generation/migration. */

// TODO google this stuff to check about scoping tables by postgresql schema (product.pizza, product.sandwich, etc.). You may not even need it.
// export const something = pgSchema("sample_schema")

// export const schemaToTable = something.table

/* TODO Go through and, where appropriate, refactor db schemas to include "creatorId" properties. */

/* TODO Contemplate creating "edit history" tables so you can log how many times a product, menu_category, image, etc.,
has been edited. */

export const image = pgTable("image", {
  id: serial().primaryKey(),
  src: varchar("src", { length: 200 }).notNull(), // Make unique() after you get unique images for everything?
  alt: varchar("alt", { length: 200 }).notNull(),
  width: integer("width").notNull(),
  height: integer("height").notNull(),
  isActive: boolean("is_active").default(true).notNull(), // For soft deleting an image to maintain record integrity.
  creatorId: text("creator_id").references(() => user.id).notNull(),
  updaterId: text("updater_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
  deletedAt: timestamp("deleted_at")
});

export const menuCategory = pgTable("menu_category", {
  id: serial().primaryKey(),
  name: varchar("name", { length: 30 }).notNull(),
  href: varchar("href", { length: 100 }).notNull(),
  imgId: integer("img_id").references(() => image.id), // nullable so that a fallback img can be used. REVISIT THIS. Shouldn't NEED to be nullable, right?
  isActive: boolean("is_active").default(true).notNull(), // For soft deleting a menu_category to maintain record integrity.
  creatorId: text("creator_id").references(() => user.id).notNull(),
  updaterId: text("updater_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
  deletedAt: timestamp("deleted_at")
});

export const product = pgTable("product", {
  id: serial().primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  category: varchar("category",).notNull(), // Look into seeing if you can reasonably refactor this to be a foreign key for menu_category.id. Currently this is needed as is in [category]/page.tsx.
  href: varchar("href", { length: 100 }).notNull(),
  paramName: varchar("param_name", { length: 60 }).notNull(),
  imgId: integer("img_id").references(() => image.id), // nullable so that a fallback img can be used. REVISIT THIS. Shouldn't NEED to be nullable, right?
  price: integer("price").notNull(),
  isActive: boolean("is_active").default(true).notNull(), // For soft deleting a product to maintain record integrity.
  creatorId: text("creator_id").references(() => user.id).notNull(),
  updaterId: text("updater_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
  deletedAt: timestamp("deleted_at")
});

export const ingredient = pgTable("ingredient", {
  id: serial().primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  category: varchar("category", { length: 30 }).notNull(),
  imgId: integer("img_id").references(() => image.id), // nullable so that a fallback img can be used. REVISIT THIS. Shouldn't NEED to be nullable, right?
  price: integer("price").notNull(),
  isActive: boolean("is_active").default(true).notNull(), // For soft deleting an ingredient to maintain record integrity.
  creatorId: text("creator_id").references(() => user.id).notNull(),
  updaterId: text("updater_id").references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
  deletedAt: timestamp("deleted_at")
});

export const productIngredient = pgTable("product_ingredient", {
  productId: integer("product_id").references(() => product.id).notNull(),
  ingredientId: integer("ingredient_id").references(() => ingredient.id).notNull(),
  creatorId: text("creator_id").references(() => user.id).notNull(),
  updaterId: text("updater_id").references(() => user.id), // NOTE May change my mind on this. Might just delete/create new entries when updating?
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
}, (table) => [
  primaryKey({ columns: [table.productId, table.ingredientId] }) // Sets composite key as primary key.
]);

export const order = pgTable("order", {
  id: serial().primaryKey(),
  userId: text("user_id").references(() => user.id).notNull(),
  addressId: integer("address_id").references(() => address.id).notNull(),
  orderStatus: varchar("order_status", { length: 20 }).notNull(), // TODO Look into refactoring with enum to only allow specific strings ("complete", "in progress", etc.)
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const orderItem = pgTable("order_item", {
  id: serial().primaryKey(),
  orderId: integer("order_id").references(() => order.id, { onDelete: "cascade" }).notNull(),
  productId: integer("product_id").references(() => product.id).notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: integer("unit_price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export const orderItemModifier = pgTable("order_item_modifier", {
  orderItemId: integer("order_item_id").references(() => orderItem.id, { onDelete: "cascade" }).notNull(),
  ingredientId: integer("ingredient_id").references(() => ingredient.id).notNull(),
  modifierType: varchar("modifier_type", { length: 6 }).notNull(),
  modifierPrice: integer("modifier_price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => [
  primaryKey({ columns: [table.orderItemId, table.ingredientId] }) // Sets composite key as primary key.
]);

export const cart = pgTable("cart", {
  id: serial().primaryKey(),
  userId: text("user_id").references(() => user.id),
  sessionId: varchar("session_id", { length: 36 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const cartItem = pgTable("cart_item", {
  id: serial().primaryKey(),
  cartId: integer().references(() => cart.id, { onDelete: "cascade" }).notNull(),
  productId: integer("product_id").references(() => product.id).notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: integer("unit_price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const cartItemModifier = pgTable("cart_item_modifier", {
  cartItemId: integer("cart_item_id").references(() => cartItem.id, { onDelete: "cascade" }).notNull(),
  ingredientId: integer("ingredient_id").references(() => ingredient.id).notNull(),
  modifierType: varchar("modifier_type", { length: 6 }).notNull(),
  modifierPrice: integer("modifier_price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => [
  primaryKey({ columns: [table.cartItemId, table.ingredientId] }) // Sets composite key as primary key.
]);

/* TODO When writing delete/update function for address, make sure to not delete/update the actual row. Instead, for
delete have it simply change "isActive" to false, and for update have it change "isActive" to false, AND insert a new
address in the address table. This will ensure that if someone deletes/updates their address it will not affect the
address that is linked to an order (to be able to keep an accurate order history).*/
export const address = pgTable("address", {
  id: serial().primaryKey(),
  line1: varchar("line_1", { length: 200 }).notNull(),
  line2: varchar("line_2", { length: 200 }),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 13 }).notNull(), // TODO Longest state names have 14 chars (including spaces). Possible look into making this an enum of state abbreviations?
  zipCode: varchar("zip_code", { length: 10 }).notNull(), // varchar in case user does full 9 digit code with "-" (12345-6789) and so that integer won't cut off leading 0's (02312 = 2312). Maybe would be easier to start with limiting to 5?
  userId: text("user_id").references(() => user.id).notNull(),
  isActive: boolean("is_active").default(true).notNull(), // This is set to false if address is deleted/updated (and a new address will be created if updated). This preserves addresses for records if they are deleted/changed by the user.
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
  deletedAt: timestamp("deleted_at") // For soft deleting an address to maintain record integrity.
});