'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './navbar.css';

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
    <header>
      <nav className="flex w-full gap-5 nav-padding">
        <div className="flex w-45/100 items-center justify-start pl-[50px]">
          {/*Defensive flex alignment "items-center" in case icons are added to links.*/}
          <ul className="flex gap-5 items-center">
            {navLinks.map((link) => {
              return (
                <li key={`${link.name}key`}>
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl 
                ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex w-1/10 items-center justify-center">
          <Link key='Home Logo' href="/">
            <Image src='/assets/ui/nav/images/pizza-logo.png' alt='Bona Fide Pizza Logo' width={900} height={500} className="logo" />
          </Link>
        </div>
        <div className="flex w-45/100 items-center justify-end pr-[50px]">
          {/*Defensive flex alignment "items-center" in case icons are added to links.*/}
          <div className="flex items-center">
            <Link key='Login' href='login' className={`text-2xl ${pathname === '/login' ? 'text-blue-600 font-bold' : 'text-white'}`}>Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}