import { config } from "dotenv";
import { ProductSchema, ImageSchema, ImageSchemaType } from "@/app/lib/definitions";

// Loading the environment variables BEFORE importing the db
config({ path: ".env.local" });

import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema.db";
import * as seeds from "@/app/lib/placeholder-data";
// import { menuDataMap } from "@/app/lib/placeholder-data";

/* Seeds all database product tables by looping over "menuDataMap" (dictionary of product arrays), maps over each
product array and returns an object of just the properties to be inserted into the table, and then bulk inserts
to the respective table with each iteration.*/

const seedImages = async () => {
  console.log("Seeding database image table...")
  try {
    const imageInsertSeed = [];

    seeds.imageDbSeedItems.forEach((seed) => {
      const { id, ...imageInsertData } = seed;
      imageInsertSeed.push(imageInsertData);
    });

    // console.log("imageInsertSeed is ", imageInsertSeed);

    await db.insert(schemas.image).values(imageInsertSeed).returning();
    console.log("✅ image table seeding complete!");
  }
  catch (error) {
    console.error("❌ Error seeding database image table:", error);
  } finally {
    process.exit(0);
  }
}

const seedProducts = async () => {
  console.log("Seeding database product table...")
  try {
    const productInsertSeed = [];

    seeds.productDbSeedItems.forEach((seed) => {
      const { id, ...productInsertData } = seed;
      productInsertSeed.push(productInsertData);
    });

    await db.insert(schemas.product).values(productInsertSeed);
    console.log("✅ product table seeding complete!");

  } catch (error) {
    console.error("❌ Error seeding database product table:", error);
  } finally {
    process.exit(0);
  }
}

const seedIngredients = async () => {
  console.log("Seeding database ingredient table...")
  try {
    const ingredientInsertSeed = [];

    seeds.ingredientDbSeedItems.forEach((seed) => {
      const { id, ...ingredientInsertData } = seed;
      ingredientInsertSeed.push(ingredientInsertData);
    });

    await db.insert(schemas.ingredient).values(ingredientInsertSeed);
    console.log("✅ ingredient table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database ingredient table:", error);
  } finally {
    process.exit(0);
  }
}

const seedMenuCategories = async () => {
  console.log("Seeding database menu_category table...");

  try {
    const menuCategoryInsertSeed = [];

    seeds.menuCategoryDbSeedItems.forEach((seed) => {
      const { id, ...menuCategoryInsertData } = seed;
      menuCategoryInsertSeed.push(menuCategoryInsertData);
    });

    await db.insert(schemas.menuCategory).values(menuCategoryInsertSeed);
    console.log("✅ menu_category table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database menu_category table:", error);
  } finally {
    process.exit(0);
  }
}

// const seedProducts = async () => {
//   console.log("Seeding database...");

//   try {
//     /* Object.entries() takes an object and returns a new array of arrays made up of the key/value pairs in the object.
//     ie. [[sandwich, sandwichItems], [chicken, chickenItems]]. The for...of loop iterates over that new array.*/
//     for (const [key, value] of Object.entries(menuDataMap)) {

//       /*"typeof schemas" - bundles a blueprint of everything exported from "schemas" into type, 
//       ie. type SchemasBlueprint = {bread: PgTable; chicken: PgTable}.

//       "keyof" - filters out all the keys from an object as a string union (if this was used on an array the keys would
//       be the array indices).

//       "as" - type assertion telling TypeScript to treat what we are assigning as a specific type.

//       "const schemaKey = key as keyof typeof schemas" - "schemaKey" will be whatever "key" is each iteration, but tells
//       TypeScript to treat it specifically as one of the keys from the blueprint of "schemas"
//       ("bread" | "chicken" | "dessert" | "drink" | "pasta" | "specialtyPizza" | "salad" | "sandwich").
//       Otherwise it gives a type error saying that schemas[key] could be 'any' or a generic 'string'.*/

//       const schemaKey = key as keyof typeof schemas;
//       // console.log("schemaKey is ", schemaKey);

//       const dataToInsert = value.map((items, index) => {
//         const { product, image, link } = items;

//         const productSchemaIsValid = ProductSchema.safeParse(value[index]);

//         if (!productSchemaIsValid.success) {
//           console.error(productSchemaIsValid.error);
//         }
//         // console.log("schemaKey: ", schemaKey + ` - value[${index}] is `, ProductSchema.safeParse(value[index]));
//         return {
//           name: product.name,
//           description: product.description,
//           paramName: link.paramName,
//           href: link.href,
//           imgSrc: image.src,
//           imgAlt: image.alt,
//           imgWidth: image.width,
//           imgHeight: image.height,
//         }
//       })
//       // console.log("dataToInsert is ", dataToInsert);
//       // console.log("schemaTypes is ", schemas[schemaKey]);
//       await db.insert(schemas[schemaKey]).values(dataToInsert);
//     }

//     console.log("✅ Seeding complete!");
//   } catch (error) {
//     console.error("❌ Error seeding database:", error);
//   } finally {
//     process.exit(0);
//   }
// };

seedImages();
seedProducts();
seedIngredients();
seedMenuCategories();