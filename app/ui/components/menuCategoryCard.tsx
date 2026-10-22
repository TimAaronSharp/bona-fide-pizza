import { MenuCategoryAndImagePropSchemaType } from "@/app/lib/definitions";
import '@/app/globals.css';
import Link from "next/link";
import Image from "next/image";


export function MenuCategoryCard({ menuCategoryProp }: { menuCategoryProp: MenuCategoryAndImagePropSchemaType }) {
  const { menu_category } = menuCategoryProp;
  const { id, createdAt, updatedAt, creatorId, updaterId, ...imageData } = menuCategoryProp.image;

  return (
    <Link href={menu_category.href} className="card-dimensions relative">
      <Image {...imageData} className="rounded" />
      <span className="absolute bottom-[12px] left-[20px] text-black text-2xl font-bold outlined-text">{menu_category.name}</span>
    </Link>
  )
}