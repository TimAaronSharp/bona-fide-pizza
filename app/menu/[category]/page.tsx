import { menuDataMap } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/components/productCard";
import * as schemas from "@/app/db/schema";
import { db } from "@/app/db/drizzle";
import { generateLinkObject } from "@/app/lib/utility";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

export default async function MenuCategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params;
  const schemaKey = category as keyof typeof schemas;
  const items = await db.select().from(schemas[schemaKey]);

  // TODO Add notFound() logic here.
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {items.map((item) => {
            const itemProp = generateLinkObject(item);
            return <ProductCard key={itemProp.link.name} productProp={itemProp} />
          })}
        </div>
      </section>
    </main>
  )
}