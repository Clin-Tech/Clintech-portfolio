import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ClinTech`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default function Article({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const Content = post.Component;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <article className="flex-1 max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • {post.minutes} min read
        </p>
        <Content />
      </article>
      <Footer />
    </div>
  );
}
