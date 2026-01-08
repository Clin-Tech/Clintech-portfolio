import GoogleMapsBug from "../app/blog/_posts/google-maps-duplicate-loading-bug";
import BuildingMultiUserAppsWithRLS from "../app/blog/_posts/building-multi-user-apps-with-rls";

export const blogPosts = [
  {
    slug: "building-multi-user-apps-with-rls",
    title: "Building Multi-User Apps with Supabase RLS",
    date: "2026-01-08",
    minutes: 4,
    excerpt:
      "RLS turns your DB into the real security gate. Here’s how I use it in ApplyCraft and the mistakes to avoid.",
    tags: ["Supabase", "Postgres", "Security", "RLS"],
    Component: BuildingMultiUserAppsWithRLS,
  },
  {
    slug: "google-maps-duplicate-loading-bug",
    title: "Fixing Google Maps API Duplicate Loading Conflict",
    date: "2025-04-15",
    minutes: 4,
    excerpt:
      "Loading Google Maps twice broke autocomplete due to script collisions. Here’s the root cause and fix.",
    tags: ["Next.js", "Google Maps", "Bugfix"],
    Component: GoogleMapsBug,
  },
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
export const getAllPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
