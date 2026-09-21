import { menuDataMap } from "@/app/lib/placeholder-data";
import '@/app/menu/menu.css';
import { ProductCard } from "@/app/ui/components/productCard";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

export default async function MenuCategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params;
  const items = menuDataMap[category];

  // TODO Add notFound() logic here.
  return (
    <main>
      <section className="flex justify-center menu-page">
        <div className="grid grid-cols-6 gap-4 p-4 drop-shadow-sm drop-shadow-white">
          {items.map((item) => (
            <ProductCard key={item.product?.name} productProp={item} />
          ))}
        </div>
      </section>
    </main>
  )
}