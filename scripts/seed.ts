import { config } from "dotenv";
import { DbIntIdSeedSchemaType, DbAddressAndUserIdSeedSchemaType } from "@/app/lib/definitions";

// Loading the environment variables BEFORE importing the db
config({ path: ".env.local" });

import { db } from "@/app/db/drizzle";
import { user } from "@/app/db/auth-schema.db";
import * as schemas from "@/app/db/schema.db";
import * as seeds from "@/app/lib/dbDataGenerator";

/*NOTE Learn more about how this works - It looks at db.transaction, finds its first argument (the callback function)
and then find the first argument of THAT function (the tx object itself). This allows me to dynamically type
the tx object to send to all the seed functions so they all work in the same transaction. */
type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0];

const seedImages = async () => {
  console.log("Seeding database image table...");
  try {
    await db.transaction(async (tx) => {

      const [queriedUserId] = await tx.select({ id: user.id }).from(user).limit(1);
      // Extracting out like this so I don't need to make a "id: string" type to pass "queriedUserId" to other functions.
      const userId = queriedUserId.id;
      seeds.imageDbSeedItems.forEach((seed) => {
        seed.creatorId = queriedUserId.id;
      });

      const seededImages = await tx.insert(schemas.image).values(seeds.imageDbSeedItems).returning({ id: schemas.image.id });

      // Pulling out the returned ids from the image table to send the the appropriate seed functions.

      const menuCategoryImageIds: DbIntIdSeedSchemaType[] = await seededImages.slice(0, 9);
      const productImageIds: DbIntIdSeedSchemaType[] = await seededImages.slice(9, 48);
      const ingredientImageIds: DbIntIdSeedSchemaType[] = await seededImages.slice(48);

      // TODO Temporary in case I need to check which ids are in different indexes for later seeding.
      // console.log("menuCategoryImageIds is", menuCategoryImageIds);
      // console.log("productImageIds is", productImageIds);
      // console.log("ingredientImageIds is", ingredientImageIds);

      console.log("✅ image table seeding complete!");

      await seedMenuCategories(tx, userId, menuCategoryImageIds);
      await seedProducts(tx, userId, productImageIds);
      await seedIngredients(tx, userId, ingredientImageIds);
      await seedProductIngredient(tx, userId);
      await seedAddress(tx);
    });
  }
  catch (error) {
    console.error("❌ Error seeding database image table:", error);
  } finally {
    process.exit(0);
  }
}

const seedMenuCategories = async (tx: Transaction, userId: string, menuCategoryImageIds: DbIntIdSeedSchemaType[]) => {
  console.log("Seeding database menu_category table...");
  try {
    seeds.menuCategoryDbSeedItems.forEach((seed, index) => {
      seed.imgId = menuCategoryImageIds[index].id;
      seed.creatorId = userId;
    });

    await tx.insert(schemas.menuCategory).values(seeds.menuCategoryDbSeedItems);

    console.log("✅ menu_category table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database menu_category table:", error);
  }
}

const seedProducts = async (tx: Transaction, userId: string, productImageIds: DbIntIdSeedSchemaType[]) => {
  console.log("Seeding database product table...")
  try {
    seeds.productDbSeedItems.forEach((seed, index) => {
      seed.imgId = productImageIds[index].id;
      seed.creatorId = userId;
    });

    await tx.insert(schemas.product).values(seeds.productDbSeedItems);

    console.log("✅ product table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database product table:", error);
  }
}

const seedIngredients = async (tx: Transaction, userId: string, ingredientImageIds: DbIntIdSeedSchemaType[]) => {
  console.log("Seeding database ingredient table...")
  try {
    seeds.ingredientDbSeedItems.forEach((seed, index) => {
      seed.imgId = ingredientImageIds[index].id;
      seed.creatorId = userId;
    });

    await tx.insert(schemas.ingredient).values(seeds.ingredientDbSeedItems);

    console.log("✅ ingredient table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database ingredient table:", error);
  }
}

const seedProductIngredient = async (tx: Transaction, userId: string) => {
  console.log("Seeding database product_ingredient table...");
  try {
    seeds.productIngredientDbSeedItems.forEach((seed) => {
      seed.creatorId = userId;
    })
    await tx.insert(schemas.productIngredient).values(seeds.productIngredientDbSeedItems);
    console.log("✅ product_ingredient table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database product_ingredient table:", error);
  }
}

/*NOTE This will only work currently with 2 addresses and 2 users. Will need to refactor if I want to scale it. */
const seedAddress = async (tx: Transaction) => {
  console.log("Seeding database address table...")
  try {
    const queriedUserIds = await tx.select({ id: user.id }).from(user).limit(2);

    const userIds: string[] = []

    // Extracting out like this so I don't need to make a "id: string" type to pass "queriedUserIds" to other functions.
    queriedUserIds.map((userId) => {
      userIds.push(userId.id);
    });

    seeds.addressDbSeedItems.map((addressSeed, index) => {
      return seeds.addressDbSeedItems[index].userId = userIds[index];
    });
    const seededAddresses = await tx.insert(schemas.address).values(seeds.addressDbSeedItems).returning({ id: schemas.address.id, userId: schemas.address.userId });

    console.log("✅ address table seeding complete!");

    await seedOrder(tx, seededAddresses);
  } catch (error) {
    console.error("❌ Error seeding database address table:", error);
  }
}

const seedOrder = async (tx: Transaction, addressAndUserIds: DbAddressAndUserIdSeedSchemaType[]) => {
  console.log("Seeding database order table...");
  try {
    /*TODO I don't believe this will work if a user has created more than one address, because that userId will be
    matched more than once. This works for now with how many addresses I have but test/look into this later. */
    // TODO Temp log in case I need to check these again soon
    // console.log("seeds.orderDbSeedItems starts as", seeds.orderDbSeedItems);
    addressAndUserIds.forEach((ids) => {
      seeds.orderDbSeedItems.forEach((seed, j) => {
        if (j % 2 === 0) {
          seed.userId = addressAndUserIds[0].userId;
          // TODO Temp log in case I need to check these again soon
          // console.log(`seeds.orderDbSeedItems[${j}] (seed) is now`, seed);
        } else {
          seed.userId = addressAndUserIds[1].userId;
          // TODO Temp log in case I need to check these again soon
          // console.log(`seeds.orderDbSeedItems[${j}] (seed) is now`, seed);
        }

        if (seed.userId == ids.userId) {
          // .id === address.id.
          seed.addressId = ids.id;
        }
      });
    });
    // TODO Temp log in case I need to check these again soon
    // console.log("seeds.orderDbSeedItems ends as", seeds.orderDbSeedItems);

    await tx.insert(schemas.order).values(seeds.orderDbSeedItems).returning({ id: schemas.order.id });

    console.log("✅ order table seeding complete!");

    await seedOrderItem(tx);
  } catch (error) {
    console.error("❌ Error seeding database order table:", error);
  }
}

const seedOrderItem = async (tx: Transaction) => {
  console.log("Seeding database order_item table...");
  try {
    await tx.insert(schemas.orderItem).values(seeds.orderItemDbSeedItems);

    console.log("✅ order_item table seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database order_item table:", error);
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

//         const dbProductSchemaIsValid = DbProductSchema.safeParse(value[index]);

//         if (!dbProductSchemaIsValid.success) {
//           console.error(dbProductSchemaIsValid.error);
//         }
//         // console.log("schemaKey: ", schemaKey + ` - value[${index}] is `, DbProductSchema.safeParse(value[index]));
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