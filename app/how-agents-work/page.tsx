"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const sections = [
  {
    id: "what-is-an-agent",
    title: "What is an AI agent?",
    content: [
      "An AI agent is software that can take actions on its own to complete tasks. Not just answer questions (that's a chatbot). Not just follow a script (that's traditional automation). An agent can read information, make decisions based on rules and context, and execute steps in a workflow without someone clicking buttons.",
      "Think of it this way: a chatbot waits for you to ask it something. An automation runs the same script every time. An agent looks at a situation, decides what needs to happen, and does it. If something unexpected comes up, it can adapt or escalate to a human.",
      "The difference matters because most operational work isn't a single task. It's a series of decisions and actions that depend on context. Agents handle that complexity. Chatbots and basic automations don't.",
    ],
  },
  {
    id: "what-agents-can-do",
    title: "What can agents actually do today?",
    content: [
      "Let's be honest about where things stand. AI agents are very good at certain types of work and not yet ready for others.",
    ],
    capabilities: {
      strong: [
        "Processing and routing documents, emails, and forms",
        "Data entry, extraction, and validation across systems",
        "Scheduling, reminders, and follow-up communications",
        "Customer support for common questions and requests",
        "Report generation and data reconciliation",
        "Monitoring systems and flagging anomalies",
      ],
      emerging: [
        "Complex multi-step reasoning across ambiguous situations",
        "Tasks requiring deep domain expertise without clear rules",
        "Creative work requiring original thinking",
        "High-stakes decisions without human oversight",
      ],
    },
    afterContent: [
      "The sweet spot today is work that's repetitive, follows identifiable patterns, and currently requires a human only because existing software can't handle the variability. That's a lot of work in most growing companies.",
    ],
  },
  {
    id: "architecture",
    title: "What does an agent system look like?",
    content: [
      "An agent system isn't a single piece of software. It's a set of components that work together:",
    ],
    architecture: [
      {
        component: "AI Model",
        description:
          "The 'brain' that understands context and makes decisions. This is typically a large language model (like GPT-4 or Claude) fine-tuned or prompted for your specific workflows.",
      },
      {
        component: "Tools & Integrations",
        description:
          "Connections to your existing systems: CRM, email, databases, calendars, file storage. These let the agent read data and take actions in the tools your team already uses.",
      },
      {
        component: "Workflow Logic",
        description:
          "The rules and processes that define how the agent should handle different situations. This is where your operational knowledge gets encoded into the system.",
      },
      {
        component: "Memory & Context",
        description:
          "The agent's ability to remember previous interactions, track ongoing tasks, and maintain context across a workflow. This is what makes agents feel coherent rather than stateless.",
      },
      {
        component: "Monitoring & Guardrails",
        description:
          "Safety checks, performance tracking, and escalation rules. Every agent system needs boundaries and oversight. We build these in from day one.",
      },
    ],
    afterContent: [
      "These components work together so the agent can receive a trigger (like a new email or form submission), understand what needs to happen, take the right actions across your systems, and report back or escalate when needed.",
    ],
  },
  {
    id: "human-in-the-loop",
    title: "How do agents work with your team?",
    content: [
      "The goal isn't to replace your team. It's to give them back the time they're currently spending on work that doesn't require their judgment.",
      "In practice, most agent systems work on a spectrum of autonomy:",
    ],
    levels: [
      {
        level: "Fully Automated",
        description:
          "The agent handles everything. Best for high-volume, low-risk tasks like data entry, status updates, and routine communications.",
      },
      {
        level: "Agent Draft, Human Approve",
        description:
          "The agent does the work and presents it for review. A human approves, edits, or rejects. Good for tasks where accuracy matters but the heavy lifting is in preparation.",
      },
      {
        level: "Human-Triggered",
        description:
          "A team member kicks off the agent when needed. The agent handles the execution. Useful for complex tasks that require human judgment about when to start.",
      },
      {
        level: "Exception Handling",
        description:
          "The agent runs autonomously but escalates unusual cases to a human. This is the most common pattern: the agent handles the 80% that's routine, humans handle the 20% that needs judgment.",
      },
    ],
    afterContent: [
      "We work with your team to determine the right level of autonomy for each workflow. Most companies start closer to the 'human approve' end and move toward more automation as trust builds.",
    ],
  },
  {
    id: "readiness",
    title: "How do you know if your business is ready?",
    content: [
      "You don't need to be a tech company. You don't need a data science team. You don't need perfect data. Here's what you do need:",
    ],
    checklist: [
      {
        item: "Repeatable processes",
        detail:
          "You have workflows that happen regularly and follow identifiable patterns, even if they're not perfectly documented.",
      },
      {
        item: "Digital tools",
        detail:
          "Your team works in software (email, CRM, spreadsheets, project management tools). Agents need digital systems to interact with.",
      },
      {
        item: "Volume pressure",
        detail:
          "You're hitting a point where your team can't keep up with the volume of operational work, or you're about to.",
      },
      {
        item: "Willingness to change",
        detail:
          "Your team is open to working differently. Not a complete overhaul, but willingness to let agents handle parts of their workflow.",
      },
    ],
    afterContent: [
      "If you checked three or four of those, you're ready. The Discovery Assessment will tell you exactly where to start and what to expect.",
    ],
  },
];

export default function HowAgentsWorkPage() {
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
            AI agents, explained without the hype.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted"
            {...fadeUp}
          >
            A straightforward guide to what AI agents are, what they can do
            today, and how they work with your team. No buzzwords. No hand-waving.
          </motion.p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`px-6 py-24 ${
            index % 2 === 1 ? "bg-surface-light" : ""
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <motion.h2
              className="font-display text-2xl font-bold tracking-tight md:text-3xl"
              {...fadeUp}
            >
              {section.title}
            </motion.h2>

            {section.content.map((paragraph, i) => (
              <motion.p
                key={i}
                className="mt-6 text-lg leading-relaxed text-muted"
                {...fadeUp}
              >
                {paragraph}
              </motion.p>
            ))}

            {section.capabilities && (
              <motion.div className="mt-8 grid gap-6 md:grid-cols-2" {...fadeUp}>
                <div className="rounded-lg border border-accent/20 bg-accent/5 p-6">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
                    Strong Today
                  </h3>
                  <ul className="space-y-3">
                    {section.capabilities.strong.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-surface-light p-6">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted">
                    Emerging / Not Yet Reliable
                  </h3>
                  <ul className="space-y-3">
                    {section.capabilities.emerging.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {section.architecture && (
              <motion.div className="mt-8 space-y-4" {...fadeUp}>
                {section.architecture.map((item) => (
                  <div
                    key={item.component}
                    className="rounded-lg border border-border bg-surface-light p-6"
                  >
                    <h3 className="font-display font-bold text-accent">
                      {item.component}
                    </h3>
                    <p className="mt-2 text-muted">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {section.levels && (
              <motion.div className="mt-8 space-y-4" {...fadeUp}>
                {section.levels.map((item) => (
                  <div
                    key={item.level}
                    className="rounded-lg border border-border bg-surface-light p-6"
                  >
                    <h3 className="font-display font-bold">{item.level}</h3>
                    <p className="mt-2 text-muted">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {section.checklist && (
              <motion.div className="mt-8 space-y-4" {...fadeUp}>
                {section.checklist.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-start gap-4 rounded-lg border border-border bg-surface-light p-6"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-accent/30">
                      <div className="h-2 w-2 rounded-sm bg-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold">{item.item}</h3>
                      <p className="mt-1 text-muted">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {section.afterContent?.map((paragraph, i) => (
              <motion.p
                key={i}
                className="mt-6 text-lg leading-relaxed text-muted"
                {...fadeUp}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-surface-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
            {...fadeUp}
          >
            Want to explore what agents could do for your operations?
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted" {...fadeUp}>
            Let&apos;s talk. The AI Operations Assessment maps your workflows and
            shows you exactly where agents create the most value.
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
