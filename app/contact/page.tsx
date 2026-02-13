"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1,000 employees",
  "1,000+ employees",
];

const steps = [
  {
    number: "01",
    title: "We talk",
    description:
      "A 30-minute conversation about your operations, your challenges, and where you think AI agents might help.",
  },
  {
    number: "02",
    title: "We assess",
    description:
      "We dig into your workflows, map the processes, and identify the highest-value opportunities for AI agents.",
  },
  {
    number: "03",
    title: "You get a plan",
    description:
      "A concrete implementation plan with specific recommendations, expected outcomes, and a clear path forward. No obligation beyond the assessment.",
  },
];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
      };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form submission will be wired to Formspree, serverless function, or webhook
    setSubmitted(true);
  }

  return (
    <main>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            {...fadeUp}
          >
            Let&apos;s figure out what AI agents can do for your business.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted"
            {...fadeUp}
          >
            Whether you're ready to book an assessment or just want to have a
            conversation, we're here.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Book Assessment */}
          <motion.div {...fadeUp}>
            <div className="rounded-lg border border-border bg-surface-light p-8">
              <h2 className="font-display text-2xl font-bold">
                Book an Assessment
              </h2>
              <p className="mt-3 text-muted">
                The AI Operations Assessment is a focused engagement where we
                map your workflows, identify opportunities, and deliver a
                concrete plan.
              </p>
              <div className="mt-6 rounded-lg border border-border bg-surface-lighter p-8 text-center">
                <p className="text-sm text-muted">
                  Calendar booking widget placeholder
                </p>
                <p className="mt-2 text-xs text-muted">
                  Connect Cal.com or Calendly here
                </p>
                {/* Replace this div with Cal.com embed:
                    <Cal calLink="your-link" />
                    or Calendly inline widget */}
              </div>
            </div>
          </motion.div>

          {/* General Inquiry Form */}
          <motion.div {...fadeUp}>
            <div className="rounded-lg border border-border bg-surface-light p-8">
              <h2 className="font-display text-2xl font-bold">
                Send a Message
              </h2>
              <p className="mt-3 text-muted">
                Have a question or want to talk before booking? Drop us a line.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-8 text-center">
                  <p className="font-display text-xl font-bold text-accent">
                    Message sent.
                  </p>
                  <p className="mt-2 text-muted">
                    We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface-lighter px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface-lighter px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface-lighter px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      className="mt-1.5 w-full rounded-lg border border-border bg-surface-lighter px-4 py-3 text-foreground focus:border-accent focus:outline-none"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface-lighter px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="Tell us about your operations and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-accent px-6 py-3 font-display font-semibold text-background transition-colors hover:bg-accent-light"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="text-center font-display text-2xl font-bold tracking-tight md:text-3xl"
            {...fadeUp}
          >
            What happens after you book
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <motion.div key={step.number} {...fadeUp}>
                <span className="font-display text-sm font-bold tracking-wider text-accent">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
