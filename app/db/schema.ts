import { text, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

// Database schemas

export const menu = pgTable("menu", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const bread = pgTable("bread", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const chicken = pgTable("chicken", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const dessert = pgTable("dessert", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const drink = pgTable("drink", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const pasta = pgTable("pasta", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const specialty_pizza = pgTable("specialty_pizza", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const salad = pgTable("salad", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});

export const sandwich = pgTable("sandwich", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: text("img_width").notNull(),
  imgHeight: text("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
});