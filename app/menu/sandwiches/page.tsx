import { sandwichItems } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/product-card/productCard";

export default function SandwichMenuPage() {
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4">
          {sandwichItems.map((sandwich) => (
            <ProductCard key={sandwich.product?.name} productProp={sandwich} />
          ))}
        </div>
      </section>
    </main>
  )
}