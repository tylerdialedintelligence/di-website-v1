"use client";

import {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  useId,
} from "react";

type InputAsInput = {
  as?: "input";
  label: string;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

type InputAsTextarea = {
  as: "textarea";
  label: string;
  className?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

type InputProps = InputAsInput | InputAsTextarea;

const fieldStyles =
  "w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted/60 transition-colors duration-200 focus:border-accent focus:outline-none";

export default function Input(props: InputProps) {
  const generatedId = useId();
  const { as = "input", label, className = "", ...rest } = props;
  const fieldId = (rest as { id?: string }).id || generatedId;

  return (
    <div className={["flex flex-col gap-2", className].filter(Boolean).join(" ")}>
      <label
        htmlFor={fieldId}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          id={fieldId}
          aria-label={label}
          className={[fieldStyles, "min-h-[120px] resize-y"].join(" ")}
          {...(rest as Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">)}
        />
      ) : (
        <input
          id={fieldId}
          aria-label={label}
          className={fieldStyles}
          {...(rest as Omit<InputHTMLAttributes<HTMLInputElement>, "className">)}
        />
      )}
    </div>
  );
}
