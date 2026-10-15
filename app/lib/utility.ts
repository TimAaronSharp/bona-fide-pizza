import { } from "@/app/db/schema.db";
import { ProductAndImageQueryPropSchemaType, ProductSchemaType } from "./definitions";

// Menu and all product tables share the same schema, so I'm just using menu to infer the type for Schema.
// type Schema = typeof menuCategory.$inferSelect;

export function generateProduct(data: ProductAndImageQueryPropSchemaType): ProductSchemaType {
  const { image, product } = data
  return {
    link: {
      name: product.paramName,
      href: product.href
    },
    image: {
      src: image.src,
      alt: image.alt,
      width: image.width,
      height: image.height
    },
    info: {
      id: product.id,
      name: product.name,
      description: product.description
    }
  };
}