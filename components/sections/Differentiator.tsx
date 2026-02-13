"use client";

import { motion, useReducedMotion } from "framer-motion";

const contrasts = [
  { theirs: "Strategy decks", ours: "Working systems" },
  { theirs: "One-time projects", ours: "Ongoing partnership" },
  { theirs: "Generic AI advice", ours: "Custom agent systems" },
];

export default function Differentiator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-light px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          We don&rsquo;t sell AI. We sell operational capacity.
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Most AI consultancies hand you a strategy deck and wish you luck. We
          build the systems, deploy them in your environment, and stay on to
          make sure they keep working. We&rsquo;re your AI operations team, not
          a vendor.
        </motion.p>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-3">
          {contrasts.map((item, index) => (
            <motion.div
              key={item.ours}
              className="rounded-lg border border-border bg-surface p-6 text-center"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <p className="text-sm text-muted line-through">{item.theirs}</p>
              <p className="mt-2 font-display text-base font-semibold text-accent">
                {item.ours}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
