"use client";

import { useState } from "react";
import { handleUserRegister } from "@/app/lib/auth/auth-helpers";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    await handleUserRegister(email, password, firstName, lastName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="register-first-name">First Name: </label>
      <input type="text" id="register-first-name" onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="register-last-name">Last Name: </label>
      <input type="text" id="register-last-name" onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="register-user-email">Email: </label>
      <input type="text" id="register-user-email" onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="register-user-password">Password: </label>
      <input type="text" id="register-user-password" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Sign Up</button>
    </form>
  )
}