import { ProductAndImageQueryPropSchemaType } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';

export function ProductCard({ productProp }: { productProp: ProductAndImageQueryPropSchemaType }) {
  const { image, product } = productProp;
  const { id, isActive, createdAt, updatedAt, creatorId, updaterId, deletedAt, ...imageData } = productProp.image;

  return (
    <Link href={product.href} className="card-dimensions relative">
      <Image {...imageData} className="rounded" />
      <span className="absolute bottom-[12px] left-[20px] text-black text-2xl font-bold outlined-text">{product?.name}</span>
    </Link>
  )
}