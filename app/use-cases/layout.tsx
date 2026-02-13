import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "See how AI agent systems transform operations across industries: professional services, e-commerce, SaaS, and financial services.",
  openGraph: {
    title: "Use Cases | Dialed Intelligence",
    description:
      "Real examples of AI agents transforming operations across industries.",
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
