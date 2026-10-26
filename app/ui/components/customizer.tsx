"use client";

import { Ingredient } from "@/app/lib/definitions";
import { useState } from "react";
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

BREAD:
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

DESSERT:
-Qty,
-Size (how many pieces. Make static but shown so people know how many pieces are included in 1xQty?),
-Icing Dipping Cup (For items that it makes sense for. Brownies probably won't have this available, but lava cake and cinnamon bread bites will?),
-Item Summary (at very bottom that shows the qty, item, and any additions, ie. "(1) Cinnamon Bread Bites" is the qty/item, If "Icing Dipping Cup" is selected that will be a separate item entry below "Cinnamon Bread Bites" item) probably won't be any item alteration options?,
***NOTE*** Cinnamon Bread Bites will be in BOTH Bread and Dessert categories.

PASTAS
-Qty,
-Sauces (Maybe for items that make sense? Dominos Chicken Alfredo shows a radial button that is already clicked for the sauce, but not their other mac n cheese pastas. Is this to specifically indicate that it has an alfredo sauce for some reason?),
-Toppings (For items that make sense, like Chicken Alfredo, you could remove/alter the density of the chicken),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Chicken Alfredo" is the qty/item, and below that "Light Chicken" if Chicken density was altered.

SANDWICH:
-Qty,
-Sauce (for sandwiches that have sauces, like "Ranch" for Chicken Bacon Ranch, "Ranch" and "Hot Buffalo Sauce" for Buffalo Chicken, or "marinara" for Chicken Parm),
-Toppings (only includes a list of toppings that come on that specific sandwich to be removed or altered, complete list of toppings, or develop a list of "sandwich toppings"?),
-Item Summary (at very bottom that shows the qty, item, and any alterations, ie. "(1) Chicken Parm" is the qty/item, and below that "Light Marinara, Light Chicken" if Marinara and Chicken density was altered.

SALAD:
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

// NOTE Individual components below in this file. Didn't want to scroll to the bottom to look at the main component.
export function Customizer({ ingredients }: { ingredients: Ingredient[] }) {
  const [selectedIngredients, setSelectedIngredients] = useState<Record<number, 'light' | 'normal' | 'extra' | undefined>>(() => {
    const initialState: Record<number, 'light' | 'normal' | 'extra' | undefined> = {};
    for (const ingredient of ingredients) {
      initialState[ingredient.id] = undefined;
    }
    return initialState;
  });

  console.log("selectedIngredients starts as", selectedIngredients);

  return (
    <section>
      <br />
      <h2>Crusts</h2>
      <p>-----</p>
      <CrustList ingredients={ingredients} />
      <p>-----</p>
      <br />
      <h2>Crust Seasoning</h2>
      <p>-----</p>
      <CrustSeasoningList ingredients={ingredients} />
      <p>-----</p>
      <br />
      <h2>Sauce</h2>
      <p>-----</p>
      <SauceList ingredients={ingredients} />
      <p>-----</p>
      <br />
      <h2>Cheese</h2>
      <p>-----</p>
      <MozzarellaList ingredients={ingredients} />
      <p>-----</p>
      <br />
      <h2>Meat</h2>
      <p>-----</p>
      <MeatList ingredients={ingredients} />
      <p>-----</p>
      <br />
      <h2>Veggies & More</h2>
      <p>-----</p>
      <VeggiesNMoreList ingredients={ingredients} />
      <p>-----</p>
      <br />
      <h2>Add-on Cheeses</h2>
      <p>-----</p>
      <AddonCheeseList ingredients={ingredients} />
      <p>-----</p>
    </section>
  )
}

function CrustList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((crust) => {
        if (crust.category == "crust") {
          return (
            <li key={crust.name}>
              <br />
              <label htmlFor={crust.name + " id"}>{crust.name}</label>
              <input type="radio" id={crust.name + " id"} name="crust-selection-radio-group"></input>
              <br />
            </li>
          )
        }
      })}
    </ol>
  )
}

function CrustSeasoningList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((crustSeasoning) => {
        if (crustSeasoning.category == "crust-seasoning") {
          return (
            <li key={crustSeasoning.name}>
              <br />
              <label htmlFor={crustSeasoning.name + " id"}>{crustSeasoning.name}</label>
              <input type="radio" id={crustSeasoning.name + " id"} name="crustSeasoning-selection-radio-group"></input>
              <br />
            </li>
          );
        }
      })}
    </ol>
  )
}

function SauceList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((sauce) => {
        if (sauce.category == "sauce") {
          return (
            <li key={sauce.name}>
              <br />
              <label htmlFor={sauce.name + " id"}>{sauce.name}</label>
              <input type="radio" id={sauce.name + " id"} name="sauce-selection-radio-group"></input>
              <br />

              <label htmlFor={sauce.name + "-light"}>Light </label>
              <input type="radio" id={sauce.name + "-light"} name={`sauce-density-radio-group`} />
              <label htmlFor={sauce.name + "-normal"}>Normal </label>
              <input type="radio" id={sauce.name + "-normal"} name={`sauce-density-radio-group`} />
              <label htmlFor={sauce.name + "-extra"}>Extra </label>
              <input type="radio" id={sauce.name + "-extra"} name={`sauce-density-radio-group`} />
            </li>
          )
        }
      })}
    </ol>
  )
}

function MozzarellaList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((mozzarella) => {
        if (mozzarella.category == "mozzarella") {
          return (
            <li key={mozzarella.name}>
              <br />
              <label htmlFor={mozzarella.name + " id"}>{mozzarella.name}</label>
              <input type="radio" id={mozzarella.name + " id"} name="mozzarella-selection-radio-group"></input>
              <br />

              <label htmlFor={mozzarella.name + "-light"}>Light </label>
              <input type="radio" id={mozzarella.name + "-light"} name="mozzarella-density-radio-group" />
              <label htmlFor={mozzarella.name + "-normal"}>Normal </label>
              <input type="radio" id={mozzarella.name + "-normal"} name="mozzarella-density-radio-group" />
              <label htmlFor={mozzarella.name + "-extra"}>Extra </label>
              <input type="radio" id={mozzarella.name + "-extra"} name="mozzarella-density-radio-group" />
            </li>
          )
        }
      })}
    </ol>
  )
}

function MeatList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((meat) => {
        if (meat.category == "meat") {
          return (
            <li key={meat.name}>
              <br />
              <label htmlFor={meat.name + " id"}>{meat.name}</label>
              <input type="checkbox" id={meat.name + " id"}></input>
              <br />

              <label htmlFor={meat.name + "-light"}>Light </label>
              <input type="radio" id={meat.name + "-light"} name="meat-density-radio-group" />
              <label htmlFor={meat.name + "-normal"}>Normal </label>
              <input type="radio" id={meat.name + "-normal"} name="meat-density-radio-group" />
              <label htmlFor={meat.name + "-extra"}>Extra </label>
              <input type="radio" id={meat.name + "-extra"} name="meat-density-radio-group" />
            </li>
          )
        }
      })}
    </ol>
  )
}

function VeggiesNMoreList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((veggies) => {
        if (veggies.category == "veggies-n-more") {
          return (
            <li key={veggies.name}>
              <br />

              <label htmlFor={veggies.name + "-id"}>{veggies.name}</label>
              <input type="checkbox" id={veggies.name + "-id"}></input>
              <br />

              <label htmlFor={veggies.name + "-light"}>Light </label>
              <input type="radio" id={veggies.name + "-light"} name="veggies-density-radio-group" />
              <label htmlFor={veggies.name + "-normal"}>Normal </label>
              <input type="radio" id={veggies.name + "-normal"} name="veggies-density-radio-group" />
              <label htmlFor={veggies.name + "-extra"}>Extra </label>
              <input type="radio" id={veggies.name + "-extra"} name="veggies-density-radio-group" />
            </li>
          )
        }
      })}
    </ol>
  )
}

function AddonCheeseList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <ol>
      {ingredients.map((cheese) => {
        if (cheese.category == "cheese") {
          return (
            <li key={cheese.name}>
              <br />

              <label htmlFor={cheese.name + " id"}>{cheese.name}</label>
              <input type="checkbox" id={cheese.name + " id"}></input>
              <br />

              <label htmlFor={cheese.name + "-light"}>Light </label>
              <input type="radio" id={cheese.name + "-light"} name="addonCheeses-density-radio-group" />
              <label htmlFor={cheese.name + "-normal"}>Normal </label>
              <input type="radio" id={cheese.name + "-normal"} name="addonCheeses-density-radio-group" />
              <label htmlFor={cheese.name + "-extra"}>Extra </label>
              <input type="radio" id={cheese.name + "-extra"} name="addonCheeses-density-radio-group" />
            </li>
          )
        }
      })}
    </ol>
  )
}