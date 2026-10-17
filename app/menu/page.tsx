import { Metadata } from "next";
import '@/app/menu/menu.css';
import { image, menuCategory } from "@/app/db/schema.db";
import { MenuCategoryCard } from "@/app/ui/components/menuCategoryCard";
import { db } from "../db/drizzle";
import { asc, eq } from "drizzle-orm";

export const metadata: Metadata = {
  title: 'Menu'
};

export default async function MenuPage() {
  const menuCategoryItems = await db.select().from(image).innerJoin(menuCategory, eq(image.id, menuCategory.imgId)).orderBy(asc(menuCategory.id));


  console.log("menuCategoryItems is ", menuCategoryItems);
  // console.log("menuCategoryItems is ", menuCategoryItems);

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