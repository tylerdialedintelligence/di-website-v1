import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mb-6 mt-12 font-display text-4xl font-bold tracking-tight text-foreground first:mt-0"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mb-4 mt-10 font-display text-2xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mb-3 mt-8 font-display text-xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-5 leading-relaxed text-muted" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-5 ml-5 list-disc space-y-2 text-muted" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-5 ml-5 list-decimal space-y-2 text-muted" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-6 italic text-muted"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-surface-lighter px-1.5 py-0.5 font-mono text-sm text-accent"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-surface-light p-4 font-mono text-sm"
      {...props}
    />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-accent underline underline-offset-4 transition-colors hover:text-accent-light"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
};
