import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/components/productCard";
import { product, image, menuCategory } from "@/app/db/schema.db";
import { db } from "@/app/db/drizzle";
import { unstable_cache } from 'next/cache';
import { eq, like } from 'drizzle-orm';
import { EditMenuCategory } from '@/app/ui/components/editMenuCategory';
import { ProductCategoryEnumType } from '@/app/lib/definitions';

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

async function getMenuCategoryProductData(category: ProductCategoryEnumType) {
  return unstable_cache(
    async () => {
      return await db.select().from(product).where(eq(product.category, category)).innerJoin(image, eq(image.id, product.imgId));
    },
    [`category-key-${category}`],
    { tags: [`category-${category}`] }
  )();
}

export default async function MenuCategoryPage({ params }: { params: { category: ProductCategoryEnumType } }) {
  const { category } = await params;
  const items = await getMenuCategoryProductData(category);


  /*NOTE query here temporarily to test out editing menu categories. Will be refactored later in some way. */
  const menuCategoryData = await db.select().from(menuCategory).where(like(menuCategory.href, `%/${category}`));

  // console.log("menuCategoryData is", menuCategoryData);
  // console.log("category is", category);
  // console.log("items is ", items);

  // TODO Add notFound() logic here.

  // TODO Type errors below are from new properties being added to db schemas. Will fix typing later.
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
      <EditMenuCategory menuCategoryProp={menuCategoryData[0]} />
    </main>
  )
}