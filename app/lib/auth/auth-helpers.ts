import { authClient } from "@/app/lib/auth/auth-client";

export const handleUserRegister = async (email: string, password: string, name: string) => {
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

export const handleUserLogin = async (email: string, password: string) => {
  await authClient.signIn.email({
    email,
    password,
    rememberMe: false
  }, {
    onRequest: (ctx) => {
      console.log("Loading...", ctx);
    },
    onSuccess: (ctx) => {
      console.log("Success! ", ctx);
    },
    onError: (ctx) => {
      alert(ctx.error.message);
    }
  });
}

export const handleUserLogout = async () => {
  await authClient.signOut();
}