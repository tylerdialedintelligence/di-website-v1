"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Placeholder image area */}
        <motion.div
          className="flex aspect-square items-center justify-center rounded-2xl bg-surface-lighter"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="font-display text-6xl font-bold text-border-light">
            TD
          </span>
        </motion.div>

        {/* Bio content */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground">
            Tyler Dial
          </h2>
          <p className="mt-1 text-muted">Founder, Dialed Intelligence</p>
          <p className="mt-4 text-lg text-muted">
            Tyler started Dialed Intelligence after seeing the same pattern
            across dozens of growing companies: talented teams buried in
            operational work that software should handle. He builds AI agent
            systems that give those teams their time back.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-accent transition-colors hover:text-accent-light"
          >
            More about Tyler and Dialed Intelligence &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
