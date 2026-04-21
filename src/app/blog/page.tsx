import { getAllPosts } from "@/lib/mdx";
import BlogGrid from "@/components/BlogGrid";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical deep-dives on AI systems, ML pipelines, and full-stack development.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className="sec capy-container" style={{ paddingTop: 64 }}>
        <div className="eyebrow">WRITING.LOG</div>
        <h2>TECHNICAL DEEP-DIVES.</h2>
        <p className="lede">How and why I built things.</p>
        <BlogGrid posts={posts} />
      </section>
      <Footer />
    </>
  );
}
