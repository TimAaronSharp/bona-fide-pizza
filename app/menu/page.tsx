import { Metadata } from "next"
import './menu.css';
import { menuCategoryImages } from "../lib/placeholder-data";
import { MenuCard } from "../ui/menu/menuCard";

export const metadata: Metadata = {
  title: 'Menu'
};

export default function MenuPage() {
  return (
    <>
      <main>
        <section className="flex justify-center menu-page">
          {menuCategoryImages.map((menuCategoryImage) => (
            <MenuCard key={menuCategoryImage.src} menuCategoryImage={menuCategoryImage} />
          ))}
          <h1>Menu Page</h1>

        </section>
      </main>
    </>
  )
}