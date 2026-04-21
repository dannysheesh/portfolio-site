import type { BlogPostMeta } from "@/lib/types";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
        marginTop: 32,
      }}
    >
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
