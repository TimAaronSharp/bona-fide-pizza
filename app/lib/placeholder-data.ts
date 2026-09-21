import { LinkObject, Ingredient, ImageType } from "@/app/lib/definitions";

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
  pizza: pizzaItems,
  breads: breadsItems,
  chicken: chickenItems,
  pasta: pastaItems,
  sandwiches: sandwichesItems,
  salads: saladsItems,
  desserts: dessertsItems,
  drinks: drinksItems
}

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

menuCategoryObjects.push(generateLinkObjectProp('Pizza', '/menu/pizza', '/assets/menu/pizza/pizza-category.jpg', 'Pizza Menu Category', 800, 800, 'Pizzas'));
menuCategoryObjects.push(generateLinkObjectProp('Breads', '/menu/breads', '/assets/menu/breads/breads-category.jpg', 'Breads Menu Category', 1200, 1200, 'Breads'));
menuCategoryObjects.push(generateLinkObjectProp('Chicken Wings', '/menu/chicken', '/assets/menu/chicken/chicken-category.jpg', 'Chicken Wings Menu Category', 735, 735, 'Chicken'));
menuCategoryObjects.push(generateLinkObjectProp('Pasta', '/menu/pasta', '/assets/menu/pasta/pasta-category.jpg', 'Pasta Menu Category', 1200, 1200, 'Pasta'));
menuCategoryObjects.push(generateLinkObjectProp('Sandwiches', '/menu/sandwiches', '/assets/menu/sandwiches/sandwich-category.jpg', 'Sandwich Menu Category', 1200, 1200, 'Sandwiches'));
menuCategoryObjects.push(generateLinkObjectProp('Salads', '/menu/salads', '/assets/menu/salads/salad-category.jpg', 'Salad Menu Category', 500, 500, 'Salads'));
menuCategoryObjects.push(generateLinkObjectProp('Desserts', '/menu/desserts', '/assets/menu/desserts/dessert-category.jpg', 'Dessert Menu Category', 1200, 800, 'Desserts'));
menuCategoryObjects.push(generateLinkObjectProp('Drinks', '/menu/drinks', '/assets/menu/drinks/drinks-category.jpg', 'Drinks Menu Category', 533, 533, 'Drinks'));
// #endregion

//#region Individual menu items by category

// Pizza

pizzaItems.push(generateLinkObjectProp('pepperoni', '/menu/pizza/pepperoni', '/assets/menu/pizza/pepperoni.jpg', 'Pepperoni Pizza', 800, 800, 'Pepperoni'));
pizzaItems.push(generateLinkObjectProp('supreme', '/menu/pizza/supreme', '/assets/menu/pizza/supreme.jpg', 'Supreme Pizza', 800, 800, 'Supreme'));
pizzaItems.push(generateLinkObjectProp('meat-lovers', '/menu/pizza/meat-lovers', '/assets/menu/pizza/meat-lovers.jpg', 'Meat Lovers Pizza', 800, 800, 'Meat Lovers'));
pizzaItems.push(generateLinkObjectProp('6-cheese', '/menu/pizza/6-cheese', '/assets/menu/pizza/6-cheese.jpg', '6-Cheese Pizza', 800, 800, '6-Cheese'));
pizzaItems.push(generateLinkObjectProp('veggie-lovers', '/menu/pizza/veggie-lovers', '/assets/menu/pizza/veggie-lovers.jpg', 'Veggie Lovers Pizza', 800, 800, 'Veggie Lovers'));
pizzaItems.push(generateLinkObjectProp('bbq-chicken', '/menu/pizza/bbq-chicken', '/assets/menu/pizza/bbq-chicken.jpg', 'BBQ Chicken Pizza', 800, 800, 'BBQ Chicken'));
pizzaItems.push(generateLinkObjectProp('chicken-bacon-ranch', '/menu/pizza/chicken-bacon-ranch', '/assets/menu/pizza/chicken-bacon-ranch.jpg', 'Chicken Bacon Ranch Pizza', 800, 800, 'Chicken Bacon Ranch'));

// Bread

breadsItems.push(generateLinkObjectProp('breadsticks', '/menu/breads/breadsticks', '/assets/menu/breads/breads-category.jpg', 'Breadsticks', 800, 800, 'Breadsticks'));
breadsItems.push(generateLinkObjectProp('cheesy-bread', '/menu/breads/cheesy-bread', '/assets/menu/breads/breads-category.jpg', 'Cheesy Bread', 800, 800, 'Cheesy Bread'));
breadsItems.push(generateLinkObjectProp('bread-bites', '/menu/breads/bread-bites', '/assets/menu/breads/breads-category.jpg', 'Bread Bites', 800, 800, 'Bread Bites'));
breadsItems.push(generateLinkObjectProp('cinnamon-bread-bites', '/menu/breads/cinnamon-bread-bites', '/assets/menu/breads/breads-category.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites'));

// Chicken

chickenItems.push(generateLinkObjectProp('plain-wings', '/menu/chicken/plain-wings', '/assets/menu/chicken/chicken-category.jpg', 'Plain Wings', 800, 800, 'Plain Wings'));
chickenItems.push(generateLinkObjectProp('hot-wings', '/menu/chicken/hot-wings', '/assets/menu/chicken/chicken-category.jpg', 'Hot Wings', 800, 800, 'Hot Wings'));
chickenItems.push(generateLinkObjectProp('bbq-wings', '/menu/chicken/bbq-wings', '/assets/menu/chicken/chicken-category.jpg', 'BBQ Wings', 800, 800, 'BBQ Wings'));
chickenItems.push(generateLinkObjectProp('buffalo-wings', '/menu/chicken/buffalo-wings', '/assets/menu/chicken/chicken-category.jpg', 'Buffalo Wings', 800, 800, 'Buffalo Wings'));
chickenItems.push(generateLinkObjectProp('garlic-parmesan-wings', '/menu/chicken/garlic-parmesan-wings', '/assets/menu/chicken/chicken-category.jpg', 'Garlic Parmesan Wings', 800, 800, 'Garlic Parmesan Wings'));
chickenItems.push(generateLinkObjectProp('boneless-wings', '/menu/chicken/boneless-wings', '/assets/menu/chicken/chicken-category.jpg', 'Boneless Wings', 800, 800, 'Boneless Wings'));
chickenItems.push(generateLinkObjectProp('zesty-asian-wings', '/menu/chicken/zesty-asian-wings', '/assets/menu/chicken/chicken-category.jpg', 'Zesty Asian Wings', 800, 800, 'Zesty Asian Wings'));

// Pasta

pastaItems.push(generateLinkObjectProp('chicken-alfredo', '/menu/pasta/chicken-alfredo', '/assets/menu/pasta/pasta-category.jpg', 'Chicken Alfredo', 800, 800, 'Chicken Alfredo'));
pastaItems.push(generateLinkObjectProp('5-cheese-mac-n-cheese', '/menu/pasta/5-cheese-mac-n-cheese', '/assets/menu/pasta/pasta-category.jpg', '5-Cheese Mac & Cheese', 800, 800, '5-Cheese Mac & Cheese'));
pastaItems.push(generateLinkObjectProp('spicy-buffalo-5-cheese-mac-n-cheese', '/menu/pasta/spicy-buffalo-5-cheese-mac-n-cheese', '/assets/menu/pasta/pasta-category.jpg', 'Spicy Buffalo 5-Cheese Mac & Cheese', 800, 800, 'Spicy Buffalo 5-Cheese Mac & Cheese'));
pastaItems.push(generateLinkObjectProp('spaghetti-n-meatballs', '/menu/pasta/spaghetti-n-meatballs', '/assets/menu/pasta/pasta-category.jpg', 'Spaghetti & Meatballs', 800, 800, 'Spaghetti & Meatballs'));

// Sandwiches

sandwichesItems.push(generateLinkObjectProp('chicken-parm', '/menu/sandwiches/chicken-parm', '/assets/menu/sandwiches/sandwich-category.jpg', 'Chicken Parm Sandwich', 800, 800, 'Chicken Parm'));
sandwichesItems.push(generateLinkObjectProp('chicken-bacon-ranch', '/menu/sandwiches/chicken-bacon-ranch', '/assets/menu/sandwiches/sandwich-category.jpg', 'Chicken Bacon Ranch Sandwich', 800, 800, 'Chicken Bacon Ranch'));
sandwichesItems.push(generateLinkObjectProp('italian', '/menu/sandwiches/italian', '/assets/menu/sandwiches/sandwich-category.jpg', 'Italian Sandwich', 800, 800, 'Italian'));
sandwichesItems.push(generateLinkObjectProp('buffalo-chicken', '/menu/sandwiches/buffalo-chicken', '/assets/menu/sandwiches/sandwich-category.jpg', 'Buffalo Chicken Sandwich', 800, 800, 'Buffalo Chicken'));
sandwichesItems.push(generateLinkObjectProp('philly-cheesesteak', '/menu/sandwiches/philly-cheesesteak', '/assets/menu/sandwiches/sandwich-category.jpg', 'Philly Cheesesteak Sandwich', 800, 800, 'Philly Cheesesteak'));

// Salads

saladsItems.push(generateLinkObjectProp('classic-garden', '/menu/salads/classic-garden', '/assets/menu/salads/salad-category.jpg', 'Classic Garden Salad', 800, 800, 'Classic Garden'));
saladsItems.push(generateLinkObjectProp('chicken-caesar', '/menu/salads/chicken-caesar', '/assets/menu/salads/salad-category.jpg', 'Chicken Caesar Salad', 800, 800, 'Chicken Caesar'));

// Desserts

dessertsItems.push(generateLinkObjectProp('chocolate-lava-cake', '/menu/desserts/chocolate-lava-cake', '/assets/menu/desserts/dessert-category.jpg', 'Chocolate Lava Cake', 800, 800, 'Chocolate Lava Cake'));
dessertsItems.push(generateLinkObjectProp('chocolate-cookie-brownies', '/menu/desserts/chocolate-cookie-brownies', '/assets/menu/desserts/dessert-category.jpg', 'Chocolate Cookie Brownies', 800, 800, 'Chocolate Cookie Brownies'));
dessertsItems.push(generateLinkObjectProp('cinnamon-bread-bites', '/menu/desserts/cinnamon-bread-bites', '/assets/menu/desserts/dessert-category.jpg', 'Cinnamon Bread Bites', 800, 800, 'Cinnamon Bread Bites'));

// Drinks

drinksItems.push(generateLinkObjectProp('pepsi', '/menu/drinks/pepsi', '/assets/menu/drinks/drinks-category.jpg', 'Pepsi 2-Liter', 800, 800, 'Pepsi'));
drinksItems.push(generateLinkObjectProp('mountain-dew', '/menu/drinks/mountain-dew', '/assets/menu/drinks/drinks-category.jpg', 'Mountain Dew 2-Liter', 800, 800, 'Mountain Dew'));
drinksItems.push(generateLinkObjectProp('mug-root-beer', '/menu/drinks/mug-root-beer', '/assets/menu/drinks/drinks-category.jpg', 'Mug Root Beer 2-Liter', 800, 800, 'Mug Root Beer'));
drinksItems.push(generateLinkObjectProp('dr-pepper', '/menu/drinks/dr-pepper', '/assets/menu/drinks/drinks-category.jpg', 'Dr Pepper 2-Liter', 800, 800, 'Dr Pepper'));
drinksItems.push(generateLinkObjectProp('cherry-pepsi', '/menu/drinks/cherry-pepsi', '/assets/menu/drinks/drinks-category.jpg', 'Cherry Pepsi 2-Liter', 800, 800, 'Cherry Pepsi'));
drinksItems.push(generateLinkObjectProp('orange-crush', '/menu/drinks/orange-crush', '/assets/menu/drinks/drinks-category.jpg', 'Orange Crush 2-Liter', 800, 800, 'Orange Crush'));
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

export { heroImage, menuCategoryObjects, pizzaItems, breadsItems, chickenItems, pastaItems, sandwichesItems, saladsItems, dessertsItems, drinksItems, ingredients, menuDataMap };