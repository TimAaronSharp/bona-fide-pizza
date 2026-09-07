import type { NavLink } from "@/app/lib/definitions"
import Link from "next/link"

export function Navbar({ navLink }: { navLink: NavLink[] }) {
  return (
    <>
      {navLink.map((link) => {
        return (
          <Link key={link.name} href={link.href}>{link.name}</Link>
        )
      })}
    </>
  )
}