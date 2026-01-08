import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { getAllPosts } from "../../lib/blog";

export const metadata = {
  title: "Blog & Technical Articles | ClinTech",
  description:
    "Notes on Next.js, React Native, debugging, and shipping real features.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Blog & Technical Articles</h1>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold group-hover:text-[#147efb] transition">
                {post.title}
              </h2>
              <div className="mt-1 text-sm text-gray-500">
                {post.date} • {post.minutes} min read
              </div>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
              {post.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-gray-100 border border-gray-200 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
