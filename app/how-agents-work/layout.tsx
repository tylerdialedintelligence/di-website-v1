import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Agents Work",
  description:
    "A straightforward guide to AI agents: what they are, what they can do, how they work with your team, and how to know if your business is ready.",
  openGraph: {
    title: "How AI Agents Work | Dialed Intelligence",
    description:
      "AI agents explained without the hype. What they are, what they can do, and how they fit in your operations.",
  },
};

export default function HowAgentsWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
