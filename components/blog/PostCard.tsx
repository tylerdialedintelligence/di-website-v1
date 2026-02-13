import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category?: string;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  category,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="h-full rounded-lg border border-border bg-surface-light p-6 transition-colors duration-300 group-hover:border-accent/30">
        <div className="flex items-center gap-3 text-sm text-muted">
          {category && (
            <span className="rounded-full border border-accent/30 px-3 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
              {category}
            </span>
          )}
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </time>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 text-muted leading-relaxed">{excerpt}</p>
      </article>
    </Link>
  );
}
