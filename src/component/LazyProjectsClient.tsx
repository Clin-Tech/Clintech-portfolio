"use client";

import dynamic from "next/dynamic";

const LazyProject = dynamic(() => import("./Project"), {
  loading: () => (
    <p className="text-center text-gray-500 py-10">Loading projects...</p>
  ),
  ssr: false,
});

export default function LazyProjectsClient() {
  return <LazyProject />;
}
