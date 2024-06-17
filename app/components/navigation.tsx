"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation () {

    const pathname = usePathname();

    return (
        <nav>
            <ul>
              <li className={`link ${pathname === '/' ? 'active' : ''}`}>
                <Link href="/">Intro</Link>
              </li>
              <li className={`link ${pathname === '/about' ? 'active' : ''}`}>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
    )
}