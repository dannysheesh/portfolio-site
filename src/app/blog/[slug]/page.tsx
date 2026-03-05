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
      <article className="max-w-[720px] mx-auto px-8 pt-32 pb-20">
        <Link
          href="/blog"
          className="text-blue no-underline text-sm font-normal inline-flex items-center gap-[0.3rem] mb-12 transition-all duration-250 hover:gap-[0.55rem]"
        >
          <span>&lsaquo;</span> All posts
        </Link>

        <header className="mb-12">
          <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.06em] mb-4">
            {formattedDate} &middot; {meta.readTime} read
          </p>
          <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.035em] leading-[1.15] mb-4">
            {meta.title}
          </h1>
          <p className="text-[1.1rem] text-gray-400 font-light leading-[1.6]">
            {meta.description}
          </p>
        </header>

        <div className="prose prose-invert prose-gray max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-p:text-gray-300 prose-p:font-light prose-p:leading-[1.75] prose-a:text-blue prose-strong:text-gray-100 prose-code:text-gray-200 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-li:text-gray-300 prose-li:font-light">
          <MDXRemote source={content} />
        </div>
      </article>

      <div className="w-full h-px bg-gray-800" />
      <Footer />
    </>
  );
}
