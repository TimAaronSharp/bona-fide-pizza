import { db } from "@/app/db/drizzle";
import { eq } from "drizzle-orm";
import { menuDataMap } from "@/app/lib/placeholder-data";
import { Customizer } from "@/app/ui/components/customizer";
import Image from "next/image";
import * as schemas from "@/app/db/schema";
import { generateProduct } from "@/app/lib/utility";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

export default async function ProductPage({ params }: { params: { category: string, product: string } }) {
  const { category, product } = await params;
  const schemaKey = category as keyof typeof schemas;
  console.log("product is ", product);
  const dbItem = await db.select().from(schemas[schemaKey]).where(eq(schemas[schemaKey].linkName, product));
  console.log("dbItem is ", dbItem);
  const item = generateProduct(dbItem[0]);

  // TODO Add notFound() logic here.
  return (
    <main>
      <section>
        <h1>{item.product.name}</h1>
        <p>{item.product.description}</p>
        <Image {...item.image} />
        <Customizer />
      </section>
    </main>
  )
}
