import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
    },
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);

  const formattedDate = new Date(meta.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "56px 32px 60px",
        }}
      >
        <Link
          href="/blog"
          className="btn"
          style={{ marginBottom: 32, display: "inline-flex" }}
        >
          &lt; all_posts
        </Link>

        <header style={{ margin: "28px 0 28px" }}>
          <div
            className="eyebrow"
            style={{ marginBottom: 18 }}
          >
            {formattedDate} · {meta.readTime} READ
          </div>
          <h1
            className="pixel"
            style={{
              fontSize: "clamp(28px, 4.5vw, 44px)",
              lineHeight: 1.1,
              marginBottom: 14,
              color: "var(--ink)",
            }}
          >
            {meta.title}
          </h1>
          <p
            style={{
              color: "var(--ink-soft)",
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            {meta.description}
          </p>
        </header>

        <hr className="hr-dot" style={{ margin: "24px 0 28px" }} />

        <div className="prose-capy">
          <MDXRemote source={content} />
        </div>
      </article>
      <Footer />
    </>
  );
}
