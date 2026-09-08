'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      name: pathname === "/" ? "Order Now" : "Home",
      href: pathname === "/" ? "/menu" : "/"
    },
    {
      name: "Menu",
      href: "/menu"
    },
    {
      name: "Deals",
      href: "/deals"
    }
  ];

  /* TODO Look into React Router's <NavLink> component to potentially replace <Link>.
  Looks like it is a specialized version of <Link> that knows if it's the active link,
  making it ideal for navbars and menus for adding active styling / classes.*/


  return (
    <div className="flex justify-between">
      <div className="flex justify-between ms-40 mt-5">
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="ms-10 text-2xl">{link.name}</Link>
          )
        })}
      </div>
      <Link key='Login' href='login'>Login</Link>
    </div>
  )
}