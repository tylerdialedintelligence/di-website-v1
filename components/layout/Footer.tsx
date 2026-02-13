"use client";

import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 -- Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-tight text-foreground"
            >
              Dialed Intelligence
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              AI agent systems designed, deployed, and managed for growing
              companies. Your team focuses on decisions&mdash;the agents handle
              the rest.
            </p>
          </div>

          {/* Column 2 -- Company */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 -- Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 -- Resources */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter row */}
        <div className="mt-14 border-t border-border pt-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Stay in the loop
              </h3>
              <p className="mt-1 text-sm text-muted">
                Get our latest thinking on AI operations. No spam.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md gap-3 md:w-auto"
            >
              <input
                type="email"
                placeholder="you@company.com"
                required
                className="flex-1 rounded border border-border bg-surface-light px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded bg-accent px-5 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Dialed Intelligence. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors duration-200 hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-muted transition-colors duration-200 hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
