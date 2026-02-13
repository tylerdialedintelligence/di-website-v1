import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three phases to operational AI: Discover where agents create value, Build custom systems, and Run them on an ongoing basis.",
  openGraph: {
    title: "Services | Dialed Intelligence",
    description:
      "Three phases to operational AI: Discover, Build, and Run AI agent systems for your business.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
