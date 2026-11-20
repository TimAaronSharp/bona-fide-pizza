
import { cookies, headers } from "next/headers";
import { randomUUID } from "crypto";
import { auth } from "./auth/auth";

/*TODO Will likely refactor this to be used in multiple areas. */
export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    throw new Error("No user found. Please log in.");
  }
  console.log(`Hello user ${session.user.id}`);
  return session;
}


/*NOTE Currently not in use until I decide to implement guest users being able to place order. */
export async function getOrCreateGuestSession(): Promise<string> {
  const cookieStore = await cookies();
  const COOKIE_NAME = "guest_cart_session";
  let sessionId = (cookieStore).get(COOKIE_NAME)?.value;

  if (!sessionId) {
    sessionId = randomUUID();

    cookieStore.set(COOKIE_NAME, sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/"
    });
  }
  return sessionId;
}