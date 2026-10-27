import { ImageType, DbProductSeedSchemaType, DbMenuCategorySeedSchemaType, DbImageSeedSchemaType, DbIngredientSeedSchemaType, DbAddressSeedSchemaType, DbOrderSeedSchemaType, DbOrderItemSeedSchemaType, DbProductIngredientSeedSchemaType } from "@/app/lib/definitions";

/*NOTE This file is for generating data objects to be seeded into the database. Maybe I'll change the name now that
the main purpose for this file has changed from creating and exporting the data locally? */

const heroImage: ImageType = {
  src: '/assets/home/images/hero/pizza_hero.jpg',
  alt: 'Giant Pizza.',
  width: 1300,
  height: 956
}


const menuCategoryDbSeedItems: DbMenuCategorySeedSchemaType[] = [];
const productDbSeedItems: DbProductSeedSchemaType[] = [];
const imageDbSeedItems: DbImageSeedSchemaType[] = [];
const ingredientDbSeedItems: DbIngredientSeedSchemaType[] = [];
const productIngredientDbSeedItems: DbProductIngredientSeedSchemaType[] = [];
const addressDbSeedItems: DbAddressSeedSchemaType[] = [];
const orderDbSeedItems: DbOrderSeedSchemaType[] = [];
const orderItemDbSeedItems: DbOrderItemSeedSchemaType[] = [];

/*TODO Look into whether or not I actually need to create placeholder ids for dbSeedItems. I felt I did originally
to use with my zod schemas, but I have created the schema/type with the id omitted anyway, so I don't believe
I need the id for generation.  */
function generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType {
  return {
    name,
    description,
    category,
    href,
    paramName,
    imgId: 0, // Placeholder for db insertion. Will be replaced in seed script by id returned from image table seed.
    price,
    creatorId: "" // Placeholder for db insertion. Will be replaced in seed script by id returned from user table select in seed script.
  }
}

function generateMenuCategoryDbSeedItem(name: string, href: string): DbMenuCategorySeedSchemaType {
  return {
    name,
    href,
    imgId: 0, // Placeholder for db insertion. Will be replaced in seed script by id returned from image table seed.
    creatorId: "" // Placeholder for db insertion. Will be replaced in seed script by id returned from user table select in seed script.
  }
}

function generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType {
  return {
    src,
    alt,
    width,
    height,
    creatorId: "" // Placeholder for db insertion. Will be replaced in seed script by id returned from user table select in seed script.
  }
}

function generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType {
  return {
    name,
    category,
    imgId: 0, // Placeholder for db insertion. Will be replaced in seed script by id returned from image table seed.
    price,
    creatorId: "" // Placeholder for db insertion. Will be replaced in seed script by id returned from user table select in seed script.
  }
}

function generateProductIngredientDbSeedItem(productId: number, ingredientId: number): DbProductIngredientSeedSchemaType {
  return {
    productId,
    ingredientId,
    creatorId: "" // Placeholder for db insertion. Will be replaced in seed script by id returned from user table select in seed script.
  }
}

function generateAddressDbSeedItem(line1: string, city: string, state: string, zipCode: string, isActive: boolean, line2?: string): DbAddressSeedSchemaType {
  return {
    line1,
    line2: line2 ? line2 : null,
    city,
    state,
    zipCode,
    userId: "", // Placeholder for db insertion. Will be replaced in seed script by id returned from user table select in seed script.
    isActive
  }
}

function generateOrderDbSeedItem(orderStatus: string): DbOrderSeedSchemaType {
  return {
    userId: "", //Placeholder for db insertion. Will be replaced in seed script by id returned from user table.
    addressId: 0, //Placeholder for db insertion. Will be replaced in seed script by id returned from address table.
    orderStatus
  }
}

function generateOrderItemDbSeedItem(orderId: number, productId: number, quantity: number, unitPrice: number): DbOrderItemSeedSchemaType {
  return {
    orderId,
    productId,
    quantity,
    unitPrice
  }
}

//#region Menu categories for db menu_category table to be used by menu page. 

// generateMenuCategoryDbSeedItem(name: string, href: string): DbMenuCategorySeedSchemaType
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Build Your Own Pizza', '/menu/build_your_own/pizza'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Specialty Pizzas', '/menu/specialty'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Breads', '/menu/bread'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Chicken Wings', '/menu/chicken'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Pasta', '/menu/pasta'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Sandwiches', '/menu/sandwich'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Salads', '/menu/salad'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Desserts', '/menu/dessert'));
menuCategoryDbSeedItems.push(generateMenuCategoryDbSeedItem('Drinks', '/menu/drinks'));
// #endregion

//#region Individual product items for db product table by category

// -- Build Your Own Pizza

productDbSeedItems.push(generateProductDbSeedItem('Build Your Own Pizza', 'Yummy Build Your Own Pizza', 'pizza', '/menu/build-your-own/pizza', 'pizza', 1499));

// -- Specialty Pizza

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Pepperoni', 'Yummy Pepperoni', 'specialty', '/menu/specialty/pepperoni', 'pepperoni', 1499));
productDbSeedItems.push(generateProductDbSeedItem('Supreme', 'Yummy Supreme', 'specialty', '/menu/specialty/supreme', 'supreme', 1699));
productDbSeedItems.push(generateProductDbSeedItem('Meat Lovers', 'Yummy Meat Lovers', 'specialty', '/menu/specialty/meat-lovers', 'meat-lovers', 1899));
productDbSeedItems.push(generateProductDbSeedItem('6-Cheese', 'Yummy 6-Cheese', 'specialty', '/menu/specialty/6-cheese', '6-cheese', 1399));
productDbSeedItems.push(generateProductDbSeedItem('Veggie Lovers', 'Yummy Veggie Lovers', 'specialty', '/menu/specialty/veggie-lovers', 'veggie-lovers', 1799));
productDbSeedItems.push(generateProductDbSeedItem('BBQ Chicken', 'Yummy BBQ Chicken', 'specialty', '/menu/specialty/bbq-chicken', 'bbq-chicken', 1799));
productDbSeedItems.push(generateProductDbSeedItem('Chicken Bacon Ranch', 'Yummy Chicken Bacon Ranch', 'specialty', '/menu/specialty/chicken-bacon-ranch', 'chicken-bacon-ranch', 1799));

// -- Bread

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Breadsticks', 'Yummy Breadsticks', 'bread', '/menu/bread/breadsticks', 'breadsticks', 499));
productDbSeedItems.push(generateProductDbSeedItem('Cheesy Bread', 'Yummy Cheesy Bread', 'bread', '/menu/bread/cheesy-bread', 'cheesy-bread', 699));
productDbSeedItems.push(generateProductDbSeedItem('Bread Bites', 'Yummy Bread Bites', 'bread', '/menu/bread/bread-bites', 'bread-bites', 599));
productDbSeedItems.push(generateProductDbSeedItem('Cinnamon Bread Bites', 'Yummy Cinnamon Bread Bites', 'bread', '/menu/bread/cinnamon-bread-bites', 'cinnamon-bread-bites', 599));

// -- Chicken

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Plain Wings', 'Yummy Plain Wings', "chicken", '/menu/chicken/plain-wings', 'plain-wings', 899));
productDbSeedItems.push(generateProductDbSeedItem('Hot Wings', 'Yummy Hot Wings', "chicken", '/menu/chicken/hot-wings', 'hot-wings', 899));
productDbSeedItems.push(generateProductDbSeedItem('BBQ Wings', 'Yummy BBQ Wings', "chicken", '/menu/chicken/bbq-wings', 'bbq-wings', 899));
productDbSeedItems.push(generateProductDbSeedItem('Buffalo Wings', 'Yummy Buffalo Wings', "chicken", '/menu/chicken/buffalo-wings', 'buffalo-wings', 899));
productDbSeedItems.push(generateProductDbSeedItem('Garlic Parmesan Wings', 'Yummy Garlic Parmesan Wings', "chicken", '/menu/chicken/garlic-parmesan-wings', 'garlic-parmesan-wings', 899));
productDbSeedItems.push(generateProductDbSeedItem('Boneless Wings', 'Yummy Boneless Wings', "chicken", '/menu/chicken/boneless-wings', 'boneless-wings', 999));
productDbSeedItems.push(generateProductDbSeedItem('Zesty Asian Wings', 'Yummy Zesty Asian Wings', "chicken", '/menu/chicken/zesty-asian-wings', 'zesty-asian-wings', 899));

// -- Pasta

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Chicken Alfredo', 'Yummy Chicken Alfredo', 'pasta', '/menu/pasta/chicken-alfredo', 'chicken-alfredo', 1099));
productDbSeedItems.push(generateProductDbSeedItem('5-Cheese Mac & Cheese', 'Yummy 5-Cheese Mac & Cheese', 'pasta', '/menu/pasta/5-cheese-mac-n-cheese', '5-cheese-mac-n-cheese', 999));
productDbSeedItems.push(generateProductDbSeedItem('Spicy Buffalo 5-Cheese Mac & Cheese', 'Yummy Spicy Buffalo 5-Cheese Mac & Cheese', 'pasta', '/menu/pasta/spicy-buffalo-5-cheese-mac-n-cheese', 'spicy-buffalo-5-cheese-mac-n-cheese', 999));
productDbSeedItems.push(generateProductDbSeedItem('Spaghetti & Meatballs', 'Yummy Spaghetti & Meatballs', 'pasta', '/menu/pasta/spaghetti-n-meatballs', 'spaghetti-n-meatballs', 1099));

// -- Sandwich

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Chicken Parm', 'Yummy Chicken Parm', 'sandwich', '/menu/sandwich/chicken-parm', 'chicken-parm', 899));
productDbSeedItems.push(generateProductDbSeedItem('Chicken Bacon Ranch', 'Yummy Chicken Bacon Ranch', 'sandwich', '/menu/sandwich/chicken-bacon-ranch', 'chicken-bacon-ranch', 899));
productDbSeedItems.push(generateProductDbSeedItem('Italian', 'Yummy Italian', 'sandwich', '/menu/sandwich/italian', 'italian', 899));
productDbSeedItems.push(generateProductDbSeedItem('Buffalo Chicken', 'Yummy Buffalo Chicken', 'sandwich', '/menu/sandwich/buffalo-chicken', 'buffalo-chicken', 899));
productDbSeedItems.push(generateProductDbSeedItem('Philly Cheesesteak', 'Yummy Philly Cheesesteak', 'sandwich', '/menu/sandwich/philly-cheesesteak', 'philly-cheesesteak', 899));

// -- Salad

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Classic Garden', 'Yummy Classic Garden', 'salad', '/menu/salad/classic-garden', 'classic-garden', 799));
productDbSeedItems.push(generateProductDbSeedItem('Chicken Caesar', 'Yummy Chicken Caesar', 'salad', '/menu/salad/chicken-caesar', 'chicken-caesar', 899));

// -- Dessert

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Chocolate Lava Cake', 'Yummy Chocolate Lave Cake', 'dessert', '/menu/dessert/chocolate-lava-cake', 'chocolate-lava-cake', 499));
productDbSeedItems.push(generateProductDbSeedItem('Chocolate Cookie Brownies', 'Yummy Chocolate Cookie Brownies', 'dessert', '/menu/dessert/chocolate-cookie-brownies', 'chocolate-cookie-brownies', 499));
productDbSeedItems.push(generateProductDbSeedItem('Cinnamon Bread Bites', 'Yummy Cinnamon Bread Bites', 'dessert', '/menu/dessert/cinnamon-bread-bites', 'cinnamon-bread-bites', 599));

// -- Drinks

// generateProductDbSeedItem(name: string, description: string, category: string, href: string, paramName: string, price: number): DbProductSeedSchemaType
productDbSeedItems.push(generateProductDbSeedItem('Pepsi', 'Yummy Pepsi', 'drinks', '/menu/drinks/pepsi', 'pepsi', 399));
productDbSeedItems.push(generateProductDbSeedItem('Mountain Dew', 'Yummy Mountain Dew', 'drinks', '/menu/drinks/mountain-dew', 'mountain-dew', 399));
productDbSeedItems.push(generateProductDbSeedItem('Mug Root Beer', 'Yummy Mug Root Beer', 'drinks', '/menu/drinks/mug-root-beer', 'mug-root-beer', 399));
productDbSeedItems.push(generateProductDbSeedItem('Dr Pepper', 'Yummy Dr Pepper', 'drinks', '/menu/drinks/dr-pepper', 'dr-pepper', 399));
productDbSeedItems.push(generateProductDbSeedItem('Cherry Pepsi', 'Yummy Cherry Pepsi', 'drinks', '/menu/drinks/cherry-pepsi', 'cherry-pepsi', 399));
productDbSeedItems.push(generateProductDbSeedItem('Orange Crush', 'Yummy Orange Crush', 'drinks', '/menu/drinks/orange-crush', 'orange-crush', 399));
// #endregion

// #region Images for db image table

// -- Menu Categories

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/specialty-category.jpg', 'Build Your Own Pizza Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/specialty-category.jpg', 'Pizza Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Bread Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Chicken Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/pasta/pasta-category.jpg', 'Pasta Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/sandwich/sandwich-category.jpg', 'Sandwich Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/salad/salad-category.jpg', 'Salad Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/dessert/dessert-category.jpg', 'Dessert Menu Category', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Drinks Menu Category', 800, 800));

// -- Build Your Own Pizza

imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/specialty-category.jpg', 'Build Your Own Pizza', 800, 800));

// -- Specialty Pizza

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/pepperoni.jpg', 'Pepperoni Pizza', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/supreme.jpg', 'Supreme Pizza', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/meat-lovers.jpg', 'Meat Lovers', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/6-cheese.jpg', '6-Cheese', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/veggie-lovers.jpg', 'Veggie Lovers', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/bbq-chicken.jpg', 'BBQ Chicken', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/specialty/chicken-bacon-ranch.jpg', 'Chicken Bacon Ranch', 800, 800));

// -- Bread

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Breadsticks', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Cheesy Bread', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Bread Bites', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Cinnamon Bread Bites', 800, 800));

// -- Chicken

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Plain Wings', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Hot Wings', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'BBQ Wings', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Buffalo Wings', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Garlic Parmesan Wings', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Boneless Wings', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/chicken/chicken-category.jpg', 'Zesty Asian Wings', 800, 800));

// -- Pasta

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/pasta/pasta-category.jpg', 'Chicken Alfredo', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/pasta/pasta-category.jpg', '5-Cheese Mac & Cheese', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/pasta/pasta-category.jpg', 'Spicy Buffalo 5-Cheese Mac & Cheese', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/pasta/pasta-category.jpg', 'Spaghetti & Meatballs', 800, 800));

// -- Sandwich

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/sandwich/sandwich-category.jpg', 'Chicken Parm', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/sandwich/sandwich-category.jpg', 'Chicken Bacon Ranch', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/sandwich/sandwich-category.jpg', 'Italian', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/sandwich/sandwich-category.jpg', 'Buffalo Chicken', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/sandwich/sandwich-category.jpg', 'Philly Cheesesteak', 800, 800));

// -- Salad

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/salad/salad-category.jpg', 'Classic Garden', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/salad/salad-category.jpg', 'Chicken Caesar', 800, 800));

// -- Dessert

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/dessert/dessert-category.jpg', 'Chocolate Lava Cake', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/dessert/dessert-category.jpg', 'Chocolate Cookie Brownies', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/dessert/dessert-category.jpg', 'Cinnamon Bread Bites', 800, 800));

// -- Drinks

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Pepsi', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Mountain Dew', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Mug Root Beer', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Dr Pepper', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Cherry Pepsi', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/drinks/drinks-category.jpg', 'Orange Crush', 800, 800));

// -- Ingredients

// -- -- Crust

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Hand Tossed Crust', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Parmesan Stuffed Crust', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Handmade Pan Crust', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Thin Crust', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'New York Style Crust', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Gluten Free Crust', 800, 800));

// -- -- Crust Seasoning

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Garlic Crust Seasoning', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'No Garlic Crust Seasoning', 800, 800));

// -- -- Sauce

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Robust Tomato Sauce', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Honey BBQ Sauce', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Garlic Parmesan Sauce', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Alfredo Sauce', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Ranch Dressing Sauce', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'No Sauce', 800, 800));

// -- -- Mozzarella

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Mozzarella Cheese', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'No Mozzarella Cheese', 800, 800));

// -- -- Meat

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Ham', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Beef', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Pepperoni', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Italian Sausage', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Chicken', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Bacon', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Philly Steak', 800, 800));

// -- -- Veggies & More

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Hot Buffalo Sauce', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Garlic', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Jalapeno Peppers', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Onions', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Banana Peppers', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Diced Tomatoes', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Black Olives', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Mushrooms', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Pineapple', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Green Peppers', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Spinach', 800, 800));

// -- -- Add-on Cheeses

// generateImageDbSeedItem(src: string, alt: string, width: number, height: number): DbImageSeedSchemaType
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Shredded Provolone', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Cheddar Cheese Blend', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Feta Cheese', 800, 800));
imageDbSeedItems.push(generateImageDbSeedItem('/assets/menu/bread/bread-category.jpg', 'Shredded Parmesan Asiago', 800, 800));

// #endregion

// #region Ingredients for ingredient db table by category

// -- Crust

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Hand Tossed Crust', 'crust', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Parmesan Stuffed Crust', 'crust', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Handmade Pan Crust', 'crust', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Thin Crust', 'crust', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('New York Style Crust', 'crust', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Gluten Free Crust', 'crust', 0));

// -- Crust Seasoning

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Garlic Crust Seasoning', 'crust-seasoning', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('No Garlic Crust Seasoning', 'crust-seasoning', 0));

// -- Sauce

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Robust Tomato Sauce', 'sauce', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Honey BBQ Sauce', 'sauce', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Garlic Parmesan Sauce', 'sauce', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Alfredo Sauce', 'sauce', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Ranch Dressing Sauce', 'sauce', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('No Sauce', 'sauce', 0));

// -- Mozzarella

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Mozzarella Cheese', 'mozzarella', 0));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('No Mozzarella Cheese', 'mozzarella', 0));

// -- Meat

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Ham', 'meat', 100));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Beef', 'meat', 100));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Pepperoni', 'meat', 100));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Italian Sausage', 'meat', 100));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Chicken', 'meat', 100));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Bacon', 'meat', 100));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Philly Steak', 'meat', 100));

// -- Veggies & More

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Hot Buffalo Sauce', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Garlic', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Jalapeno Peppers', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Onions', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Banana Peppers', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Diced Tomatoes', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Black Olives', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Mushrooms', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Pineapple', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Green Peppers', 'veggies-n-more', 200));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Spinach', 'veggies-n-more', 200));

// -- Add-on Cheeses

// generateIngredientDbSeedItem(name: string, category: string, price: number): DbIngredientSeedSchemaType
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Shredded Provolone', 'cheese', 300));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Cheddar Cheese Blend', 'cheese', 300));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Feta Cheese', 'cheese', 300));
ingredientDbSeedItems.push(generateIngredientDbSeedItem('Shredded Parmesan Asiago', 'cheese', 300));

// #endregion

// #region Entries for product_ingredient table

// #region Specialty Pizzas

// Pepperoni

// generateProductIngredientDbSeedItem(productId: number, ingredientId: number)
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(2, 1));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(2, 7));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(2, 9));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(2, 15));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(2, 19));



// Supreme

// generateProductIngredientDbSeedItem(productId: number, ingredientId: number)
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 1));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 7));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 9));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 15));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 19));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 20));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 27));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 30));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 31));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(3, 33));

// #endregion

// #region Sandwiches

// Chicken Bacon Ranch

// generateProductIngredientDbSeedItem(productId: number, ingredientId: number)
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(25, 9));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(25, 15));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(25, 21));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(25, 22));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(25, 35));

// Italian

// generateProductIngredientDbSeedItem(productId: number, ingredientId: number)
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 15));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 17));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 19));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 27));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 28));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 33));
productIngredientDbSeedItems.push(generateProductIngredientDbSeedItem(26, 35));


// #endregion

// #endregion

// #region Addresses for address table

/* NOTE Currently there is no user generator for seeding, so users will need to be created
manually through the /register route form before seeding addresses to avoid foreign key constraint errors.*/

// generateAddressDbSeedItem(line1: string, city: string, state: string, zipCode: string, userId: string, isActive: boolean, line2?: string): DbAddressSeedSchemaType
addressDbSeedItems.push(generateAddressDbSeedItem('123 Fake Street', 'Realtown', 'UT', '12345-6789', true, "line2"));
addressDbSeedItems.push(generateAddressDbSeedItem('456 Real Street', 'Not Fakington', 'UT', '98765-4321', true));

// #endregion

// #region Orders for order table

// generateOrderDbSeedItem(userId: string, orderTotal: number, orderStatus: string): DbOrderSeedSchemaType
orderDbSeedItems.push(generateOrderDbSeedItem('complete'));
orderDbSeedItems.push(generateOrderDbSeedItem('in progress'));
orderDbSeedItems.push(generateOrderDbSeedItem('cancelled'));
orderDbSeedItems.push(generateOrderDbSeedItem('complete'));

// #endregion

// #region OrderItems for order_item table

/* TODO Look into making order/product ids assigned from the returned objects after order/product seeding. 
Perhaps running "seedOrder()" from inside "seedProduct()", and then "seedOrderItem()" after "seedOrder()"
and passing both ids to "seedOrderItem()"? Might not be worth the effort, but at least look into it.*/

// generateOrderItemDbSeedItem(orderId: number, productId: number, quantity: number, orderItemTotal: number): DbOrderItemSeedSchemaType
orderItemDbSeedItems.push(generateOrderItemDbSeedItem(1, 3, 2, 1899));
orderItemDbSeedItems.push(generateOrderItemDbSeedItem(1, 28, 2, 799));
orderItemDbSeedItems.push(generateOrderItemDbSeedItem(1, 8, 1, 499));
orderItemDbSeedItems.push(generateOrderItemDbSeedItem(2, 24, 1, 899));
orderItemDbSeedItems.push(generateOrderItemDbSeedItem(2, 27, 1, 899));
orderItemDbSeedItems.push(generateOrderItemDbSeedItem(2, 31, 1, 499));

// #endregion

export { heroImage, productDbSeedItems, menuCategoryDbSeedItems, imageDbSeedItems, ingredientDbSeedItems, productIngredientDbSeedItems, addressDbSeedItems, orderDbSeedItems, orderItemDbSeedItems };