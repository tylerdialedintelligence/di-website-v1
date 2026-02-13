"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-background"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        >
          {/* Close button */}
          <div className="flex justify-end px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="text-foreground"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-10">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={linkVariants}
                initial="closed"
                animate="open"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-display text-2xl text-foreground transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA button */}
          <div className="px-10 pb-12">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-block w-full rounded bg-accent px-6 py-3 text-center text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light"
            >
              Book Assessment
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
