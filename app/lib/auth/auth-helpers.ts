import { authClient } from "@/app/lib/auth/auth-client";

export const handleUserSignUp = async (email: string, password: string, name: string) => {
  await authClient.signUp.email({
    email,
    password,
    name
    // callbackURL: "/"
  }, {
    onRequest: (ctx) => {
      console.log("Loading... ", ctx);
    },
    onSuccess: (ctx) => {
      console.log("Success! ", ctx);
    },
    onError: (ctx) => {
      alert(ctx.error.message);
    }
  });
}