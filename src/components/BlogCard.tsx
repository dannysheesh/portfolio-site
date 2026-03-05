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
    <Link href={`/blog/${post.slug}`} className="no-underline text-inherit">
      <div className="bg-gray-950 border border-gray-800 rounded-[14px] overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-600 hover:-translate-y-0.5">
        <div className="h-[200px] bg-gray-900 flex items-center justify-center border-b border-gray-800 text-[2rem] opacity-20">
          &#x2588;
        </div>
        <div className="p-7">
          <div className="text-[0.7rem] text-gray-500 uppercase tracking-[0.06em] mb-3 font-medium">
            {formatDate(post.date)}
          </div>
          <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] leading-[1.4] mb-2 text-gray-100">
            {post.title}
          </h3>
          <p className="text-[0.85rem] text-gray-400 leading-[1.6] font-light">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
