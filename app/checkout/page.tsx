import { headers } from "next/headers";
import { auth } from "../lib/auth/auth";
import { queryCartEntries } from "../actions/cart";


export default async function CheckoutPage() {
  async function getUserSession() {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    console.log(`Hello user ${session?.user.id}`);
    return session;
  }

  /*TODO Maybe refactor so that you are only getting the cart/cartItem/product data for this page. You don't NEED to have
  the modifiers if you are going to be following the template you've selected, unless you decide you would like them. */

  const cartEntries = await queryCartEntries();

  return (
    <>
    </>
  )
}