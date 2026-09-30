import { Metadata } from "next"
import { SignUpForm } from "../ui/components/auth/sign-up";

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <>
      <main>
        <h1>Login Page</h1>
        <SignUpForm />
      </main>
    </>
  )
}