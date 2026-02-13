interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const alignStyles: Record<NonNullable<SectionHeadingProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={[alignStyles[align], className].filter(Boolean).join(" ")}>
      {label && (
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
