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
    <div className="flex w-full gap-5 nav-padding">
      <div className="flex w-45/100 debug-box-white items-center justify-start ">
        <ul className="flex gap-5 debug-box-red">
          {navLinks.map((link) => {
            return (
              <li key={`${link.name}key`}>
                <Link key={link.name} href={link.href} className={`debug-box-yellow text-2xl ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-white'}`}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex w-1/10 debug-box-white nav-align-center justify-center">
        <Image src='/pizza-logo.png' alt='Bona Fide Pizza Logo' width={900} height={500} className="logo" />
      </div>
      <div className="flex w-45/100 debug-box-white justify-end pr-[50px]">
        <div className="flex nav-align-center debug-box-red">
          <Link key='Login' href='login' className={`me-10 text-2xl ${pathname === '/login' ? 'text-blue-600 font-bold' : 'text-white'}`}>Login</Link>
        </div>
      </div>
    </div>
  )
}