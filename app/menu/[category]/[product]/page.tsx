import { menuDataMap } from "@/app/lib/placeholder-data";
import Image from "next/image";

/* TODO Think about how to dynamically populate metadata info (title) based on the dynamic route (params is received
inside the function so that is not accessible outside).*/

export default async function MenuCategoryPage({ params }: { params: { category: string, product: string } }) {
  const { category, product } = await params;

  // Assigns appropriate <product>Items array based on the route category, ie) pizzaItems.
  const items = menuDataMap[category];

  const productItem = items.filter((item) => (
    item.link.name == product
  ));

  // TODO Add notFound() logic here.
  return (
    <main>
      <section>
        <h1>{productItem[0].product?.name}</h1>
        <Image {...productItem[0].image} />
        <p>{productItem[0].product?.description}</p>
      </section>
    </main>
  )
}
