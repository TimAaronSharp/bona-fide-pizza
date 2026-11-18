/*NOTE Currently not in use until I decide to implement guest users being able to place order. */

import { cookies } from "next/headers";
import { randomUUID } from "crypto";

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