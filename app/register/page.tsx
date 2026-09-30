import { Metadata } from "next"
import { RegisterForm } from "../ui/components/auth/registerForm";

export const metadata: Metadata = {
  title: 'Login'
};

export default function RegisterUserPage() {
  return (
    <>
      <main>
        <h1>Register User Page</h1>
        <RegisterForm />
      </main>
    </>
  )
}