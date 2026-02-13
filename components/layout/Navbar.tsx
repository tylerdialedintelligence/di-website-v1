"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navItems } from "@/lib/constants";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-foreground"
          >
            Dialed Intelligence
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded bg-accent px-4 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light md:inline-block"
          >
            Book Assessment
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
