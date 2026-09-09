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

  return (
    <div className="flex mt-5">
      <div className="flex ms-40 ">
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href} className={`ms-10 text-2xl ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-white'}`}>{link.name}</Link>
          )
        })}
      </div>
      <div className="flex">
        <Link key='Login' href='login' className={`me-10 text-2xl ${pathname === '/login' ? 'text-blue-600 font-bold' : 'text-white'}`}>Login</Link>
      </div>
    </div>
  )
}