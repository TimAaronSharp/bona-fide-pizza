import { Menu } from "@/app/menu/page";
import { LinkObject } from "./definitions";


export function generateLinkObject(menuCategoryItem: Menu): LinkObject {
  return {
    link: {
      name: menuCategoryItem.linkName,
      href: menuCategoryItem.href
    },
    image: {
      src: menuCategoryItem.imgSrc,
      alt: menuCategoryItem.imgAlt,
      width: menuCategoryItem.imgWidth,
      height: menuCategoryItem.imgHeight
    },
    product: {
      name: menuCategoryItem.name,
      description: menuCategoryItem.description
    }
  };
}