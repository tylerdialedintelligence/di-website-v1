"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const useCases = [
  {
    title: "Operations & Admin",
    description:
      "A 40-person services firm automated intake processing, scheduling, and client communications. Their ops team now manages 3x the volume with the same headcount.",
    badge: "3x capacity",
  },
  {
    title: "Customer Support",
    description:
      "An e-commerce company deployed AI agents to handle Tier 1 support. Resolution time dropped 70%. Human agents focus on complex cases only.",
    badge: "70% faster",
  },
  {
    title: "Finance & Reporting",
    description:
      "A SaaS company automated monthly reporting, reconciliation, and anomaly flagging. Their finance team went from 3 days of report prep to 3 hours.",
    badge: "90% time saved",
  },
];

export default function UseCasePreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Where Agents Create the Most Value
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href="/use-cases"
                className="group block rounded-lg border border-border bg-surface-light p-8 transition-colors hover:border-accent/30"
              >
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {useCase.badge}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-muted">{useCase.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
