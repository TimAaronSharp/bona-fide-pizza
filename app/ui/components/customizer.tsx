import { Ingredient } from "@/app/lib/definitions.js";
import { ingredients } from "@/app/lib/placeholder-data";
/*What each product type would need in a customizer:

BUILD YOUR OWN PIZZA:
-Qty,
-Crust,
-Size,
-Sauce,
-Crust Seasoning(?),
-Cheese (mozzarella y/n),
-Meats,
-Veggies & More (more = hot buffalo sauce, garlic, etc.),
-Add-On Cheeses (cheddar, feta, etc.),
-Special Instructions (choices from a preset list or single textarea?),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Pizza" is the qty/item, and below that "Pepperoni, Black Olives". If "Dipping Cup" is selected that will be a separate item entry below "Pizza" item) (Only include "Icing Dipping Cup" option on sweet items?),
-STRETCH - Dipping Cups (make extra menu category for extras like sauce cups, side of jalapenos, etc.)?,

SPECIALTY PIZZAS:
-Qty,
-Crust,
-Size,
-Crust Seasoning(?),
-Sauce,
-Cheese (mozzarella y/n),
-Included (list of all toppings included for that specialty pizza),
-Add More Toppings (menu that populates a list of all toppings to choose from - includes the topping choices from "Included" so they can be adjusted there, as well),
-Special Instructions (choices from a preset list or single textarea?),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Supreme" is the qty/item, and below that "Bacon, No Pepperoni" if Bacon was added and Pepperoni was removed. If "Dipping Cup" is selected that will be a separate item entry below "Supreme" item) (Only include "Icing Dipping Cup" option on sweet items?),
-STRETCH - Dipping Cups (make extra menu category for extras like sauce cups, side of jalapenos, etc.)?

BREADS:
-Qty,
-Size (how many pieces),
-Other Flavors (other flavors of specific type of bread - ie. choosing Parmesan Bread Bites shows the Cinnamon and Garlic Bread Bites here?),
-Toppings (***IF YOU DECIDE TO INCLUDE*** breads that have stuffed toppings like "Pepperoni Stuffed Cheesy Bread") - DOES NOT INCLUDE ADDING ADDITIONAL TOPPINGS - ONLY REMOVING/CUSTOMIZING (light, normal),
-Item Summary (at bottom that shows the qty, item, and any alterations, ie. "(1) Pepperoni Stuffed Cheesy Bread" is the qty/item, and below that "Light Pepperoni" if Pepperoni topping is altered. If "Dipping Cup" is selected that will be a separate item entry below "Bread Bites" item (items like "Cinnamon Bread Bites" come with icing dipping cup, so that will need to be added at the bottom automatically and removed if they remove it)) (Only include "Icing Dipping Cup" option on sweet items?),
-STRETCH - Dipping Cups (make extra menu category for extras like sauce cups, side of jalapenos, etc.)?

CHICKEN:
-Qty,
-Size (how many pieces),
-Toppings (***IF YOU DECIDE TO INCLUDE*** chicken that have toppings like "Spicy Jalapeno - Pineapple") - DOES NOT INCLUDE ADDING ADDITIONAL TOPPINGS - ONLY REMOVING/CUSTOMIZING (light, normal),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Honey BBQ Wings" is the qty/item, and below that "Light Jalapeno" if Jalapeno density was altered. If "Dipping Cup" is selected that will be a separate item entry below "Honey BBQ Wings" item) (Only include "Icing Dipping Cup" option on sweet items?),
-STRETCH - Dipping Cups (make extra menu category for extras like sauce cups, side of jalapenos, etc.)?

DESSERTS:
-Qty,
-Size (how many pieces. Make static but shown so people know how many pieces are included in 1xQty?),
-Icing Dipping Cup (For items that it makes sense for. Brownies probably won't have this available, but lava cake and cinnamon bread bites will?),
-Item Summary (at very bottom that shows the qty, item, and any additions, ie. "(1) Cinnamon Bread Bites" is the qty/item, If "Icing Dipping Cup" is selected that will be a separate item entry below "Cinnamon Bread Bites" item) probably won't be any item alteration options?,
***NOTE*** Cinnamon Bread Bites will be in BOTH Breads and Desserts categories.

PASTAS
-Qty,
-Sauces (Maybe for items that make sense? Dominos Chicken Alfredo shows a radial button that is already clicked for the sauce, but not their other mac n cheese pastas. Is this to specifically indicate that it has an alfredo sauce for some reason?),
-Toppings (For items that make sense, like Chicken Alfredo, you could remove/alter the density of the chicken),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Chicken Alfredo" is the qty/item, and below that "Light Chicken" if Chicken density was altered.

SANDWICHES:
-Qty,
-Sauce (for sandwiches that have sauces, like "Ranch" for Chicken Bacon Ranch, "Ranch" and "Hot Buffalo Sauce" for Buffalo Chicken, or "marinara" for Chicken Parm),
-Toppings (only includes a list of toppings that come on that specific sandwich to be removed or altered, complete list of toppings, or develop a list of "sandwich toppings"?),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Chicken Parm" is the qty/item, and below that "Light Marinara, Light Chicken" if Marinara and Chicken density was altered.

SALADS:
-Qty,
-Sides/Dressing,
-Item Summary (at very bottom that shows the qty, item, and any sides/dressings, ie. "(1) Classic Garden" is the qty/item. Sides/Dressings will be listed below item.

DRINKS:
-Qty,
-Size (20oz, 2-liter) (Not all have both choices? Like a bottle of water generally doesn't come in a 2-liter like this? Dominos also has some of their pop as only 20oz, such as coke zero?),
-Item Summary (at very bottom that shows the qty and item, ie. "(1) Pepsi" is the qty/item.

ALL:
-Qty

*/

function filterByCategory(ingredients: Ingredient[], category: Ingredient["category"]): Ingredient[] {

  return ingredients.filter((ingredient) => (
    ingredient.category == category
  ));
};

const crusts = filterByCategory(ingredients, "crust");
const crustSeasonings = filterByCategory(ingredients, "crust seasoning");
const sauces = filterByCategory(ingredients, "sauce");

export function Customizer() {
  return (
    <section>
      <h2>Crusts:</h2>
      {crusts.map((crust) => (
        <p key={crust.name}>{crust.name}</p>
      ))}

      <h2>Crust Seasoning:</h2>
      {crustSeasonings.map((crustSeasoning) => (
        <p key={crustSeasoning.name}>{crustSeasoning.name}</p>
      ))}

      <h2>Sauce:</h2>
      {sauces.map((sauce) => (
        <p key={sauce.name}>{sauce.name}</p>
      ))}
    </section>
  )
}