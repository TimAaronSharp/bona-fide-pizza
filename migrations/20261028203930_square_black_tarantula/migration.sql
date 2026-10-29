CREATE TABLE "account" (
	"id" text PRIMARY KEY,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL UNIQUE,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	"impersonated_by" text
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY,
	"name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"role" text,
	"banned" boolean DEFAULT false,
	"ban_reason" text,
	"ban_expires" timestamp,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "address" (
	"id" serial PRIMARY KEY,
	"line_1" varchar(200) NOT NULL,
	"line_2" varchar(200),
	"city" varchar(100) NOT NULL,
	"state" varchar(13) NOT NULL,
	"zip_code" varchar(10) NOT NULL,
	"user_id" text NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "cart" (
	"id" serial PRIMARY KEY,
	"user_id" text,
	"session_id" varchar(36),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cart_item" (
	"id" serial PRIMARY KEY,
	"cartId" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer NOT NULL,
	"unit_price" integer NOT NULL,
	"customization_signature" varchar(500) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cart_item_modifier" (
	"cart_item_id" integer,
	"ingredient_id" integer,
	"modifier_type" varchar(6) NOT NULL,
	"modifier_price" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "cart_item_modifier_pkey" PRIMARY KEY("cart_item_id","ingredient_id")
);
--> statement-breakpoint
CREATE TABLE "image" (
	"id" serial PRIMARY KEY,
	"src" varchar(200) NOT NULL,
	"alt" varchar(200) NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"creator_id" text NOT NULL,
	"updater_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "ingredient" (
	"id" serial PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"category" varchar(30) NOT NULL,
	"img_id" integer,
	"price" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"creator_id" text NOT NULL,
	"updater_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "menu_category" (
	"id" serial PRIMARY KEY,
	"name" varchar(30) NOT NULL,
	"href" varchar(100) NOT NULL,
	"img_id" integer,
	"is_active" boolean DEFAULT true NOT NULL,
	"creator_id" text NOT NULL,
	"updater_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "order" (
	"id" serial PRIMARY KEY,
	"user_id" text NOT NULL,
	"address_id" integer NOT NULL,
	"order_status" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "order_item" (
	"id" serial PRIMARY KEY,
	"order_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer NOT NULL,
	"unit_price" integer NOT NULL,
	"customization_signature" varchar(500) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "order_item_modifier" (
	"order_item_id" integer,
	"ingredient_id" integer,
	"modifier_type" varchar(6) NOT NULL,
	"modifier_price" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "order_item_modifier_pkey" PRIMARY KEY("order_item_id","ingredient_id")
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" serial PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"category" varchar NOT NULL,
	"href" varchar(100) NOT NULL,
	"param_name" varchar(60) NOT NULL,
	"img_id" integer,
	"price" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"creator_id" text NOT NULL,
	"updater_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "product_ingredient" (
	"product_id" integer,
	"ingredient_id" integer,
	"creator_id" text NOT NULL,
	"updater_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_ingredient_pkey" PRIMARY KEY("product_id","ingredient_id")
);
--> statement-breakpoint
CREATE INDEX "account_userId_idx" ON "account" ("user_id");--> statement-breakpoint
CREATE INDEX "session_userId_idx" ON "session" ("user_id");--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" ("identifier");--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_cartId_cart_id_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_product_id_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id");--> statement-breakpoint
ALTER TABLE "cart_item_modifier" ADD CONSTRAINT "cart_item_modifier_cart_item_id_cart_item_id_fkey" FOREIGN KEY ("cart_item_id") REFERENCES "cart_item"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "cart_item_modifier" ADD CONSTRAINT "cart_item_modifier_ingredient_id_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id");--> statement-breakpoint
ALTER TABLE "image" ADD CONSTRAINT "image_creator_id_user_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "image" ADD CONSTRAINT "image_updater_id_user_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_img_id_image_id_fkey" FOREIGN KEY ("img_id") REFERENCES "image"("id");--> statement-breakpoint
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_creator_id_user_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_updater_id_user_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "menu_category" ADD CONSTRAINT "menu_category_img_id_image_id_fkey" FOREIGN KEY ("img_id") REFERENCES "image"("id");--> statement-breakpoint
ALTER TABLE "menu_category" ADD CONSTRAINT "menu_category_creator_id_user_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "menu_category" ADD CONSTRAINT "menu_category_updater_id_user_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "order" ADD CONSTRAINT "order_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "order" ADD CONSTRAINT "order_address_id_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id");--> statement-breakpoint
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_order_id_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_product_id_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id");--> statement-breakpoint
ALTER TABLE "order_item_modifier" ADD CONSTRAINT "order_item_modifier_order_item_id_order_item_id_fkey" FOREIGN KEY ("order_item_id") REFERENCES "order_item"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "order_item_modifier" ADD CONSTRAINT "order_item_modifier_ingredient_id_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id");--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "product_img_id_image_id_fkey" FOREIGN KEY ("img_id") REFERENCES "image"("id");--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "product_creator_id_user_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "product_updater_id_user_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "product_ingredient" ADD CONSTRAINT "product_ingredient_product_id_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id");--> statement-breakpoint
ALTER TABLE "product_ingredient" ADD CONSTRAINT "product_ingredient_ingredient_id_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id");--> statement-breakpoint
ALTER TABLE "product_ingredient" ADD CONSTRAINT "product_ingredient_creator_id_user_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "product_ingredient" ADD CONSTRAINT "product_ingredient_updater_id_user_id_fkey" FOREIGN KEY ("updater_id") REFERENCES "user"("id");