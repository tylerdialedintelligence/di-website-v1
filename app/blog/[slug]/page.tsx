import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/MDXComponents";
import PostLayout from "@/components/blog/PostLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Dialed Intelligence" };
  }

  return {
    title: `${post.title} | Dialed Intelligence`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Tyler Dial"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <PostLayout
        title={post.title}
        date={post.date}
        readingTime={post.readingTime}
        category={post.category}
        relatedPosts={relatedPosts}
      >
        <MDXRemote source={post.content} components={mdxComponents} />
      </PostLayout>
    </main>
  );
}
