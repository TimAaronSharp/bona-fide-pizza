import { Metadata } from "next";
import '@/app/menu/menu.css';
import { image, menuCategory } from "@/app/db/schema.db";
import { MenuCategoryCard } from "@/app/ui/components/menuCategoryCard";
import { db } from "../db/drizzle";
import { asc, eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  title: 'Menu'
};

/*NOTE Next.js works with fetch() to use its server-side cache. Direct ORM queries bypass the cache completely.
unstable_cache allows the capture of the result of that query to be used for the server-side cache, as well as being
able to assign tags to that cached data. This is being used in conjunction with the "updateTag()" function in server
actions. updateTag() purges the cache for the tag that is passed through so the cache will be rebuilt when that data
is queried again. This is great for when you've mutated data with a server action (create, update, delete).*/

async function getMenuCategoryData() {
  return unstable_cache(
    async () => {
      return await db.select().from(image).innerJoin(menuCategory, eq(image.id, menuCategory.imgId)).orderBy(asc(menuCategory.id));
    },
    ["menu-category-key"],
    { tags: ["menu-category"] }
  )();
}

export default async function MenuPage() {
  const menuCategoryItems = await getMenuCategoryData();


  console.log("menuCategoryItems is ", menuCategoryItems);
  // console.log("menuCategoryItems is ", menuCategoryItems);

  // TODO Type errors below are from new properties being added to db schemas. Will fix typing later.
  return (
    <>
      <main>
        <section className="flex justify-center menu-page">
          {/* NOTE Play around with drop-shadow */}
          <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
            {menuCategoryItems.map((menuCategoryItem) => {

              return <MenuCategoryCard key={menuCategoryItem.menu_category.href} menuCategoryProp={menuCategoryItem} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}