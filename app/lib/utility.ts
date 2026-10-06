import { menu } from "@/app/db/schema.db";
import { Product } from "./definitions";

// Menu and all product tables share the same schema, so I'm just using menu to infer the type for Schema.
type Schema = typeof menu.$inferSelect;

export function generateProduct(menuCategoryItem: Schema): Product {
  return {
    link: {
      name: menuCategoryItem.paramName,
      href: menuCategoryItem.href
    },
    image: {
      src: menuCategoryItem.imgSrc,
      alt: menuCategoryItem.imgAlt,
      width: menuCategoryItem.imgWidth,
      height: menuCategoryItem.imgHeight
    },
    product: {
      id: menuCategoryItem.id,
      name: menuCategoryItem.name,
      description: menuCategoryItem.description
    }
  };
}