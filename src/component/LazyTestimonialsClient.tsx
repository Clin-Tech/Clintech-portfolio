"use client";

import dynamic from "next/dynamic";

const LazyTestimonialCarousel = dynamic(() => import("./Testimonials"), {
  loading: () => (
    <p className="text-center text-gray-500 py-10">Loading testimonials...</p>
  ),
  ssr: false,
});

export default function LazyTestimonialsClient() {
  return <LazyTestimonialCarousel />;
}
