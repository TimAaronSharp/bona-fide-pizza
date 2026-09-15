import { dessertItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function DessertsMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {dessertItems.map((dessert) => (
            <ProductCard key={dessert.product?.name} productProp={dessert} />
          ))}
        </div>
      </section>
    </main>
  )
}