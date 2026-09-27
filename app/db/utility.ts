import { text, pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";

// Helper function to generate table columns

export const getProductColumns = () => ({
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  linkName: text("link_name").notNull(),
  href: text("href").notNull(),
  imgSrc: text("img_src").notNull(),
  imgAlt: text("img_alt").notNull(),
  imgWidth: integer("img_width").notNull(),
  imgHeight: integer("img_height").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull()
})