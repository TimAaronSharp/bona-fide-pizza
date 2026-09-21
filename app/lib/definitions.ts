
export type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type LinkInfo = {
  name: string;
  href: string;
}

export type LinkObject = {
  link: LinkInfo;
  image: ImageType;
  product?: ProductInfo
}

export type ProductInfo = {
  name: string;
  description?: string;
}

export type Ingredient = {
  id: number;
  name: string;
  category: "quantity" | "crust" | "crust seasoning" | "sauce" | "mozzarella" | "meats" | "veggies & more" | "add-on cheeses" | "special instructions" | "dipping cups";
  density?: "light" | "normal" | "extra"
}