"use client";

import { handleUserLogout } from "@/app/lib/auth/auth-helpers";
import { useRouter } from "next/navigation";

export function Logout() {
  const router = useRouter();

  const handleLogoutRequest = async () => {
    await handleUserLogout();
    router.push("/login");
  }
  return (
    <button type="button" onClick={handleLogoutRequest}>Logout</button>
  )
}