"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#2563eb",
      }}
    >
      <Link
        href="/"
        style={{
          color: pathname === "/" ? "yellow" : "white",
          fontWeight: pathname === "/" ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <Link
        href="/about"
        style={{
          color: pathname === "/about" ? "yellow" : "white",
          fontWeight: pathname === "/about" ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        About
      </Link>

      <Link
        href="/blog"
        style={{
          color: pathname.startsWith("/blog") ? "yellow" : "white",
          fontWeight: pathname.startsWith("/blog") ? "bold" : "normal",
          textDecoration: "none",
        }}
      >
        Blog
      </Link>

      <a
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Next.js
      </a>
    </nav>
  );
}
