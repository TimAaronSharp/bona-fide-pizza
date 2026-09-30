// Importing "better-auth/minimal" due to docs recommending it when using ORMs like Drizzle.

import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { db } from "@/app/db/drizzle";
import * as authSchema from "@/app/db/auth-schema.db";
import { admin as adminPlugin } from "better-auth/plugins";
import { ac, admin, customer } from "@/app/lib/auth/permissions";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema
  }),
  emailAndPassword: {
    enabled: true,
    // autoSignIn: false <- By default this is true.
  },
  plugins: [
    adminPlugin({
      ac,
      defaultRole: "customer",
      roles: {
        admin,
        customer
      }
    }),
  ],
});