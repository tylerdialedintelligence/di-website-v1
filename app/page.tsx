import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCasePreview from "@/components/sections/UseCasePreview";
import Differentiator from "@/components/sections/Differentiator";
import AboutPreview from "@/components/sections/AboutPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Dialed Intelligence | AI Agent Systems for Growing Companies",
  description:
    "Dialed Intelligence designs, deploys, and manages AI agent systems for growing companies. Your team focuses on decisions. The agents handle the rest.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <UseCasePreview />
      <Differentiator />
      <AboutPreview />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}
