import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { ac, admin, customer } from "@/app/lib/auth/permissions";
// You can also export specific methods if preferred:
// export const { signIn, signUp, useSession } = createAuthClient()

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [
    adminClient({
      ac,
      roles: {
        admin,
        customer
      }
    }),
  ],
});