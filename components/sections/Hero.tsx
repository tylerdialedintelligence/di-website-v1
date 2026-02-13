"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

function NetworkBackground() {
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    { cx: 120, cy: 100, r: 3 },
    { cx: 300, cy: 180, r: 4 },
    { cx: 500, cy: 80, r: 3 },
    { cx: 700, cy: 200, r: 5 },
    { cx: 900, cy: 120, r: 3 },
    { cx: 1100, cy: 220, r: 4 },
    { cx: 200, cy: 350, r: 4 },
    { cx: 450, cy: 300, r: 3 },
    { cx: 650, cy: 400, r: 5 },
    { cx: 850, cy: 320, r: 3 },
    { cx: 1050, cy: 380, r: 4 },
    { cx: 150, cy: 500, r: 3 },
    { cx: 380, cy: 480, r: 4 },
    { cx: 600, cy: 550, r: 3 },
    { cx: 800, cy: 500, r: 5 },
    { cx: 1000, cy: 520, r: 3 },
  ];

  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [0, 6], [1, 7], [2, 7], [3, 8], [4, 9], [5, 10],
    [6, 7], [7, 8], [8, 9], [9, 10],
    [6, 11], [7, 12], [8, 13], [9, 14], [10, 15],
    [11, 12], [12, 13], [13, 14], [14, 15],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map(([from, to], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[from].cx}
            y1={nodes[from].cy}
            x2={nodes[to].cx}
            y2={nodes[to].cy}
            stroke="currentColor"
            className="text-border-light"
            strokeWidth={1}
            initial={{ opacity: 0.05 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.08 }
                : {
                    opacity: [0.05, 0.15, 0.05],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }
            }
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="currentColor"
            className="text-accent"
            initial={{ opacity: 0.1 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.15 }
                : {
                    opacity: [0.1, 0.3, 0.1],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 3 + (i % 4),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <NetworkBackground />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="max-w-4xl font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We build AI agent systems that run your operations.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Dialed Intelligence designs, deploys, and manages AI agents for
          growing companies. Your team focuses on decisions. The agents handle
          the rest.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-accent px-8 py-4 font-display text-base font-semibold text-background transition-colors hover:bg-accent-light"
          >
            Book Your AI Operations Assessment
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-4 font-display text-base font-medium text-muted transition-colors hover:text-foreground"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, 8, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div className="h-8 w-px bg-muted/40" />
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted/60"
          >
            <path
              d="M1 1L8 8L15 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
