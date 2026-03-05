import { getAllPosts } from "@/lib/mdx";
import BlogGrid from "@/components/BlogGrid";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical deep-dives on AI systems, ML pipelines, and full-stack development.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className="max-w-[980px] mx-auto px-8 pt-32 pb-32">
        <ScrollReveal>
          <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-4">
            Writing
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-2">
            Technical deep-dives.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-[1.1rem] text-gray-400 font-light">
            How and why I built things.
          </p>
        </ScrollReveal>

        <BlogGrid posts={posts} />
      </section>

      <Footer />
    </>
  );
}
