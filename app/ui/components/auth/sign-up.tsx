"use client";

import { useState } from "react";
import { handleUserSignUp } from "@/app/lib/auth/auth-helpers";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    await handleUserSignUp(email, password, name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-sign-up">Name:</label>
      <input type="text" id="name-sign-up" onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email-sign-up">Email:</label>
      <input type="text" id="email-sign-up" onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password-sign-up">Password:</label>
      <input type="text" id="password-sign-up" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Sign Up</button>
    </form>
  )
}