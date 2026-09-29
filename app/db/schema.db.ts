import { pgTable } from "drizzle-orm/pg-core";
import { getProductColumns } from "./utility";

// Database schemas
/* ...getProductColumns returns an object with all of the column definitions and spreads them out for the 
drizzle-kit generation/migration. */
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