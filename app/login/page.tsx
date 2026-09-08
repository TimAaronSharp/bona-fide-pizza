import { Metadata } from "next"
import { Navbar } from "../ui/nav/navbar"

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <>
      <main>
        <Navbar />
        <h1>Login Page</h1>
      </main>
    </>
  )
}