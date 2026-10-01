"use client";

import { handleUserLogin } from "@/app/lib/auth/auth-helpers";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    await handleUserLogin(email, password);
    router.push("/account");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login-user-name">Email: </label>
      <input type="text" id="login-name" onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="login-user-password">Password: </label>
      <input type="text" id="login-password" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Log In</button>
    </form>
  )
}