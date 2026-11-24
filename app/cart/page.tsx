import { and, eq, inArray } from "drizzle-orm";
import { db } from "../db/drizzle"
import * as schemas from "@/app/db/schema.db";
import Link from "next/link";
import { auth } from "../lib/auth/auth";
import { headers } from "next/headers";
import { getUserSessionForCart, queryCartEntries } from "../actions/cart";

export default async function CartPage() {

  const userSession = await getUserSessionForCart();
  console.log("userSession is", userSession);

  const cartEntries = await queryCartEntries();

  // const cart = await db
  //   .select()
  //   .from(schemas.cart)
  //   .where(eq(schemas.cart.userId, userSession.user.id))
  //   .innerJoin(schemas.cartItem, eq(schemas.cartItem.cartId, schemas.cart.id))
  //   .innerJoin(schemas.cartItemModifier, eq(schemas.cartItemModifier.cartItemId, schemas.cartItem.id));

  // console.log("cart is", cart);
  return (
    <>
      {!userSession?.user.name && (
        <h1>Please login to see your shopping cart.</h1>
      )}
      {userSession?.user.name && (
        <div>
          <h1>Hi {userSession?.user.name}</h1>

        </div>
      )}

      <Link key='Checkout' href='checkout'>
        <button>Proceed to Checkout</button>
      </Link>
    </>
  )
}