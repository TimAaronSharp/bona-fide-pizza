import { Metadata } from "next"
import './menu.css';
import { menuCategoryObjects } from "../lib/placeholder-data";
import { ProductCard } from "../ui/product-card/productCard";

export const metadata: Metadata = {
  title: 'Menu'
};

export default function MenuPage() {
  return (
    <>
      <main>
        <section className="flex justify-center menu-page">
          <div className="grid grid-cols-6 gap-4 p-4">
            {menuCategoryObjects.map((menuCategoryObject) => (
              <ProductCard key={menuCategoryObject.image.src} productProp={menuCategoryObject} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}