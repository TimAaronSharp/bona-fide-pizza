import { ImageType } from "./definitions";

const heroImage = {
  src: '/assets/home/images/hero/pizza_hero.jpg',
  alt: 'Giant Pizza.',
  width: 1300,
  height: 956
}

const menuCategoryImages: ImageType[] = []

function generateImagePropObject(src: string, alt: string, width: number, height: number): ImageType {
  return {
    src: src,
    alt: alt,
    width: width,
    height: height
  };
}

menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/pizza.jpg', 'Pizza Menu Category', 700, 700));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/breadsticks.jpg', 'Breadsticks Menu Category', 1200, 1200));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/chicken-wings.jpg', 'Chicken Wings Menu Category', 735, 735));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/pasta.jpg', 'Pasta Menu Category', 1200, 1200));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/sandwich.jpg', 'Sandwich Menu Category', 1200, 1200));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/salad.jpg', 'Salad Menu Category', 500, 500));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/dessert.jpg', 'Dessert Menu Category', 1200, 800));
menuCategoryImages.push(generateImagePropObject('/assets/menu/categories/drinks.jpg', 'Drinks Menu Category', 533, 533));


export { heroImage, menuCategoryImages };