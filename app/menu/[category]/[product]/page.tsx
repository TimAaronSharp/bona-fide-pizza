import { db } from "@/app/db/drizzle";
import { eq } from "drizzle-orm";
// import { Customizer } from "@/app/ui/components/customizer";
import Image from "next/image";
import * as schemas from "@/app/db/schema.db";
import { generateProduct } from "@/app/lib/utility";
import { unstable_cache } from "next/cache";
import { EditProduct } from "@/app/ui/components/editProduct";

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

export default async function ProductPage({ params }: { params: { product: string } }) {
  const { product } = await params;
  // const schemaKey = category as keyof typeof schemas;
  // console.log("paramName is ", paramName);
  const [item] = await getProductData(product);
  console.log("item is", item);

  const { image } = item;
  const { id, createdAt, updatedAt, ...imageData } = image;
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
        {/* <Customizer /> */}
      </section>
    </main>
  )
}
