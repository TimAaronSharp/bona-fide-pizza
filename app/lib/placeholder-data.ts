import { LinkObject, Ingredient, ImageType, IngredientOptions } from "@/app/lib/definitions";

/*NOTE The data in this file will eventually be stored in a database. This is temporary until I get that set up. */

const heroImage: ImageType = {
  src: '/assets/home/images/hero/pizza_hero.jpg',
  alt: 'Giant Pizza.',
  width: 1300,
  height: 956
}

const menuCategoryObjects: LinkObject[] = [];
const pizzaItems: LinkObject[] = [];
const breadsItems: LinkObject[] = [];
const chickenItems: LinkObject[] = [];
const pastaItems: LinkObject[] = [];
const sandwichesItems: LinkObject[] = [];
const saladsItems: LinkObject[] = [];
const dessertsItems: LinkObject[] = [];
const drinksItems: LinkObject[] = [];
const ingredients: Ingredient[] = [];

// Menu Items Dictionary
/* NOTE Record creates an easily modifiable dictionary with defined key-value pair types.
Here, the key must always be a string, and its value must always be a LinkObject[].
Exported at the bottom of file with other data.
***See "app/menu/[category]/page.tsx for how it was used after export.*** */
const menuDataMap: Record<string, LinkObject[]> = {
  specialty_pizza: pizzaItems,
  bread: breadsItems,
  chicken: chickenItems,
  pasta: pastaItems,
  sandwich: sandwichesItems,
  salad: saladsItems,
  dessert: dessertsItems,
  drink: drinksItems
}

function generateLinkObjectProp(linkName: string,
  href: string,
  src: string,
  alt: string,
  width: number,
  height: number,
  productName: string,
  description: string): LinkObject {
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
// TODO Think over whether more properties need to be added to the Ingredient type/if you need to separate anything further.
function generateIngredient(id: number, name: string, category: Ingredient["category"], density?: Ingredient["density"]): Ingredient {
  return {
    id: id,
    name: name,
    category: category,
    // If I remove the ? from density will it be optional in the return because I have made it optional in the parameters?
    density: density
  }
}

//#region Menu Categories for menu page. 
// menuCategoryObjects.push(generateLinkObjectProp('Build Your Own Pizza', '/menu/build_your_own_pizza', '/assets/menu/pizza/pizza-category.jpg', 'Build Your Own Pizza Menu Category', 800, 800, 9990, 'Build Your Own'));
menuCategoryObjects.push(generateLinkObjectProp('Pizza', '/menu/specialty_pizza', '/assets/menu/pizza/pizza-category.jpg', 'Pizza Menu Category', 800, 800, 'Pizzas', 'Pizza Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Breads', '/menu/bread', '/assets/menu/breads/breads-category.jpg', 'Breads Menu Category', 1200, 1200, 'Breads', 'Breads Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Chicken Wings', '/menu/chicken', '/assets/menu/chicken/chicken-category.jpg', 'Chicken Wings Menu Category', 735, 735, 'Chicken', 'Chicken Wings Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Pasta', '/menu/pasta', '/assets/menu/pasta/pasta-category.jpg', 'Pasta Menu Category', 1200, 1200, 'Pasta', 'Pasta Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Sandwiches', '/menu/sandwich', '/assets/menu/sandwiches/sandwich-category.jpg', 'Sandwich Menu Category', 1200, 1200, 'Sandwiches', 'Sandwich Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Salads', '/menu/salad', '/assets/menu/salads/salad-category.jpg', 'Salad Menu Category', 500, 500, 'Salads', 'Salad Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Desserts', '/menu/dessert', '/assets/menu/desserts/dessert-category.jpg', 'Dessert Menu Category', 1200, 800, 'Desserts', 'Dessert Menu Category'));
menuCategoryObjects.push(generateLinkObjectProp('Drinks', '/menu/drink', '/assets/menu/drinks/drinks-category.jpg', 'Drinks Menu Category', 533, 533, 'Drinks', 'Drinks Menu Category'));
// #endregion

//#region Individual menu items by category

// Pizza

pizzaItems.push(generateLinkObjectProp('pepperoni', '/menu/specialty_pizza/pepperoni', '/assets/menu/pizza/pepperoni.jpg', 'Pepperoni Pizza', 800, 800, 'Pepperoni', 'Yummy Pepperoni'));
pizzaItems.push(generateLinkObjectProp('supreme', '/menu/specialty_pizza/supreme', '/assets/menu/pizza/supreme.jpg', 'Supreme Pizza', 800, 800, 'Supreme', 'Yummy Supreme'));
pizzaItems.push(generateLinkObjectProp('meat-lovers', '/menu/specialty_pizza/meat-lovers', '/assets/menu/pizza/meat-lovers.jpg', 'Meat Lovers Pizza', 800, 800, 'Meat Lovers', 'Yummy Meat Lovers'));
pizzaItems.push(generateLinkObjectProp('6-cheese', '/menu/specialty_pizza/6-cheese', '/assets/menu/pizza/6-cheese.jpg', '6-Cheese Pizza', 800, 800, '6-Cheese', 'Yummy 6-Cheese'));
pizzaItems.push(generateLinkObjectProp('veggie-lovers', '/menu/specialty_pizza/veggie-lovers', '/assets/menu/pizza/veggie-lovers.jpg', 'Veggie Lovers Pizza', 800, 800, 'Veggie Lovers', 'Yummy Veggie Lovers'));
pizzaItems.push(generateLinkObjectProp('bbq-chicken', '/menu/specialty_pizza/bbq-chicken', '/assets/menu/pizza/bbq-chicken.jpg', 'BBQ Chicken Pizza', 800, 800, 'BBQ Chicken', 'Yummy BBQ Chicken'));
pizzaItems.push(generateLinkObjectProp('chicken-bacon-ranch', '/menu/specialty_pizza/chicken-bacon-ranch', '/assets/menu/pizza/chicken-bacon-ranch.jpg', 'Chicken Bacon Ranch Pizza', 800, 800, 'Chicken Bacon Ranch', 'Yummy Chicken Bacon Ranch'));

// Bread

breadsItems.push(generateLinkObjectProp('breadsticks', '/menu/bread/breadsticks', '/assets/menu/breads/breads-category.jpg', 'Breadsticks', 800, 800, 'Breadsticks', 'Yummy Breadsticks'));
breadsItems.push(generateLinkObjectProp('cheesy-bread', '/menu/bread/cheesy-bread', '/assets/menu/breads/breads-category.jpg', 'Cheesy Bread', 800, 800, 'Cheesy Bread', 'Yummy Cheesy Bread'));
breadsItems.push(generateLinkObjectProp('bread-bites', '/menu/bread/bread-bites', '/assets/menu/breads/breads-category.jpg', 'Bread Bites', 800, 800, 'Bread Bites', 'Yummy Bread Bites'));
breadsItems.push(generateLinkObjectProp('cinnamon-bread-bites', '/menu/bread/cinnamon-bread-bites', '/assets/menu/breads/breads-category.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites', 'Yummy Cinnamon Bread Bites'));

// Chicken

chickenItems.push(generateLinkObjectProp('plain-wings', '/menu/chicken/plain-wings', '/assets/menu/chicken/chicken-category.jpg', 'Plain Wings', 800, 800, 'Plain Wings', 'Yummy Plain Wings'));
chickenItems.push(generateLinkObjectProp('hot-wings', '/menu/chicken/hot-wings', '/assets/menu/chicken/chicken-category.jpg', 'Hot Wings', 800, 800, 'Hot Wings', 'Yummy Hot Wings'));
chickenItems.push(generateLinkObjectProp('bbq-wings', '/menu/chicken/bbq-wings', '/assets/menu/chicken/chicken-category.jpg', 'BBQ Wings', 800, 800, 'BBQ Wings', 'Yummy BBQ Wings'));
chickenItems.push(generateLinkObjectProp('buffalo-wings', '/menu/chicken/buffalo-wings', '/assets/menu/chicken/chicken-category.jpg', 'Buffalo Wings', 800, 800, 'Buffalo Wings', 'Yummy Buffalo Wings'));
chickenItems.push(generateLinkObjectProp('garlic-parmesan-wings', '/menu/chicken/garlic-parmesan-wings', '/assets/menu/chicken/chicken-category.jpg', 'Garlic Parmesan Wings', 800, 800, 'Garlic Parmesan Wings', 'Yummy Garlic Parmesan Wings'));
chickenItems.push(generateLinkObjectProp('boneless-wings', '/menu/chicken/boneless-wings', '/assets/menu/chicken/chicken-category.jpg', 'Boneless Wings', 800, 800, 'Boneless Wings', 'Yummy Boneless Wings'));
chickenItems.push(generateLinkObjectProp('zesty-asian-wings', '/menu/chicken/zesty-asian-wings', '/assets/menu/chicken/chicken-category.jpg', 'Zesty Asian Wings', 800, 800, 'Zesty Asian Wings', 'Yummy Zesty Asian Wings'));

// Pasta

pastaItems.push(generateLinkObjectProp('chicken-alfredo', '/menu/pasta/chicken-alfredo', '/assets/menu/pasta/pasta-category.jpg', 'Chicken Alfredo', 800, 800, 'Chicken Alfredo', 'Yummy Chicken Alfredo'));
pastaItems.push(generateLinkObjectProp('5-cheese-mac-n-cheese', '/menu/pasta/5-cheese-mac-n-cheese', '/assets/menu/pasta/pasta-category.jpg', '5-Cheese Mac & Cheese', 800, 800, '5-Cheese Mac & Cheese', 'Yummy 5-Cheese Mac & Cheese'));
pastaItems.push(generateLinkObjectProp('spicy-buffalo-5-cheese-mac-n-cheese', '/menu/pasta/spicy-buffalo-5-cheese-mac-n-cheese', '/assets/menu/pasta/pasta-category.jpg', 'Spicy Buffalo 5-Cheese Mac & Cheese', 800, 800, 'Spicy Buffalo 5-Cheese Mac & Cheese', 'Yummy Spicy Buffalo 5-Cheese Mac & Cheese'));
pastaItems.push(generateLinkObjectProp('spaghetti-n-meatballs', '/menu/pasta/spaghetti-n-meatballs', '/assets/menu/pasta/pasta-category.jpg', 'Spaghetti & Meatballs', 800, 800, 'Spaghetti & Meatballs', 'Yummy Spaghetti & Meatballs'));

// Sandwiches

sandwichesItems.push(generateLinkObjectProp('chicken-parm', '/menu/sandwich/chicken-parm', '/assets/menu/sandwiches/sandwich-category.jpg', 'Chicken Parm Sandwich', 800, 800, 'Chicken Parm', 'Yummy Chicken Parm'));
sandwichesItems.push(generateLinkObjectProp('chicken-bacon-ranch', '/menu/sandwich/chicken-bacon-ranch', '/assets/menu/sandwiches/sandwich-category.jpg', 'Chicken Bacon Ranch Sandwich', 800, 800, 'Chicken Bacon Ranch', 'Yummy Chicken Bacon Ranch'));
sandwichesItems.push(generateLinkObjectProp('italian', '/menu/sandwich/italian', '/assets/menu/sandwiches/sandwich-category.jpg', 'Italian Sandwich', 800, 800, 'Italian', 'Yummy Italian'));
sandwichesItems.push(generateLinkObjectProp('buffalo-chicken', '/menu/sandwich/buffalo-chicken', '/assets/menu/sandwiches/sandwich-category.jpg', 'Buffalo Chicken Sandwich', 800, 800, 'Buffalo Chicken', 'Yummy Buffalo Chicken'));
sandwichesItems.push(generateLinkObjectProp('philly-cheesesteak', '/menu/sandwich/philly-cheesesteak', '/assets/menu/sandwiches/sandwich-category.jpg', 'Philly Cheesesteak Sandwich', 800, 800, 'Philly Cheesesteak', 'Yummy Philly Cheesesteak'));

// Salads

saladsItems.push(generateLinkObjectProp('classic-garden', '/menu/salad/classic-garden', '/assets/menu/salads/salad-category.jpg', 'Classic Garden Salad', 800, 800, 'Classic Garden', 'Yummy Classic Garden'));
saladsItems.push(generateLinkObjectProp('chicken-caesar', '/menu/salad/chicken-caesar', '/assets/menu/salads/salad-category.jpg', 'Chicken Caesar Salad', 800, 800, 'Chicken Caesar', 'Yummy Chicken Caesar'));

// Desserts

dessertsItems.push(generateLinkObjectProp('chocolate-lava-cake', '/menu/dessert/chocolate-lava-cake', '/assets/menu/desserts/dessert-category.jpg', 'Chocolate Lava Cake', 800, 800, 'Chocolate Lava Cake', 'Yummy Chocolate Lave Cake'));
dessertsItems.push(generateLinkObjectProp('chocolate-cookie-brownies', '/menu/dessert/chocolate-cookie-brownies', '/assets/menu/desserts/dessert-category.jpg', 'Chocolate Cookie Brownies', 800, 800, 'Chocolate Cookie Brownies', 'Yummy Chocolate Cookie Brownies'));
dessertsItems.push(generateLinkObjectProp('cinnamon-bread-bites', '/menu/dessert/cinnamon-bread-bites', '/assets/menu/desserts/dessert-category.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites', 'Yummy Cinnamon Bread Bites'));

// Drinks

drinksItems.push(generateLinkObjectProp('pepsi', '/menu/drink/pepsi', '/assets/menu/drinks/drinks-category.jpg', 'Pepsi 2-Liter', 800, 800, 'Pepsi', 'Yummy Pepsi'));
drinksItems.push(generateLinkObjectProp('mountain-dew', '/menu/drink/mountain-dew', '/assets/menu/drinks/drinks-category.jpg', 'Mountain Dew 2-Liter', 800, 800, 'Mountain Dew', 'Yummy Mountain Dew'));
drinksItems.push(generateLinkObjectProp('mug-root-beer', '/menu/drink/mug-root-beer', '/assets/menu/drinks/drinks-category.jpg', 'Mug Root Beer 2-Liter', 800, 800, 'Mug Root Beer', 'Yummy Mug Root Beer'));
drinksItems.push(generateLinkObjectProp('dr-pepper', '/menu/drink/dr-pepper', '/assets/menu/drinks/drinks-category.jpg', 'Dr Pepper 2-Liter', 800, 800, 'Dr Pepper', 'Yummy Dr Pepper'));
drinksItems.push(generateLinkObjectProp('cherry-pepsi', '/menu/drink/cherry-pepsi', '/assets/menu/drinks/drinks-category.jpg', 'Cherry Pepsi 2-Liter', 800, 800, 'Cherry Pepsi', 'Yummy Cherry Pepsi'));
drinksItems.push(generateLinkObjectProp('orange-crush', '/menu/drink/orange-crush', '/assets/menu/drinks/drinks-category.jpg', 'Orange Crush 2-Liter', 800, 800, 'Orange Crush', 'Yummy Orange Crush'));
// #endregion

// #region Ingredients

// #region Crusts
ingredients.push(generateIngredient(1, "hand tossed", "crust"));
ingredients.push(generateIngredient(2, "stuffed crust", "crust"));
ingredients.push(generateIngredient(3, "handmade pan", "crust"));
ingredients.push(generateIngredient(4, "crunchy thin crust", "crust"));
ingredients.push(generateIngredient(5, "new york style", "crust"));
ingredients.push(generateIngredient(6, "gluten free", "crust"));

// #endregion

// #region Crust Seasoning

ingredients.push(generateIngredient(7, "garlic crust seasoning", "crust seasoning"));
ingredients.push(generateIngredient(8, "no garlic crust seasoning", "crust seasoning"));

// #endregion

// #region Sauce

ingredients.push(generateIngredient(8, "marinara sauce", "sauce"));
ingredients.push(generateIngredient(9, "honey bbq sauce", "sauce"));
ingredients.push(generateIngredient(10, "garlic parmesan sauce", "sauce"));
ingredients.push(generateIngredient(11, "alfredo sauce", "sauce"));
ingredients.push(generateIngredient(12, "ranch", "sauce"));
ingredients.push(generateIngredient(13, "no sauce", "sauce"));

// #endregion

// #endregion

export { heroImage, menuCategoryObjects, ingredients, menuDataMap };