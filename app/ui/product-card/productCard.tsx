import { LinkObject } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import '../menu/menuCard.css';



export function ProductCard({ productProp }: { productProp: LinkObject }) {
  const { image, link, product } = productProp;

  return (
    <Link key={link.name} href={link.href} className="card-dimensions">
      <Image {...image} className="rounded" />
      <span>{product?.name}</span>
    </Link>
  )
}