import { LinkObject } from "./definitions";

/*NOTE The data in this file will eventually be stored in a database. This is temporary until I get that set up. */

const heroImage = {
  src: '/assets/home/images/hero/pizza_hero.jpg',
  alt: 'Giant Pizza.',
  width: 1300,
  height: 956
}

const menuCategoryObjects: LinkObject[] = [];
const pizzaItems: LinkObject[] = [];
const breadItems: LinkObject[] = [];
const chickenItems: LinkObject[] = [];
const pastaItems: LinkObject[] = [];
const sandwichItems: LinkObject[] = [];
const saladItems: LinkObject[] = [];
const dessertItems: LinkObject[] = [];
const drinkItems: LinkObject[] = [];

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

menuCategoryObjects.push(generateLinkObjectProp('Pizza', '/menu/pizza', '/assets/menu/pizza/pizza-category.jpg', 'Pizza Menu Category', 800, 800, 'Pizzas'));
menuCategoryObjects.push(generateLinkObjectProp('Breads', '/menu/breads', '/assets/menu/breads/breads-category.jpg', 'Breads Menu Category', 1200, 1200, 'Breads'));
menuCategoryObjects.push(generateLinkObjectProp('Chicken Wings', '/menu/chicken', '/assets/menu/chicken/chicken-category.jpg', 'Chicken Wings Menu Category', 735, 735, 'Chicken'));
menuCategoryObjects.push(generateLinkObjectProp('Pasta', '/menu/pasta', '/assets/menu/pasta/pasta-category.jpg', 'Pasta Menu Category', 1200, 1200, 'Pasta'));
menuCategoryObjects.push(generateLinkObjectProp('Sandwiches', '/menu/sandwiches', '/assets/menu/sandwiches/sandwich-category.jpg', 'Sandwich Menu Category', 1200, 1200, 'Sandwiches'));
menuCategoryObjects.push(generateLinkObjectProp('Salads', '/menu/salads', '/assets/menu/salads/salad-category.jpg', 'Salad Menu Category', 500, 500, 'Salads'));
menuCategoryObjects.push(generateLinkObjectProp('Desserts', '/menu/desserts', '/assets/menu/desserts/dessert-category.jpg', 'Dessert Menu Category', 1200, 800, 'Desserts'));
menuCategoryObjects.push(generateLinkObjectProp('Drinks', '/menu/drinks', '/assets/menu/drinks/drinks-category.jpg', 'Drinks Menu Category', 533, 533, 'Drinks'));

// Individual menu items by category

// Pizza

pizzaItems.push(generateLinkObjectProp('pepperoni', '/menu/pizza/pepperoni', '/assets/menu/pizza/pepperoni.jpg', 'Pepperoni Pizza', 800, 800, 'Pepperoni'));
pizzaItems.push(generateLinkObjectProp('supreme', '/menu/pizza/supreme', '/assets/menu/pizza/supreme.jpg', 'Supreme Pizza', 800, 800, 'Supreme'));
pizzaItems.push(generateLinkObjectProp('meat-lovers', '/menu/pizza/meat-lovers', '/assets/menu/pizza/meat-lovers.jpg', 'Meat Lovers Pizza', 800, 800, 'Meat Lovers'));
pizzaItems.push(generateLinkObjectProp('6-cheese', '/menu/pizza/6-cheese', '/assets/menu/pizza/6-cheese.jpg', '6-Cheese Pizza', 800, 800, '6-Cheese'));
pizzaItems.push(generateLinkObjectProp('veggie-lovers', '/menu/pizza/veggie-lovers', '/assets/menu/pizza/veggie-lovers.jpg', 'Veggie Lovers Pizza', 800, 800, 'Veggie'));
pizzaItems.push(generateLinkObjectProp('bbq-chicken', '/menu/pizza/bbq-chicken', '/assets/menu/pizza/bbq-chicken.jpg', 'BBQ Chicken Pizza', 800, 800, 'BBQ Chicken'));
pizzaItems.push(generateLinkObjectProp('chicken-bacon-ranch', '/menu/pizza/chicken-bacon-ranch', '/assets/menu/pizza/chicken-bacon-ranch.jpg', 'Chicken Bacon Ranch Pizza', 800, 800, 'Chicken Bacon Ranch'));

// Bread

breadItems.push(generateLinkObjectProp('Bread Choice', '/menu/breads/breadsticks', '/assets/menu/breads/breads-category.jpg', 'Breadsticks', 800, 800, 'Breadsticks'));
breadItems.push(generateLinkObjectProp('Bread Choice', '/menu/breads/cheesy-bread', '/assets/menu/breads/breads-category.jpg', 'Cheesy Bread', 800, 800, 'Cheesy Bread'));
breadItems.push(generateLinkObjectProp('Bread Choice', '/menu/breads/bread-bites', '/assets/menu/breads/breads-category.jpg', 'Bread Bites', 800, 800, 'Bread Bites'));
breadItems.push(generateLinkObjectProp('Bread Choice', '/menu/breads/cinnamon-bread-bites', '/assets/menu/breads/breads-category.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites'));

// Chicken

chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/plain-wings', '/assets/menu/chicken/chicken-category.jpg', 'Plain Wings', 800, 800, 'Plain Wings'));
chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/hot-wings', '/assets/menu/chicken/chicken-category.jpg', 'Hot Wings', 800, 800, 'Hot Wings'));
chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/bbq-wings', '/assets/menu/chicken/chicken-category.jpg', 'BBQ Wings', 800, 800, 'BBQ Wings'));
chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/buffalo-wings', '/assets/menu/chicken/chicken-category.jpg', 'Buffalo Wings', 800, 800, 'Buffalo Wings'));
chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/garlic-parmesan-wings', '/assets/menu/chicken/chicken-category.jpg', 'Garlic Parmesan Wings', 800, 800, 'Garlic Parmesan Wings'));
chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/boneless-wings', '/assets/menu/chicken/chicken-category.jpg', 'Boneless Wings', 800, 800, 'Boneless Wings'));
chickenItems.push(generateLinkObjectProp('Chicken Choice', '/menu/chicken/zesty-asian-wings', '/assets/menu/chicken/chicken-category.jpg', 'Zesty Asian Wings', 800, 800, 'Zesty Asian Wings'));

// Pasta

pastaItems.push(generateLinkObjectProp('Pasta Choice', '/menu/pasta/chicken-alfredo', '/assets/menu/pasta/pasta-category.jpg', 'Chicken Alfredo', 800, 800, 'Chicken Alfredo'));
pastaItems.push(generateLinkObjectProp('Pasta Choice', '/menu/pasta/5-cheese-mac-&-cheese', '/assets/menu/pasta/pasta-category.jpg', '5-Cheese Mac & Cheese', 800, 800, '5-Cheese Mac & Cheese'));
pastaItems.push(generateLinkObjectProp('Pasta Choice', '/menu/pasta/spicy-buffalo-5-cheese-mac-&-cheese', '/assets/menu/pasta/pasta-category.jpg', 'Spicy Buffalo 5-Cheese Mac & Cheese', 800, 800, 'Spicy Buffalo 5-Cheese Mac & Cheese'));
pastaItems.push(generateLinkObjectProp('Pasta Choice', '/menu/pasta/spaghetti-&-meatballs', '/assets/menu/pasta/pasta-category.jpg', 'Spaghetti & Meatballs', 800, 800, 'Spaghetti & Meatballs'));

// Sandwiches

sandwichItems.push(generateLinkObjectProp('Sandwich Choice', '/menu/sandwiches/chicken-parm', '/assets/menu/sandwiches/sandwich-category.jpg', 'Chicken Parm Sandwich', 800, 800, 'Chicken Parm'));
sandwichItems.push(generateLinkObjectProp('Sandwich Choice', '/menu/sandwiches/chicken-bacon-ranch', '/assets/menu/sandwiches/sandwich-category.jpg', 'Chicken Bacon Ranch Sandwich', 800, 800, 'Chicken Bacon Ranch'));
sandwichItems.push(generateLinkObjectProp('Sandwich Choice', '/menu/sandwiches/italian', '/assets/menu/sandwiches/sandwich-category.jpg', 'Italian Sandwich', 800, 800, 'Italian'));
sandwichItems.push(generateLinkObjectProp('Sandwich Choice', '/menu/sandwiches/buffalo-chicken', '/assets/menu/sandwiches/sandwich-category.jpg', 'Buffalo Chicken Sandwich', 800, 800, 'Buffalo Chicken'));
sandwichItems.push(generateLinkObjectProp('Sandwich Choice', '/menu/sandwiches/philly-cheesesteak', '/assets/menu/sandwiches/sandwich-category.jpg', 'Philly Cheesesteak Sandwich', 800, 800, 'Philly Cheesesteak'));

// Salads

saladItems.push(generateLinkObjectProp('Salad Choice', '/menu/salads/classic-garden', '/assets/menu/salads/salad-category.jpg', 'Classic Garden Salad', 800, 800, 'Classic Garden'));
saladItems.push(generateLinkObjectProp('Salad Choice', '/menu/salads/chicken-caesar', '/assets/menu/salads/salad-category.jpg', 'Chicken Caesar Salad', 800, 800, 'Chicken Caesar'));

// Desserts

dessertItems.push(generateLinkObjectProp('Dessert Choice', '/menu/desserts/chocolate-lava-cake', '/assets/menu/desserts/dessert-category.jpg', 'Chocolate Lava Cake', 800, 800, 'Chocolate Lava Cake'));
dessertItems.push(generateLinkObjectProp('Dessert Choice', '/menu/desserts/chocolate-cookie-brownies', '/assets/menu/desserts/dessert-category.jpg', 'Chocolate Cookie Brownies', 800, 800, 'Chocolate Cookie Brownies'));
dessertItems.push(generateLinkObjectProp('Dessert Choice', '/menu/desserts/cinnamon-bread-bites', '/assets/menu/desserts/dessert-category.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites'));

// Drinks

drinkItems.push(generateLinkObjectProp('Drink Choice', '/menu/drinks/pepsi', '/assets/menu/drinks/drinks-category.jpg', 'Pepsi 2-Liter', 800, 800, 'Pepsi'));
drinkItems.push(generateLinkObjectProp('Drink Choice', '/menu/drinks/mountain-dew', '/assets/menu/drinks/drinks-category.jpg', 'Mountain Dew 2-Liter', 800, 800, 'Mountain Dew'));
drinkItems.push(generateLinkObjectProp('Drink Choice', '/menu/drinks/mug-root-beer', '/assets/menu/drinks/drinks-category.jpg', 'Mug Root Beer 2-Liter', 800, 800, 'Mug Root Beer'));
drinkItems.push(generateLinkObjectProp('Drink Choice', '/menu/drinks/dr-pepper', '/assets/menu/drinks/drinks-category.jpg', 'Dr Pepper 2-Liter', 800, 800, 'Dr Pepper'));
drinkItems.push(generateLinkObjectProp('Drink Choice', '/menu/drinks/cherry-pepsi', '/assets/menu/drinks/drinks-category.jpg', 'Cherry Pepsi 2-Liter', 800, 800, 'Cherry Pepsi'));
drinkItems.push(generateLinkObjectProp('Drink Choice', '/menu/drinks/orange-crush', '/assets/menu/drinks/drinks-category.jpg', 'Orange Crush 2-Liter', 800, 800, 'Orange Crush'));

export { heroImage, menuCategoryObjects, pizzaItems, breadItems, chickenItems, pastaItems, sandwichItems, saladItems, dessertItems, drinkItems };