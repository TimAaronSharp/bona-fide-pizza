import { Navbar } from "./ui/nav/navbar";


const navLinks = [
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Order Now",
    href: "/order-now"
  }
]

export default function Home() {
  return (
    <>
      <main>
        <Navbar navLink={navLinks} />
        <h1>Home Page</h1>
      </main>
    </>
  );
}
