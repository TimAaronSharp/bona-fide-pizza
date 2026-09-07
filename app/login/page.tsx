import { Navbar } from "../ui/nav/navbar"

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