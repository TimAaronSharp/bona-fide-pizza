import { config } from "dotenv";

// Loading the environment variables BEFORE importing the db
config({ path: ".env.local" });

import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema";
import { menuDataMap } from "@/app/lib/placeholder-data";

const seedPizzas = async () => {
  console.log("Seeding database...");

  try {
    const testArray = [];
    for (const [key, value] of Object.entries(menuDataMap)) {
      // console.log(`Key: ${key}, Value: ${Array.isArray(value)}`);
      value.forEach((val) => {
        console.log("val is ", val)
      })

      // const bulkInsert = key.
    }





    // const dataToInsert = Object.values(menuDataMap).map((dataArray) => {
    //   const parsedDataArrays = dataArray.map((data) => {
    //     return {
    //       name: data.product.name,
    //       description: data.product.description,
    //       img: data.image.src
    //     }
    //   });
    //   console.log("parsedDataArrays is ", parsedDataArrays);

    // });
    // console.log("productArray is ", productArray);
    // const pizzasToInsert = menuDataMap.pizza.map((pizzaItem) => ({
    //   name: pizzaItem.product.name,
    //   description: pizzaItem.product.description,
    //   img: pizzaItem.image.src
    // }));

    // await db.insert(schemas[`${key}`]).values(pizzasToInsert);
    // console.log("✅ Seeding complete!");
    // console.log("dataToInsert is ", dataToInsert)
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    process.exit(0);
  }
};

seedPizzas();