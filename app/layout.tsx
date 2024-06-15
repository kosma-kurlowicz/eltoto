import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header>
        <Image
              src="/vercel.svg"
              alt="El ToTo Movie Studio Logo"
              width={100}
              height={24}
              priority
            />
          <nav>
            <ul>
              <li><Link href="/">Intro</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main">
          {children}
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
