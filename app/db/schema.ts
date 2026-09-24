import { text, pgTable, serial } from "drizzle-orm/pg-core";

export const pizza = pgTable("pizza", {
  id: serial().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  img: text("img").notNull()
});