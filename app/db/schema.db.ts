import { pgTable, pgSchema, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { getProductColumns } from "./utility";

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
})

// export const menu = pgTable("menu", {
//   ...getProductColumns()
// });

// export const bread = pgTable("bread", {
//   ...getProductColumns()
// });

// export const chicken = pgTable("chicken", {
//   ...getProductColumns()
// });

// export const dessert = pgTable("dessert", {
//   ...getProductColumns()
// });

// export const drink = pgTable("drink", {
//   ...getProductColumns()
// });

// export const pasta = pgTable("pasta", {
//   ...getProductColumns()
// });

// export const specialty_pizza = pgTable("specialty_pizza", {
//   ...getProductColumns()
// });

// export const salad = pgTable("salad", {
//   ...getProductColumns()
// });

// export const sandwich = pgTable("sandwich", {
//   ...getProductColumns()
// });