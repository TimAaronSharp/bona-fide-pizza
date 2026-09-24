import { config } from "dotenv";

// Loading the environment variables BEFORE importing the db
config({ path: ".env.local" });

import { db } from "@/app/db/drizzle";
import { pizza } from "@/app/db/schema";
import { menuDataMap } from "@/app/lib/placeholder-data";

const seedPizzas = async () => {
  console.log("Seeding database...");

  try {
    const pizzasToInsert = menuDataMap.pizza.map((pizzaItem) => ({
      name: pizzaItem.product.name,
      description: pizzaItem.product.description,
      img: pizzaItem.image.src
    }));

    await db.insert(pizza).values(pizzasToInsert);
    console.log("✅ Seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    process.exit(0);
  }
};

seedPizzas();