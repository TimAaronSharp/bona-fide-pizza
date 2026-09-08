import { Metadata } from "next"
import { Navbar } from "../ui/nav/navbar"

export const metadata: Metadata = {
  title: 'Order Now'
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
    name: "Login",
    href: "/login"
  }
]

export default function OrderNowPage() {
  return (
    <>
      <main>
        <Navbar navLink={navLinks} />
        <h1>Order Now Page</h1>
      </main>
    </>
  )
}