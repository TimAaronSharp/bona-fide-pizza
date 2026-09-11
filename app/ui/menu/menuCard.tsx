import { ImageType } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";


export function MenuCard({ menuCategoryImage }: { menuCategoryImage: ImageType }) {
  return (
    <>
      {/* <Link key={menuCategoryImage.src } href={ }> */}
      <div className="card-dimensions">
        <Image {...menuCategoryImage} />
      </div>
      {/* </Link> */}
    </>
  )
}