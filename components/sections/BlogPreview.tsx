"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const posts = [
  {
    title: "Why Most AI Pilots Fail (And What to Do Instead)",
    description:
      "The pattern behind failed AI initiatives has nothing to do with the technology.",
    date: "Jan 2025",
    readingTime: "5 min read",
  },
  {
    title: "The Operator\u2019s Guide to AI Agents",
    description:
      "What AI agents actually are, what they can do today, and how to think about them for your business.",
    date: "Jan 2025",
    readingTime: "8 min read",
  },
  {
    title: "Build vs. Buy: AI Agent Systems for Mid-Market Companies",
    description:
      "When off-the-shelf tools work, when they don\u2019t, and how to decide.",
    date: "Feb 2025",
    readingTime: "6 min read",
  },
];

export default function BlogPreview() {
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
          Latest Thinking
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="group rounded-lg border border-border bg-surface-light p-6 transition-colors hover:border-accent/30">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span>{post.date}</span>
                  <span className="text-border-light">&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{post.description}</p>
              </div>
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
            href="/blog"
            className="inline-flex items-center text-accent transition-colors hover:text-accent-light"
          >
            Read More Insights &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
