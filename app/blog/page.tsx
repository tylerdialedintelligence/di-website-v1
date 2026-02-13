import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog | Dialed Intelligence",
  description:
    "Practical thinking on AI agents, operations, and building systems that actually work. No hype, no buzzwords.",
  openGraph: {
    title: "Blog | Dialed Intelligence",
    description:
      "Practical thinking on AI agents, operations, and building systems that actually work.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-16 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Latest Thinking
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Practical insights on AI agents, operations, and what it actually
            takes to make AI work in your business.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-muted">
              Posts are on the way. Check back soon.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
