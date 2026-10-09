import { pgTable, serial, text, integer, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { user } from "@/app/db/auth-schema.db";
// Database schemas
/* ...getProductColumns returns an object with all of the column definitions and spreads them out for the 
drizzle-kit generation/migration. */

// TODO google this stuff to check about scoping tables by postgresql schema (product.pizza, product.sandwich, etc.). You may not even need it.
// export const something = pgSchema("sample_schema")

// export const schemaToTable = something.table

export const menuCategory = pgTable("menu_category", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  href: text("href").notNull(),
  imgId: integer("img_id").references(() => image.id), // nullable so that a fallback img can be used.
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const product = pgTable("product", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  paramName: text("param_name").notNull(),
  href: text("href").notNull(),
  imgId: integer("img_id").references(() => image.id), // nullable so that a fallback img can be used.
  price: integer("price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const image = pgTable("image", {
  id: serial().primaryKey(),
  src: text("src").notNull(), // Make unique() after you get unique images for everything?
  alt: text("alt").notNull(),
  width: integer("width").notNull(),
  height: integer("height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const ingredient = pgTable("ingredient", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  imgId: integer("img_id").references(() => image.id), // nullable so that a fallback img can be used.
  price: integer("price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const productIngredient = pgTable("product_ingredient", {
  productId: integer("product_id").references(() => product.id).notNull(),
  ingredientId: integer("ingredient_id").references(() => ingredient.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
}, (table) => [
  primaryKey({ columns: [table.productId, table.ingredientId] }) // Sets composite key as primary key.
]);

export const order = pgTable("order", {
  id: serial().primaryKey(),
  userId: text("user_id").references(() => user.id).notNull(),
  addressId: integer("address_id").references(() => address.id).notNull(),
  orderTotal: integer("order_total").notNull(),
  orderStatus: text("order_status").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const orderItem = pgTable("order_item", {
  id: serial().primaryKey(),
  orderId: integer("order_id").references(() => order.id).notNull(),
  productId: integer("product_id").references(() => product.id).notNull(),
  quantity: integer("quantity").notNull(),
  orderItemTotal: integer("order_item_total").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const address = pgTable("address", {
  id: serial().primaryKey(),
  line1: text("line_1").notNull(),
  line2: text("line_2").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  postalCode: text("postal_code").notNull(), // made as text in case user does full 9 digit code with "-" (12345-6789).
  userId: text("user_id").references(() => user.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});