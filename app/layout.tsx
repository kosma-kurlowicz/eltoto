import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Navigation from "./components/navigation";

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
    <html lang="en">
      <body>
        <header>
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="El ToTo Movie Studio Logo"
              width={100}
              height={24}
              priority
            />
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
