import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/components/productCard";
import { product, image } from "@/app/db/schema.db";
import { db } from "@/app/db/drizzle";
import { generateProduct } from "@/app/lib/utility";
import { eq } from 'drizzle-orm';

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

export default async function MenuCategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params;
  const items = await db.select().from(product).where(eq(product.category, category)).innerJoin(image, eq(image.id, product.imgId));

  console.log("category is", category);
  console.log("items is ", items);

  // TODO Add notFound() logic here.
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {items.map((item) => {
            const { product } = item;
            return <ProductCard key={product.paramName} productProp={item} />
          })}
        </div>
      </section>
    </main>
  )
}