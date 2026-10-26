import { db } from "@/app/db/drizzle";
import { eq, getColumns } from "drizzle-orm";
import { Customizer } from "@/app/ui/components/customizer";
import Image from "next/image";
import * as schemas from "@/app/db/schema.db";
import { generateProduct } from "@/app/lib/utility";
import { unstable_cache } from "next/cache";
import { EditProduct } from "@/app/ui/components/editProduct";
import { ProductAndImageQueryPropSchema } from "@/app/lib/definitions.js";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

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

export default async function ProductPage({ params }: { params: { product: string } }) {
  const { product } = await params;
  // const schemaKey = category as keyof typeof schemas;
  // console.log("paramName is ", paramName);
  const [item] = await getProductData(product);
  const ingredients = await getIngredientData();
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
        <Customizer ingredients={ingredients} />
      </section>
    </main>
  )
}
