import { pgTable, pgSchema } from "drizzle-orm/pg-core";
import { getProductColumns } from "./utility";

// Database schemas
/* ...getProductColumns returns an object with all of the column definitions and spreads them out for the 
drizzle-kit generation/migration. */

// TODO google this stuff to check about scoping tables by postgresql schema (product.pizza, product.sandwich, etc.). You may not even need it.
// export const something = pgSchema("sample_schema")

// export const schemaToTable = something.table


export const menu = pgTable("menu", {
  ...getProductColumns()
});

export const bread = pgTable("bread", {
  ...getProductColumns()
});

export const chicken = pgTable("chicken", {
  ...getProductColumns()
});

export const dessert = pgTable("dessert", {
  ...getProductColumns()
});

export const drink = pgTable("drink", {
  ...getProductColumns()
});

export const pasta = pgTable("pasta", {
  ...getProductColumns()
});

export const specialty_pizza = pgTable("specialty_pizza", {
  ...getProductColumns()
});

export const salad = pgTable("salad", {
  ...getProductColumns()
});

export const sandwich = pgTable("sandwich", {
  ...getProductColumns()
});