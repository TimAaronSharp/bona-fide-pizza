import { Metadata } from "next"
import { LoginForm } from "@/app/ui/components/auth/loginForm";

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <>
      <main>
        <h1>Login Page</h1>
        <LoginForm />
      </main>
    </>
  )
}