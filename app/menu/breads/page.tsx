import { breadItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function BreadsMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {breadItems.map((bread) => (
            <ProductCard key={bread.product?.name} productProp={bread} />
          ))}
        </div>
      </section>
    </main>
  )
}