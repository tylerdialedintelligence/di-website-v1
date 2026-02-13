"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  padding = "md",
  className = "",
}: CardProps) {
  return (
    <motion.div
      className={[
        "bg-surface-light border border-border rounded-xl transition-colors duration-300 hover:border-border-light",
        paddingStyles[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </motion.div>
  );
}
