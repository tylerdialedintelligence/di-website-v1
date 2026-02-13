"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const useCases = [
  {
    industry: "Professional Services",
    problem:
      "Your team spends more time on intake processing, scheduling, and client communications than on actual client work. As you grow, every new client adds more operational overhead. You've hired coordinators and admin staff, but the backlog keeps growing.",
    solution:
      "AI agents handle intake forms, schedule appointments based on team availability, send client updates, and flag exceptions that need human attention. Your team focuses on delivering great work instead of managing logistics.",
    results: [
      "3x client volume with the same ops headcount",
      "Intake processing time reduced from 2 hours to 15 minutes",
      "Zero missed follow-ups or scheduling conflicts",
    ],
    before: [
      "Manual intake form review and data entry",
      "Back-and-forth emails to schedule appointments",
      "Weekly status update emails drafted by hand",
      "Spreadsheet tracking for client progress",
    ],
    after: [
      "Agents process and validate intake automatically",
      "Calendar-aware scheduling with instant confirmation",
      "Automated status updates triggered by milestones",
      "Real-time dashboard with agent-maintained data",
    ],
  },
  {
    industry: "E-commerce / DTC",
    problem:
      "Your support team is overwhelmed with repetitive Tier 1 tickets: order status, return requests, shipping updates, product questions. Your best support people spend 80% of their time on questions that have straightforward answers.",
    solution:
      "AI agents handle Tier 1 support across email, chat, and social. They access your order management system, process returns, provide tracking updates, and escalate complex issues to human agents with full context.",
    results: [
      "70% reduction in average resolution time",
      "85% of Tier 1 tickets resolved without human intervention",
      "Customer satisfaction scores maintained or improved",
    ],
    before: [
      "Human agents manually look up every order",
      "Copy-paste responses for common questions",
      "Return requests processed manually in 24-48 hours",
      "Peak season requires temporary hiring",
    ],
    after: [
      "Instant order lookup and status response",
      "Contextual, personalized responses at scale",
      "Returns initiated and processed in minutes",
      "Handles volume spikes without additional staff",
    ],
  },
  {
    industry: "SaaS Operations",
    problem:
      "Your finance and ops teams spend the first week of every month on reporting: pulling data from multiple systems, reconciling numbers, building spreadsheets, and flagging anomalies. By the time reports are ready, the data is already stale.",
    solution:
      "AI agents pull data from your systems automatically, reconcile across sources, generate reports, and flag anomalies in real-time. Your finance team reviews and analyzes instead of building and formatting.",
    results: [
      "Monthly reporting reduced from 3 days to 3 hours",
      "Real-time anomaly detection instead of monthly review",
      "Zero manual data entry errors",
    ],
    before: [
      "Manual data export from 5+ systems",
      "Spreadsheet-based reconciliation",
      "3 days of report building per month",
      "Anomalies caught weeks after they occur",
    ],
    after: [
      "Automated data collection and normalization",
      "Agent-driven reconciliation with exception flagging",
      "Reports generated and delivered automatically",
      "Real-time alerts for unusual patterns",
    ],
  },
  {
    industry: "Financial Services / Insurance",
    problem:
      "Policy processing, claims intake, and compliance checks eat up your team's bandwidth. Every application requires pulling data from multiple sources, cross-referencing rules, and documenting decisions. The process is accurate but painfully slow.",
    solution:
      "AI agents handle document intake, data extraction, rule-based compliance checks, and preliminary assessments. They prepare everything for human review and decision-making, cutting processing time dramatically while maintaining compliance.",
    results: [
      "60% faster application processing",
      "Compliance documentation generated automatically",
      "Reviewers focus on judgment calls, not data gathering",
    ],
    before: [
      "Manual document review and data extraction",
      "Checklist-based compliance verification",
      "Hours spent gathering information before review",
      "Paper-heavy processes with manual filing",
    ],
    after: [
      "Automated document parsing and data extraction",
      "Rule-based compliance checks run instantly",
      "Reviewer receives complete, organized case file",
      "Digital-first process with full audit trail",
    ],
  },
];

export default function UseCasesPage() {
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
            See what AI agents look like in your industry.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted"
            {...fadeUp}
          >
            Real examples of how AI agent systems transform operations across
            industries. These aren't hypotheticals. They're the patterns we see
            working every day.
          </motion.p>
        </div>
      </section>

      {useCases.map((useCase, index) => (
        <section
          key={useCase.industry}
          className={`px-6 py-24 ${
            index % 2 === 1 ? "bg-surface-light" : ""
          }`}
        >
          <div className="mx-auto max-w-5xl">
            <motion.div {...fadeUp}>
              <span className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                {useCase.industry}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
                The Problem
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-muted">
                {useCase.problem}
              </p>
            </motion.div>

            <motion.div className="mt-12" {...fadeUp}>
              <h3 className="font-display text-xl font-bold">The Solution</h3>
              <p className="mt-4 max-w-3xl text-lg text-muted">
                {useCase.solution}
              </p>
            </motion.div>

            <motion.div className="mt-12" {...fadeUp}>
              <h3 className="font-display text-xl font-bold">Results</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                {useCase.results.map((result) => (
                  <div
                    key={result}
                    className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-accent">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-12" {...fadeUp}>
              <h3 className="mb-6 font-display text-xl font-bold">
                Before &amp; After
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface-light p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted">
                    Before
                  </h4>
                  <ul className="space-y-3">
                    {useCase.before.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-accent/20 bg-accent/5 p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
                    After
                  </h4>
                  <ul className="space-y-3">
                    {useCase.after.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="mt-12" {...fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-display font-medium text-accent transition-colors hover:text-accent-light"
              >
                See how this applies to your business
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
            {...fadeUp}
          >
            Don&apos;t see your industry?
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted" {...fadeUp}>
            If your team runs repeatable processes, AI agents can probably help.
            Let&apos;s talk about your specific operations.
          </motion.p>
          <motion.div className="mt-8" {...fadeUp}>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent px-8 py-4 font-display font-semibold text-background transition-colors hover:bg-accent-light"
            >
              Book Your Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
