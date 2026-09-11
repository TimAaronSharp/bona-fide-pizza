import Image from "next/image";
import type { ImageType } from "@/app/lib/definitions";


export function Hero({ heroImage }: { heroImage: ImageType }) {
  return (
    <>
      {/* NOTE Research if it would be better/are there reasons to include "w-9/10 justify-center" in this div. */}
      <div className="flex">
        <Image {...heroImage} loading="eager" className="object-center object-cover"
        />
      </div>
    </>
  )
}