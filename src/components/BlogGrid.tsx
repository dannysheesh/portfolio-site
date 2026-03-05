import type { BlogPostMeta } from "@/lib/types";
import ScrollReveal from "./ScrollReveal";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {posts.map((post, i) => (
        <ScrollReveal key={post.slug} delay={i < 4 ? i : 0}>
          <BlogCard post={post} />
        </ScrollReveal>
      ))}
    </div>
  );
}
