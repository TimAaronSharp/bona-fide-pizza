import { saladItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function SaladMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {saladItems.map((salad) => (
            <ProductCard key={salad.product?.name} productProp={salad} />
          ))}
        </div>
      </section>
    </main>
  )
}