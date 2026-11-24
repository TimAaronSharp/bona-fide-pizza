import { headers } from "next/headers";
import { auth } from "../lib/auth/auth";


export default async function CheckoutPage() {
  async function getUserSession() {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    // console.log(`Hello user ${session.user.id}`);
    return session;
  }


  return (
    <>
    </>
  )
}