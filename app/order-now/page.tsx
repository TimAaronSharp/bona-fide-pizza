import { Navbar } from "../ui/nav/navbar"


const navLinks = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Menu",
    href: "/menu"
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