import { drinkItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function DrinksMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {drinkItems.map((drink) => (
            <ProductCard key={drink.product?.name} productProp={drink} />
          ))}
        </div>
      </section>
    </main>
  )
}