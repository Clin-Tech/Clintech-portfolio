import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const blogPosts = [
  {
    slug: "google-maps-duplicate-loading-bug",
    title: "Fixing Google Maps API Duplicate Loading Conflict",
    date: "April 15, 2025",
    excerpt:
      "I ran into an annoying bug where loading the Google Maps script twice broke autocomplete. Here’s what went wrong and how I fixed it.",
  },
  // Add more posts...
];

export default function BlogPage() {
  return (
    <div className="w-full relative h-[100vh]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Blog & Technical Articles</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer border border-gray-200">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2 text-gray-700">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
}
