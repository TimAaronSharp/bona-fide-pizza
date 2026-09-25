import { Metadata } from "next";
import '@/app/menu/menu.css';
import { menuCategoryItems } from "@/app/lib/placeholder-data";
import { ProductCard } from "@/app/ui/components/productCard";

export const metadata: Metadata = {
  title: 'Menu'
};

export default function MenuPage() {
  return (
    <>
      <main>
        <section className="flex justify-center menu-page">
          {/* NOTE Play around with drop-shadow */}
          <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
            {menuCategoryItems.map((menuCategoryObject) => (
              <ProductCard key={menuCategoryObject.image.src} productProp={menuCategoryObject} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}