import { text, pgTable, serial } from "drizzle-orm/pg-core";

// Database schemas

export const bread = pgTable("bread", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const chicken = pgTable("chicken", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const dessert = pgTable("dessert", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const drink = pgTable("drink", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const pasta = pgTable("pasta", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const specialtyPizza = pgTable("specialty_pizza", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const salad = pgTable("salad", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});

export const sandwich = pgTable("sandwich", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});