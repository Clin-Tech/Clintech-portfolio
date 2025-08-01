import About from "../component/About";
import Footer from "../component/Footer";
import HomePage from "../component/HomePage";
import LazyProjectsClient from "../component/LazyProjectsClient";
import LazyTestimonialsClient from "../component/LazyTestimonialsClient";
import Navbar from "../component/Navbar";
import Project from "../component/Project";
import TestimonialCarousel from "../component/Testimonials";
import Contact from "./contact/page";
import dynamic from "next/dynamic";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <HomePage />
      <About />
      <LazyProjectsClient />
      <LazyTestimonialsClient />
      <Contact />
      <Footer />
    </div>
  );
}
