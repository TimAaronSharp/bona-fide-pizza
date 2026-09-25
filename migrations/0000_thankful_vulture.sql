CREATE TABLE "bread" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chicken" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "dessert" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "drink" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "menu" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pasta" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "salad" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sandwich" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "specialty_pizza" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"link_name" text NOT NULL,
	"href" text NOT NULL,
	"img_src" text NOT NULL,
	"img_alt" text NOT NULL,
	"img_width" text NOT NULL,
	"img_height" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
