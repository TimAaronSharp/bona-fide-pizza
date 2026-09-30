import { authClient } from "@/app/lib/auth/auth-client";

const { data, error } = await authClient.signIn.email({
  email: "test@test.com",
  password: "testing123",
  callbackURL: "/",
  rememberMe: false
})