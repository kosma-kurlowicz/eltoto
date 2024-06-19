import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Navigation from "./components/navigation";

import { Figtree } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const figtree = Figtree({
  subsets: ['latin-ext'],
  weight: '400',
  display: 'swap',
})

const siteTitle: string = "El Toto Movie Studio";

export const metadata: Metadata = {
  title: "El ToTo Movie Studio",
  description: "Short movies and videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        <header>
          <Link href="/">
            <Image src="./eltotocine-logo-export.svg" width={108} height={64} alt="El ToTo Logo" />
          </Link>
          <Navigation />
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <div className="footerBadge">
            <p>{siteTitle}</p>
            <p>All rights reserved &copy; 2024</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
