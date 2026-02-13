export const siteConfig = {
  name: "Dialed Intelligence",
  description:
    "Dialed Intelligence designs, deploys, and manages AI agent systems for growing companies. Your team focuses on decisions. The agents handle the rest.",
  url: "https://dialedintelligence.com",
  founder: "Tyler Dial",
  email: "hello@dialedintelligence.com",
  social: {
    linkedin: "https://linkedin.com/company/dialedintelligence",
    twitter: "https://x.com/dialedintel",
  },
} as const;

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "How Agents Work", href: "/how-agents-work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Discover", href: "/services#discover" },
    { label: "Build", href: "/services#build" },
    { label: "Run", href: "/services#run" },
  ],
  resources: [
    { label: "How Agents Work", href: "/how-agents-work" },
  ],
} as const;
