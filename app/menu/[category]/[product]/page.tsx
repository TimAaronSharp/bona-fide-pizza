import { db } from "@/app/db/drizzle";
import { eq } from "drizzle-orm";
// import { Customizer } from "@/app/ui/components/customizer";
import Image from "next/image";
import * as schemas from "@/app/db/schema.db";
import { generateProduct } from "@/app/lib/utility";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

/*NOTE product in the params is the name of the "[product]" dynamic */

export default async function ProductPage({ params }: { params: { product: string } }) {
  const { product } = await params;
  // const schemaKey = category as keyof typeof schemas;
  // console.log("paramName is ", paramName);
  const item = await db.select().from(schemas.product).where(eq(schemas.product.paramName, product)).innerJoin(schemas.image, eq(schemas.image.id, schemas.product.imgId));

  const { image } = item[0];
  const { id, createdAt, updatedAt, ...imageData } = image;
  console.log("item is ", item);
  // const item = generateProduct(dbItem[0]);

  // TODO Add notFound() logic here.
  return (
    <main>
      <section>
        <h1>{item[0].product.name}</h1>
        <p>{item[0].product.description}</p>
        <Image {...imageData} />
        {/* <Customizer /> */}
      </section>
    </main>
  )
}
