import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostMeta } from "./types";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      description: data.description,
    } as BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      description: data.description,
    } as BlogPostMeta,
    content,
  };
}
