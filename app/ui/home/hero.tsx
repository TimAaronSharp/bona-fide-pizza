import Image from "next/image";
import type { ImageType } from "@/app/lib/definitions";


export function Hero({ heroImage }: { heroImage: ImageType }) {
  return (
    <>
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        width={heroImage.width}
        height={heroImage.height}
        loading="eager"
      />
    </>
  )
}