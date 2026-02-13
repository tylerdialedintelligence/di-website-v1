"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-background font-semibold hover:bg-accent-light",
  secondary:
    "bg-transparent border border-accent text-accent hover:bg-accent hover:text-background",
  ghost: "bg-transparent text-muted hover:text-foreground",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-lg font-body transition-colors duration-200 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
