import { chickenItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function ChickenMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4">
          {chickenItems.map((chicken) => (
            <ProductCard key={chicken.product?.name} productProp={chicken} />
          ))}
        </div>
      </section>
    </main>
  )
}