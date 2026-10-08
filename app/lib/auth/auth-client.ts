import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { ac, admin, customer } from "@/app/lib/auth/permissions";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "@/app/lib/auth/auth";
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
    /*Imported "auth" server config as a type. Passing it to "inferAdditionalFields" as a generic
    allows it to infer the types specified in the "additionalFields" object defined in the "auth.ts"
    server config. */
    inferAdditionalFields<typeof auth>()
  ],
});