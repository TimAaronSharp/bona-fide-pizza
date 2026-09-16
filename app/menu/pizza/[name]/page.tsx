import { pizzaItems } from "@/app/lib/placeholder-data";
import Image from "next/image";

// NOTE EXPERIMENT WITH REFACTORING ENTIRE MENU ROUTE TO BE 2 NESTED DYNAMIC ROUTES FOR ALL MENU ITEMS.

export default async function PizzaItemPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const pizza = pizzaItems.filter((item) => (
    item.link.name == name
  ))
  console.log('name is ', name)
  console.log('pizzaItems is ', pizzaItems)
  console.log('pizza is ', pizza);
  return (
    <>
      <h1>{pizza[0].product?.name}</h1>
      <Image {...pizza[0].image} />
      <p>{pizza[0].product?.description}</p>
    </>
  )
}