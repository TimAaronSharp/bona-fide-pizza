import { ImageType, LinkObject } from "./definitions";

const heroImage = {
  src: '/assets/home/images/hero/pizza_hero.jpg',
  alt: 'Giant Pizza.',
  width: 1300,
  height: 956
}

const menuCategoryObjects: LinkObject[] = [];
const pizzaItems: LinkObject[] = [];
const breadItems: LinkObject[] = [];

function generateLinkObjectProp(linkName: string, href: string, src: string, alt: string, width: number, height: number, productName: string, description?: string): LinkObject {
  return {
    link: {
      name: linkName,
      href: href
    },
    image: {
      src: src,
      alt: alt,
      width: width,
      height: height
    },
    product: {
      name: productName,
      description: description
    }
  };
}

// Menu Categories for menu page. 

menuCategoryObjects.push(generateLinkObjectProp('Pizza', '/menu/pizza', '/assets/menu/categories/pizza.jpg', 'Pizza Menu Category', 800, 800, 'Pizzas'));
menuCategoryObjects.push(generateLinkObjectProp('Breads', '/menu/breads', '/assets/menu/categories/breadsticks.jpg', 'Breads Menu Category', 1200, 1200, 'Breads'));
menuCategoryObjects.push(generateLinkObjectProp('Chicken Wings', '/menu/chicken-wings', '/assets/menu/categories/chicken-wings.jpg', 'Chicken Wings Menu Category', 735, 735, 'Chicken'));
menuCategoryObjects.push(generateLinkObjectProp('Pasta', '/menu/pasta', '/assets/menu/categories/pasta.jpg', 'Pasta Menu Category', 1200, 1200, 'Pasta'));
menuCategoryObjects.push(generateLinkObjectProp('Sandwiches', '/menu/sandwiches', '/assets/menu/categories/sandwich.jpg', 'Sandwich Menu Category', 1200, 1200, 'Sandwiches'));
menuCategoryObjects.push(generateLinkObjectProp('Salads', '/menu/salads', '/assets/menu/categories/salad.jpg', 'Salad Menu Category', 500, 500, 'Salads'));
menuCategoryObjects.push(generateLinkObjectProp('Desserts', '/menu/desserts', '/assets/menu/categories/dessert.jpg', 'Dessert Menu Category', 1200, 800, 'Desserts'));
menuCategoryObjects.push(generateLinkObjectProp('Drinks', '/menu/drinks', '/assets/menu/categories/drinks.jpg', 'Drinks Menu Category', 533, 533, 'Drinks'));

// Individual menu items by category

// Pizza

pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', 'Pepperoni Pizza', 800, 800, 'Pepperoni'));
pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', 'Supreme Pizza', 800, 800, 'Supreme'));
pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', 'Meat Lovers Pizza', 800, 800, 'Meat Lovers'));
pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', '6 Cheese Pizza', 800, 800, '6 Cheese'));
pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', 'Veggie Pizza', 800, 800, 'Veggie'));
pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', 'BBQ Chicken Pizza', 800, 800, 'BBQ Chicken'));
pizzaItems.push(generateLinkObjectProp('Pizza Choice', '/temp', '/assets/menu/categories/pizza.jpg', 'Chicken Bacon Ranch Pizza', 800, 800, 'Chicken Bacon Ranch'));

// Bread

breadItems.push(generateLinkObjectProp('Bread Choice', '/temp', '/assets/menu/categories/breadsticks.jpg', 'Breadsticks', 800, 800, 'Breadsticks'));
breadItems.push(generateLinkObjectProp('Bread Choice', '/temp', '/assets/menu/categories/breadsticks.jpg', 'Cheesy Bread', 800, 800, 'Cheesy Bread'));
breadItems.push(generateLinkObjectProp('Bread Choice', '/temp', '/assets/menu/categories/breadsticks.jpg', 'Bread Bites', 800, 800, 'Bread Bites'));
breadItems.push(generateLinkObjectProp('Bread Choice', '/temp', '/assets/menu/categories/breadsticks.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites'));

export { heroImage, menuCategoryObjects, pizzaItems, breadItems };