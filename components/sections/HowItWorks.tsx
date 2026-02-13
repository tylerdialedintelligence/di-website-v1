"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your workflows, find the bottlenecks, and identify where AI agents create the most value. You get a concrete implementation plan, not a slide deck.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and deploy custom AI agent systems that integrate with your existing tools and processes. Real systems, tested and running in your environment.",
  },
  {
    number: "03",
    title: "Run",
    description:
      "We manage and optimize your agent systems on an ongoing basis. New capabilities, performance tuning, and a team that knows your operations inside out.",
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          How We Work
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="rounded-lg border border-border bg-surface-light p-8"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="font-display text-sm font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-8 py-4 font-display text-base font-semibold text-background transition-colors hover:bg-accent-light"
          >
            Start with a Discovery Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
