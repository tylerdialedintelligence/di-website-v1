import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Tyler Dial, founder of Dialed Intelligence. Learn about our approach to AI operations and why we build agent systems for growing companies.",
  openGraph: {
    title: "About | Dialed Intelligence",
    description:
      "Meet Tyler Dial and learn about Dialed Intelligence's approach to AI operations.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
