import { headers } from "next/headers";
import { auth } from "@/app/lib/auth/auth";
import { queryCartEntries } from "@/app/actions/cart";
import { AddressForm } from "@/app/ui/components/addressForm";
import { db } from "@/app/db/drizzle";
import * as schemas from "@/app/db/schema.db";
import { and, eq } from "drizzle-orm";
import { CheckoutForm } from "@/app/ui/components/checkout-form";


export default async function CheckoutPage() {
  async function getUserSession() {
    const session = await auth.api.getSession({
      headers: await headers(),
      query: {
        disableCookieCache: true
      }
    });
    if (!session) {
      throw new Error("No user found. Please log in.");
    }
    console.log(`Hello user ${session?.user.id}`);
    return session;
  }

  async function getUserAddresses(userId: string) {
    const queriedAddresses = await db
      .select({
        id: schemas.address.id,
        line1: schemas.address.line1,
        line2: schemas.address.line2,
        city: schemas.address.city,
        state: schemas.address.state,
        zipCode: schemas.address.zipCode
      }).from(schemas.address).where(and(eq(schemas.address.userId, userId), eq(schemas.address.isActive, true)));
    console.log("queriedAddresses is ", queriedAddresses);
    return queriedAddresses;
  }

  /*TODO Maybe refactor so that you are only getting the cart/cartItem/product data for this page. You don't NEED to have
  the modifiers if you are going to be following the template you've selected, unless you decide you would like them. */
  const userSession = await getUserSession();
  const cartEntries = await queryCartEntries();
  const userAddresses = await getUserAddresses(userSession.user.id);

  return (
    <>
      <CheckoutForm addresses={userAddresses} />
      <AddressForm />
    </>
  )
}