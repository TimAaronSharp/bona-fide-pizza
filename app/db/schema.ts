import { integer, text, pgTable, serial } from "drizzle-orm/pg-core";

export const product = pgTable("product", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull()
});