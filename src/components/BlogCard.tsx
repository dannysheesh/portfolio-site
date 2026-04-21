import Link from "next/link";
import type { BlogPostMeta } from "@/lib/types";

interface BlogCardProps {
  post: BlogPostMeta;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="capy-card" style={{ cursor: "pointer" }}>
        <div
          className="cat"
          style={{ color: "var(--accent-3)", marginBottom: 8 }}
        >
          ✦ {formatDate(post.date)}
        </div>
        <h3 style={{ fontSize: 13, marginBottom: 10 }}>{post.title}</h3>
        <p>{post.description}</p>
        <div
          style={{
            marginTop: 14,
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 15,
            color: "var(--accent)",
          }}
        >
          &gt; read_more.sh
        </div>
      </div>
    </Link>
  );
}
