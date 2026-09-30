import { createAuthClient } from "better-auth/react";

// You can also export specific methods if preferred:
// export const { signIn, signUp, useSession } = createAuthClient()

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000"
})