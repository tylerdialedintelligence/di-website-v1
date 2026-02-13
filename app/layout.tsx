import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dialed Intelligence | AI Agent Systems for Growing Companies",
    template: "%s | Dialed Intelligence",
  },
  description:
    "Dialed Intelligence designs, deploys, and manages AI agent systems for growing companies. Your team focuses on decisions. The agents handle the rest.",
  metadataBase: new URL("https://dialedintelligence.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dialedintelligence.com",
    siteName: "Dialed Intelligence",
    title: "Dialed Intelligence | AI Agent Systems for Growing Companies",
    description:
      "We design, deploy, and manage AI agent systems for growing companies. Your team focuses on decisions. The agents handle the rest.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dialed Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dialed Intelligence | AI Agent Systems for Growing Companies",
    description:
      "We design, deploy, and manage AI agent systems for growing companies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
