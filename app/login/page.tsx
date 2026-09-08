import { Metadata } from "next"
import { Navbar } from "../ui/nav/navbar"

export const metadata: Metadata = {
  title: 'Login'
};

const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Order Now",
    href: "/order-now"
  }
]

export default function LoginPage() {
  return (
    <>
      <main>
        <Navbar navLink={navLinks} />
        <h1>Login Page</h1>
      </main>
    </>
  )
}