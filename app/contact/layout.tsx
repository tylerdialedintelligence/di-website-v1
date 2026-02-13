import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an AI Operations Assessment or send us a message. We'll map your workflows and show you where AI agents create the most value.",
  openGraph: {
    title: "Contact | Dialed Intelligence",
    description:
      "Book an AI Operations Assessment or get in touch with Dialed Intelligence.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
