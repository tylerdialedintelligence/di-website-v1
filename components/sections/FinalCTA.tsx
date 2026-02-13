"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-t border-border bg-surface-light px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Ready to see what AI agents can do for your operations?
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          The AI Operations Assessment is a focused engagement where we map your
          workflows, identify the highest-value opportunities for AI agents, and
          deliver a concrete implementation plan. No commitment beyond the
          assessment.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-10 py-5 font-display text-lg font-semibold text-background transition-colors hover:bg-accent-light"
          >
            Book Your Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
