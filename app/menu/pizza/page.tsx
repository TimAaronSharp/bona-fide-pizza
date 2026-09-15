import { pizzaItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function PizzaMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {pizzaItems.map((pizza) => (
            <ProductCard key={pizza.product?.name} productProp={pizza} />
          ))}
        </div>
      </section>
    </main>
  )
}