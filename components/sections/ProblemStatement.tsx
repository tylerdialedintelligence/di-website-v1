"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ProblemStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Your team is drowning in work that shouldn&rsquo;t require a human.
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Every growing company hits the same wall. Your best people spend their
          days on repetitive, process-heavy work instead of the strategic
          thinking you hired them for. Hiring more people doesn&rsquo;t scale.
          Spreadsheets and basic automations only go so far. The next step
          isn&rsquo;t more headcount. It&rsquo;s AI agents that actually do the
          work.
        </motion.p>
      </div>
    </section>
  );
}
