import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface PostLayoutProps {
  title: string;
  date: string;
  readingTime: string;
  category?: string;
  children: React.ReactNode;
  relatedPosts?: BlogPostMeta[];
}

export default function PostLayout({
  title,
  date,
  readingTime,
  category,
  children,
  relatedPosts,
}: PostLayoutProps) {
  return (
    <article className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-muted">
            {category && (
              <span className="rounded-full border border-accent/30 px-3 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
                {category}
              </span>
            )}
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>{readingTime}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-lighter font-display text-sm font-bold text-accent">
              TD
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Tyler Dial</p>
              <p className="text-sm text-muted">Founder, Dialed Intelligence</p>
            </div>
          </div>
        </header>

        <div className="prose-custom">{children}</div>

        <footer className="mt-16 border-t border-border pt-12">
          <div className="rounded-lg border border-border bg-surface-light p-8 text-center">
            <p className="font-display text-xl font-bold">
              Want help implementing this?
            </p>
            <p className="mt-2 text-muted">
              We build AI agent systems that put these ideas into practice.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-light"
            >
              Talk to Us
            </Link>
          </div>

          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold">Related Posts</h2>
              <div className="mt-6 grid gap-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-lg border border-border p-4 transition-colors hover:border-accent/30"
                  >
                    <p className="font-display font-bold transition-colors group-hover:text-accent">
                      {post.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}
