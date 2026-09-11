import { Metadata } from "next"
import './menu.css';
import { menuCategoryObjects } from "../lib/placeholder-data";
import { MenuCard } from "../ui/menu/menuCard";

export const metadata: Metadata = {
  title: 'Menu'
};

export default function MenuPage() {
  return (
    <>
      <main>
        <section className="flex justify-center menu-page">
          {menuCategoryObjects.map((menuCategoryObject) => (
            <MenuCard key={menuCategoryObject.image.src} menuCategoryObject={menuCategoryObject} />
          ))}
          <h1>Menu Page</h1>

        </section>
      </main>
    </>
  )
}