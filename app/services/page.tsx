"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    tagline: "Find the highest-value opportunities for AI agents in your operations.",
    description:
      "We map your workflows end-to-end, identify bottlenecks and repetitive processes, and build a concrete implementation plan that shows exactly where AI agents will create the most value.",
    deliverables: [
      "Complete workflow mapping and process documentation",
      "AI readiness assessment for each workflow",
      "Prioritized implementation roadmap",
      "ROI projections for top opportunities",
      "Technical architecture recommendations",
    ],
    timeline: "2-3 weeks",
    forWhom:
      "Companies that know AI could help but aren't sure where to start. If your team is spending time on work that follows clear rules and doesn't need creative judgment, you're ready.",
  },
  {
    id: "build",
    number: "02",
    title: "Build",
    tagline: "Design and deploy custom AI agent systems in your environment.",
    description:
      "We take the implementation plan from Discovery and turn it into working systems. Custom AI agents that integrate with your existing tools, follow your processes, and operate in your environment. Not a prototype. Production-ready systems.",
    deliverables: [
      "Custom AI agent development and configuration",
      "Integration with your existing tools and systems",
      "Testing and validation in your environment",
      "Team training and documentation",
      "Deployment and go-live support",
    ],
    timeline: "4-8 weeks per agent system",
    forWhom:
      "Companies with a clear understanding of where AI agents fit (from Discovery or their own analysis) and existing workflows that need automation.",
  },
  {
    id: "run",
    number: "03",
    title: "Run",
    tagline: "Ongoing management and optimization of your AI agent systems.",
    description:
      "AI agents aren't set-and-forget. We manage your systems on an ongoing basis, handling performance tuning, capability expansion, and integration updates. Think of us as your AI operations team, not a vendor you hear from quarterly.",
    deliverables: [
      "Continuous performance monitoring and optimization",
      "New capability development as needs evolve",
      "Integration maintenance and updates",
      "Monthly performance reporting",
      "Priority support and troubleshooting",
    ],
    timeline: "Ongoing monthly engagement",
    forWhom:
      "Companies running AI agent systems that want expert management without building an internal AI ops team. Most Build clients move into Run.",
  },
];

export default function ServicesPage() {
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
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            {...fadeUp}
          >
            Three phases. One goal.
            <br />
            <span className="text-muted">
              Operations that scale without scaling cost.
            </span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted"
            {...fadeUp}
          >
            Every engagement starts with understanding your operations. From
            there, we build and manage AI agent systems that do the work your
            team shouldn't have to.
          </motion.p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`px-6 py-24 ${
            index % 2 === 1 ? "bg-surface-light" : ""
          }`}
        >
          <div className="mx-auto max-w-4xl">
            <motion.div {...fadeUp}>
              <span className="font-display text-sm font-bold tracking-wider text-accent">
                {service.number}
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-2 text-xl text-muted">{service.tagline}</p>
            </motion.div>

            <motion.p
              className="mt-8 text-lg leading-relaxed text-muted"
              {...fadeUp}
            >
              {service.description}
            </motion.p>

            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <motion.div {...fadeUp}>
                <h3 className="font-display text-lg font-bold">
                  What&apos;s Included
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="space-y-8" {...fadeUp}>
                <div>
                  <h3 className="font-display text-lg font-bold">Timeline</h3>
                  <p className="mt-2 text-muted">{service.timeline}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">
                    Who This Is For
                  </h3>
                  <p className="mt-2 text-muted">{service.forWhom}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
            {...fadeUp}
          >
            Not sure where to start?
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted" {...fadeUp}>
            Most clients start with a Discovery Assessment. It gives you a clear
            picture of where AI agents fit in your operations, with no commitment
            beyond the assessment.
          </motion.p>
          <motion.div className="mt-8" {...fadeUp}>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent px-8 py-4 font-display font-semibold text-background transition-colors hover:bg-accent-light"
            >
              Book a Discovery Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
