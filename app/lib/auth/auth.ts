// Importing "better-auth/minimal" due to docs recommending it when using ORMs like Drizzle.

import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { db } from "@/app/db/drizzle";
import * as authSchema from "@/app/db/auth-schema.db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema
  }),
  emailAndPassword: {
    enabled: true,
    // autoSignIn: false <- By default this is true.
  }
});