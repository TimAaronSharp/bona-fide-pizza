import { config } from "dotenv";

// Loading the environment variables BEFORE importing the db
config({ path: ".env.local" });

import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema";
import { menuDataMap } from "@/app/lib/placeholder-data";

/* Seeds all database product tables by looping over "menuDataMap" (dictionary of product arrays), maps over each
product array and returns an object of just the properties to be inserted into the table, and then bulk inserts
to the respective table with each iteration.*/

const seedProducts = async () => {
  console.log("Seeding database...");

  try {
    /* Object.entries() takes an object and returns a new array of arrays made up of the key/value pairs in the object.
    ie. [[sandwich, sandwichItems], [chicken, chickenItems]]. The for...of loop iterates over that new array.*/
    for (const [key, value] of Object.entries(menuDataMap)) {

      /*"typeof schemas" - bundles a blueprint of everything exported from "schemas" into type, 
      ie. type SchemasBlueprint = {bread: PgTable; chicken: PgTable}.

      "keyof" - filters out all the keys from an object as a string union (if this was used on an array the keys would
      be the array indices).

      "as" - type assertion telling TypeScript to treat what we are assigning as a specific type.
      
      "const schemaKey = key as keyof typeof schemas" - "schemaKey" will be whatever "key" is each iteration, but tells
      TypeScript to treat it specifically as one of the keys from the blueprint of "schemas"
      ("bread" | "chicken" | "dessert" | "drink" | "pasta" | "specialtyPizza" | "salad" | "sandwich").
      Otherwise it gives a type error saying that schemas[key] could be 'any' or a generic 'string'.*/

      const schemaKey = key as keyof typeof schemas;

      const dataToInsert = value.map((items) => {
        return {
          name: items.product.name,
          description: items.product.description,
          img: items.image.src
        }
      })
      await db.insert(schemas[schemaKey]).values(dataToInsert);
    }

    console.log("✅ Seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    process.exit(0);
  }
};

seedProducts();