ALTER TABLE "product" ALTER COLUMN "category" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "product_category_enum";--> statement-breakpoint
CREATE TYPE "product_category_enum" AS ENUM('custom_pizza', 'specialty', 'bread', 'chicken', 'pasta', 'sandwich', 'salad', 'dessert', 'drinks');--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "category" SET DATA TYPE "product_category_enum" USING "category"::"product_category_enum";