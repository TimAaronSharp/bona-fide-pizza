import { LinkObject } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';

export function ProductCard({ productProp }: { productProp: LinkObject }) {
  const { image, link, product } = productProp;

  return (
    <Link key={link.name} href={link.href} className="card-dimensions relative">
      <Image {...image} className="rounded" />
      <span className="absolute bottom-[12px] left-[20px] text-black text-2xl font-bold outlined-text">{product?.name}</span>
    </Link>
  )
}