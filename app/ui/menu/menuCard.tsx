import { LinkObject } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";



export function MenuCard({ menuCategoryObject }: { menuCategoryObject: LinkObject }) {
  const { image, link } = menuCategoryObject;

  return (
    <Link key={link.name} href={link.href} className="card-dimensions">
      <Image {...image} />
    </Link>
  )
}