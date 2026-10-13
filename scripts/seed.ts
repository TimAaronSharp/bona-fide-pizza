import { config } from "dotenv";
import { ProductSeedSchemaType, MenuCategorySeedSchemaType, ImageSeedSchemaType, IngredientSeedSchemaType, ImageIdsSeedSchemaType, AddressSeedSchemaType } from "@/app/lib/definitions";

// Loading the environment variables BEFORE importing the db
config({ path: ".env.local" });

import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema.db";
import * as seeds from "@/app/lib/dbDataGenerator";

const seedImages = async () => {
  console.log("Seeding database image table...");
  try {
    const seededImages = await db.insert(schemas.image).values(seeds.imageDbSeedItems).returning({ id: schemas.image.id });

    // // Pulling out the returned ids from the image table to send the the appropriate seed functions.

    const menuCategoryImageIds: ImageIdsSeedSchemaType[] = await seededImages.slice(0, 9);
    const productImageIds: ImageIdsSeedSchemaType[] = await seededImages.slice(9, 47);
    const ingredientImageIds: ImageIdsSeedSchemaType[] = await seededImages.slice(47);

    console.log("✅ image table seeding complete!");

    await seedMenuCategories(menuCategoryImageIds);
    await seedProducts(productImageIds);
    await seedIngredients(ingredientImageIds);
    await seedProductIngredient();
    await seedAddress();
  }
  catch (error) {
    console.error("❌ Error seeding database image table:", error);
  } finally {
    process.exit(0);
  }
}

const seedMenuCategories = async (menuCategoryImageIds: ImageIdsSeedSchemaType[]) => {
  console.log("Seeding database menu_category table...");
  try {
    seeds.menuCategoryDbSeedItems.forEach((seed, index) => {
      seed.imgId = menuCategoryImageIds[index].id;
    });

    await db.insert(schemas.menuCategory).values(seeds.menuCategoryDbSeedItems);

    console.log("✅ menu_category table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database menu_category table:", error);
  }
}

const seedProducts = async (productImageIds: ImageIdsSeedSchemaType[]) => {
  console.log("Seeding database product table...")
  try {
    seeds.productDbSeedItems.forEach((seed, index) => {
      seed.imgId = productImageIds[index].id;
    });

    await db.insert(schemas.product).values(seeds.productDbSeedItems);

    console.log("✅ product table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database product table:", error);
  }
}

const seedIngredients = async (ingredientImageIds: ImageIdsSeedSchemaType[]) => {
  console.log("Seeding database ingredient table...")
  try {
    seeds.ingredientDbSeedItems.forEach((seed, index) => {
      seed.imgId = ingredientImageIds[index].id;
    });

    await db.insert(schemas.ingredient).values(seeds.ingredientDbSeedItems);

    console.log("✅ ingredient table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database ingredient table:", error);
  }
}

const seedProductIngredient = async () => {
  console.log("Seeding database product_ingredient table...");
  try {
    await db.insert(schemas.productIngredient).values(seeds.productIngredientDbSeedItems);
    console.log("✅ product_ingredient table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database product_ingredient table:", error);
  }
}

const seedAddress = async () => {
  console.log("Seeding database address table...")
  try {
    await db.insert(schemas.address).values(seeds.addressDbSeedItems);
    console.log("✅ address table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database address table:", error);
  }
}

seedImages();
// seedWrapper(seeds.imageDbSeedItems);

/* TODO Refactor with a "seedWrapper()" that is basically just the try/catch/finally that contains all seed functions.
        Create a reusable seed function that takes in relevant arguments to seed to correct db tables.

        ***Started creating seedWrapper() but decided to hold off for now. Right now the time
        is better spent on other areas. Keeping as reference in case I decide to return to it.***
*/

// const seedWrapper = async (dbSeedItems: TableSchemaTypeUnion[]) => {
//   console.log("Seed Wrapper initiating...");
//   try {
//     const insertSeed: SeedSchemaTypeUnion[] = [];
//     // const tableSchemas = keyof schemas;

//     dbSeedItems.forEach((seed) => {
//       const { id, ...insertData } = seed;
//       insertSeed.push(insertData);

//     });

//   } catch (error) {
//     console.error("❌ Error initializing seed wrapper:", error);
//   } finally {
//     process.exit(0);
//   }
// }



/* NOTE Below is an older version of my seed function when I had initially had products all separated out into
individual tables (pizza, sandwich, etc.) for prototyping purposes. I have completely refactored my approach and
am keeping this old code here simply for reference for the time being.*/

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