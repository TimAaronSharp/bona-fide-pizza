import { Metadata } from "next"
import { Navbar } from "../ui/nav/navbar"

export const metadata: Metadata = {
  title: 'Menu'
};

const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Order Now",
    href: "order-now"
  },
  {
    name: "Login",
    href: "/login"
  }
]

export default function MenuPage() {
  return (
    <>
      <main>
        <Navbar navLink={navLinks} />
        <h1>Menu Page</h1>
      </main>
    </>
  )
}