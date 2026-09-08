import { Navbar } from "./ui/nav/navbar";
import { Hero } from "./ui/home/hero";
import { heroImage } from "./lib/placeholder-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | Bona Fide Pizza'
};

const navLinks = [
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Order Now",
    href: "/order-now"
  },
  {
    name: "Login",
    href: "/login"
  }
]

export default function Home() {
  return (
    <>
      <main>
        <Navbar navLink={navLinks} />
        <h1>Home Page</h1>
        <Hero heroImage={heroImage} />
      </main>
    </>
  );
}
