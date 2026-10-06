import { Metadata } from "next";
import '@/app/menu/menu.css';
import { image, menuCategory } from "@/app/db/schema.db";
import { ProductCard } from "@/app/ui/components/productCard";
import { db } from "../db/drizzle";
import { generateProduct } from "../lib/utility";
import { eq } from "drizzle-orm";

export const metadata: Metadata = {
  title: 'Menu'
};

export default async function MenuPage() {
  const menuCategoryItems = await db.select().from(menuCategory);
  const menuCategoryImages = await db.select().from(image).where(eq(menuCategory.imgId, image.id));

  console.log("menuCategoryImages is ")

  return (
    <>
      <main>
        <section className="flex justify-center menu-page">
          {/* NOTE Play around with drop-shadow */}
          <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
            {menuCategoryItems.map((menuCategoryItem) => {
              const menuCategoryProp = generateProduct(menuCategoryItem);

              return <ProductCard key={menuCategoryItem.category} productProp={menuCategoryProp} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}