import { ImageType, LinkObject } from "./definitions";

const heroImage = {
  src: '/assets/home/images/hero/pizza_hero.jpg',
  alt: 'Giant Pizza.',
  width: 1300,
  height: 956
}

const menuCategoryObjects: LinkObject[] = []

function generateLinkObjectProp(name: string, href: string, src: string, alt: string, width: number, height: number): LinkObject {
  return {
    link: {
      name: name,
      href: href
    },
    image: {
      src: src,
      alt: alt,
      width: width,
      height: height
    }
  };
}

menuCategoryObjects.push(generateLinkObjectProp('Pizza', '/menu/pizza', '/assets/menu/categories/pizza.jpg', 'Pizza Menu Category', 700, 700));
menuCategoryObjects.push(generateLinkObjectProp('Breadsticks', '/menu/breadsticks', '/assets/menu/categories/breadsticks.jpg', 'Breadsticks Menu Category', 1200, 1200));
menuCategoryObjects.push(generateLinkObjectProp('Chicken Wings', '/menu/chicken-wings', '/assets/menu/categories/chicken-wings.jpg', 'Chicken Wings Menu Category', 735, 735));
menuCategoryObjects.push(generateLinkObjectProp('Pasta', '/menu/pasta', '/assets/menu/categories/pasta.jpg', 'Pasta Menu Category', 1200, 1200));
menuCategoryObjects.push(generateLinkObjectProp('Sandwiches', '/menu/sandwiches', '/assets/menu/categories/sandwich.jpg', 'Sandwich Menu Category', 1200, 1200));
menuCategoryObjects.push(generateLinkObjectProp('Salads', '/menu/salads', '/assets/menu/categories/salad.jpg', 'Salad Menu Category', 500, 500));
menuCategoryObjects.push(generateLinkObjectProp('Desserts', '/menu/desserts', '/assets/menu/categories/dessert.jpg', 'Dessert Menu Category', 1200, 800));
menuCategoryObjects.push(generateLinkObjectProp('Drinks', '/menu/drinks', '/assets/menu/categories/drinks.jpg', 'Drinks Menu Category', 533, 533));


export { heroImage, menuCategoryObjects };