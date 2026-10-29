import { db } from "@/app/db/drizzle";
import { asc, eq, getColumns } from "drizzle-orm";
import { Customizer } from "@/app/ui/components/customizer";
import Image from "next/image";
import * as schemas from "@/app/db/schema.db";
import { unstable_cache } from "next/cache";
import { EditProduct } from "@/app/ui/components/editProduct";
import { CustomizedProductStateType, Product, ProductAndImageQueryPropSchemaType, ProductIngredient } from "@/app/lib/definitions";
import { generateDefaultToppings } from "@/app/lib/utility";
// import type { Transaction } from "@/app/lib/definitions";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/


// TODO Look into refactoring all "getXData()" functions into a transaction.

// async function getData(product: string) {
//   console.log("Getting data for ProductPage...")
//   try {
//     await db.transaction(async (tx) => {
//       const [productItem] = await getProductData(tx, product);
//       const ingredients = await getIngredientData(tx);
//       const productIngredients = await getProductIngredientData(tx, product, productItem.product.id);
//     })
//   } catch (error) {
//     console.error("❌ Error getting data for ProductPage:", error);
//   }
// }

/*NOTE product in the params is the name of the "[product]" dynamic */

async function getProductData(product: string) {
  return unstable_cache(
    async () => {
      return await db.select().from(schemas.product).where(eq(schemas.product.paramName, product)).innerJoin(schemas.image, eq(schemas.image.id, schemas.product.imgId));
    },
    [`product-key-${product}`],
    { tags: [`product-${product}`] }
  )();
}

async function getIngredientData() {
  const { isActive, creatorId, updaterId, createdAt, updatedAt, deletedAt, ...ingredientData } = getColumns(schemas.ingredient);
  return unstable_cache(
    async () => {
      return await db.select(ingredientData).from(schemas.ingredient);
    },
    ["ingredient-key"],
    { tags: ["ingredient"] }
  )();
}

async function getProductIngredientData(product: string, productId: number) {
  const { creatorId, updaterId, createdAt, updatedAt, ...productIngredientData } = getColumns(schemas.productIngredient);
  console.log("productId is", productId);
  return unstable_cache(
    async () => {
      return await db.select(productIngredientData).from(schemas.productIngredient).where(eq(schemas.productIngredient.productId, productId)).orderBy(asc(schemas.productIngredient.ingredientId));
    },
    [`productIngredient-key-${product}`],
    { tags: [`productIngredient-${product}`] }
  )();
}

function buildInitialState(product: Product, productIngredients: ProductIngredient[]): CustomizedProductStateType {
  if (product.category === "specialty") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id,
      crust: 1,
      crustSeasoning: 7,
      mozzarella: {
        id: 15,
        density: "normal"
      },
      sauce: {
        id: 9,
        density: "normal"
      },
      toppings: generateDefaultToppings(productIngredients)
    };
  } else if (product.category === "bread") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id
    }
  } else if (product.category === "chicken") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id
    }
  } else if (product.category === "pasta") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id
    }
  } else if (product.category === "sandwich") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id,
      sauce: {
        id: 9,
        density: "normal"
      },
      toppings: generateDefaultToppings(productIngredients)
    };
  } else if (product.category === "salad") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id
    }
  } else if (product.category === "dessert") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id
    }
  } else if (product.category === "drinks") {
    return {
      category: product.category,
      qty: 1,
      productId: product.id
    }
  }
  // const _exhaustiveCheck: never = product.category;
  throw new Error("Unsupported product category: ")
}

export default async function ProductPage({ params }: { params: { product: string } }) {
  const { product } = await params;
  // const schemaKey = category as keyof typeof schemas;
  // console.log("paramName is ", paramName);

  // TODO Figure out how to use the "getColumns()" to destruct "isActive" etc. in "getProductData()" query (unsure w/ 2 tables).
  const [item] = await getProductData(product);
  const ingredients = await getIngredientData();
  const productIngredients = await getProductIngredientData(product, item.product.id);
  const initialState = buildInitialState(item.product, productIngredients);

  console.log("initialState is", initialState);

  console.log("productIngredients returns:", productIngredients);
  // console.log("item is", item);
  /* TODO Look into intermittent error - TypeError: Cannot destructure property 'image' of 'item' as it is undefined.
  at ProductPage (app\menu\[category]\[product]/page.tsx:45:11) */
  const { image } = item;
  const { id, isActive, createdAt, updatedAt, creatorId, updaterId, deletedAt, ...imageData } = image;
  // console.log("item is ", item);
  // const item = generateProduct(dbItem[0]);

  // TODO Add notFound() logic here.

  // TODO Type errors below are from new properties being added to db schemas. Will fix typing later.
  return (
    <main>
      <section>
        <h1>{item.product.name}</h1>
        <p>{item.product.description}</p>
        <EditProduct productProp={item.product} />
        <Image {...imageData} />
        <Customizer ingredients={ingredients} productIngredients={productIngredients} initialState={initialState} />
      </section>
    </main>
  )
}
