"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
      };

  return (
    <main>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-start gap-12 md:grid-cols-5">
            <motion.div className="md:col-span-2" {...fadeUp}>
              <div className="flex aspect-[3/4] items-center justify-center rounded-lg bg-surface-lighter">
                <span className="font-display text-5xl font-bold text-accent/40">
                  TD
                </span>
              </div>
            </motion.div>

            <motion.div className="md:col-span-3" {...fadeUp}>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Tyler Dial
              </h1>
              <p className="mt-2 text-xl text-muted">
                Founder, Dialed Intelligence
              </p>

              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  I started Dialed Intelligence after seeing the same pattern
                  play out at company after company: smart, capable teams buried
                  in operational work that software should be handling.
                </p>
                <p>
                  Not because the people weren't good enough. Because the tools
                  they had couldn't handle the variability and judgment that
                  real operational work requires. Spreadsheets, basic
                  automations, and off-the-shelf software only get you so far.
                </p>
                <p>
                  AI agents change that equation. For the first time, we can
                  build software that handles work requiring context, pattern
                  recognition, and decision-making within defined boundaries.
                  That's not a small improvement. It's a fundamental shift in
                  what's possible for growing companies.
                </p>
                <p>
                  My background is in building AI systems and working with
                  companies on operational challenges. I've seen what works, what
                  doesn't, and where most AI initiatives go wrong. The answer is
                  almost always the same: they focus on the technology and ignore
                  the operations.
                </p>
                <p>
                  Dialed Intelligence exists to fix that. We start with your
                  operations, figure out where agents create real value, and
                  build systems that actually work in your environment. Then we
                  stick around to make sure they keep working.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
            {...fadeUp}
          >
            What We Believe
          </motion.h2>

          <div className="mt-12 space-y-12">
            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl font-bold">
                AI is an operations play, not a technology play.
              </h3>
              <p className="mt-3 text-lg text-muted">
                The companies that get the most value from AI don't start with
                the technology. They start with their workflows and work backward
                to the right solution. We do the same.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl font-bold">
                Working systems beat slide decks.
              </h3>
              <p className="mt-3 text-lg text-muted">
                We don't sell strategies or roadmaps. We build systems that run
                in your environment and produce measurable results. If it
                doesn't work, we haven't done our job.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl font-bold">
                Partnership over project work.
              </h3>
              <p className="mt-3 text-lg text-muted">
                AI agent systems evolve. Your operations change, new
                opportunities emerge, and systems need tuning. We stay with our
                clients because that's where the real value compounds.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl font-bold">
                Honesty about what AI can and can't do.
              </h3>
              <p className="mt-3 text-lg text-muted">
                We'll tell you when AI agents aren't the right solution. We'll
                be direct about limitations, risks, and timelines. You'll never
                hear us promise something we can't deliver.
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-display text-xl font-bold">
                Small companies deserve enterprise-grade AI.
              </h3>
              <p className="mt-3 text-lg text-muted">
                The biggest companies in the world are building AI agent systems.
                Growing companies with 10 to 1,000 employees deserve the same
                capability. That's who we're built for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
            {...fadeUp}
          >
            Want to work together?
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted" {...fadeUp}>
            Let's start with a conversation about your operations and where AI
            agents might fit.
          </motion.p>
          <motion.div className="mt-8" {...fadeUp}>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent px-8 py-4 font-display font-semibold text-background transition-colors hover:bg-accent-light"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
