"use client";

/**
 * LAYOUT DECISION
 * ----------------------------------------------------------------------
 * The brief has 5 projects of genuinely different weight: 2 are live
 * client platforms with real, checkable outcomes (enquiries, active
 * users across 7 countries); 3 are self-directed demos that prove range
 * (travel, fashion, events) but have no metric to lean on yet.
 *
 * A uniform grid would flatten that difference and undersell the two
 * projects doing the actual trust-building work. Stacked full-width
 * rows (the pattern already used in `Project.jsx`) would fix that but
 * reads as one long scroll for only 5 items, and it visually clusters
 * "the good ones" together, which is exactly what the brief asks NOT
 * to do (no separate live/demo sections).
 *
 * So: a single asymmetric grid (a "bento") on `lg:grid-cols-3`, where
 * each card's span is set by how much proof it's carrying — the two
 * live client cards take `col-span-2`, the demos take `col-span-1` —
 * and the source order interleaves them (client, demo, demo, client,
 * demo-full-width). The result reads as one continuous set of work,
 * sized by substance rather than sorted by category, closing on a
 * full-width card so the grid doesn't trail off unevenly. On mobile
 * every card collapses to a single column in the same order.
 */

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Shirt, Plane, ShoppingBag, CalendarCheck } from "lucide-react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const projects = [
  {
    name: "Luwa By Design",
    industry: "Fashion / E-commerce",
    type: "client",
    span: "lg:col-span-1",
    image: "/freelance/luwabydesign.png",
    icon: Shirt,
    accent: {
      tint: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-700",
      iconBg: "bg-rose-100",
      iconText: "text-rose-600",
      hoverBorder: "hover:border-rose-300",
    },
    stack: ["Next.js", "Sanity CMS"],
    description:
      "A full outfit and collection storefront with payment integration, checkout, and a booking flow built in, live for less than a week.",
    stat: "53 active users across 7 countries in week one",
    statSource: "Nigeria, US, France, Poland, Netherlands, China, Canada",
    url: "https://www.luwabydesign.com",
  },
  {
    name: "IbiolaVilla Real Estate",
    industry: "Real Estate",
    type: "client",
    span: "lg:col-span-1",
    image: "/freelance/ibiolavilla.png",
    icon: Home,
    accent: {
      tint: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      hoverBorder: "hover:border-amber-300",
    },
    stack: ["Next.js", "Sanity CMS"],
    description:
      "A property listings platform with real search and an agent outreach system, built so browsers turn into enquiries, not bounces.",
    stat: "3 property enquiries · 30+ visitors in month one",
    statSource: "Google Analytics, first month post-launch",
    url: "https://ibiolavilla.com",
  },
  {
    name: "Skyfare Flight Agency",
    industry: "Travel / Flight Booking",
    type: "demo",
    span: "lg:col-span-1",
    image: "/freelance/skyfare.png",
    icon: Plane,
    accent: {
      tint: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-700",
      iconBg: "bg-cyan-100",
      iconText: "text-cyan-600",
      hoverBorder: "hover:border-cyan-300",
    },
    stack: ["React", "Vite", "Tailwind CSS", "Serverless API", "Recharts"],
    description:
      "Real-time flight search across airlines with smart filters, a live price-distribution chart, and a zero-booking-fee concept.",
    url: "https://skyfare-flight.vercel.app",
  },
  {
    name: "Vellure Fashion Store",
    industry: "Fashion / E-commerce",
    type: "demo",
    span: "lg:col-span-1",
    image: "/freelance/vellure.png",
    icon: ShoppingBag,
    accent: {
      tint: "bg-violet-50",
      border: "border-violet-200",
      text: "text-violet-700",
      iconBg: "bg-violet-100",
      iconText: "text-violet-600",
      hoverBorder: "hover:border-violet-300",
    },
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "A fashion storefront front end, product display, collections, and a shopping experience built for conversion.",
    url: "https://vellure.vercel.app",
  },
  {
    name: "VenueFlow Event Centre",
    industry: "Events / Hospitality",
    type: "demo",
    span: "lg:col-span-2",
    image: "/freelance/venueflow.png",
    icon: CalendarCheck,
    accent: {
      tint: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      hoverBorder: "hover:border-emerald-300",
    },
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "An event centre showcase with a complete booking-flow UI, from browsing dates to confirming a venue.",
    url: "https://thevenue-flow.vercel.app",
  },
];

function WhatsAppIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 1.943.46 3.808 1.28 5.468L0 24l6.732-1.256A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.361-.214-3.733.698.724-3.63-.235-.374A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349093695472"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
    </a>
  );
}

function TypeBadge({ type }) {
  if (type === "client") {
    return (
      <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
        Live Client
      </span>
    );
  }
  // return (
  //   <span className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
  //     <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
  //     Demo
  //   </span>
  // );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  const isLarge = project.span !== "lg:col-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className={`${project.span} group bg-white rounded-xl border-2 border-gray-100 ${project.accent.hoverBorder} shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}
    >
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-48 md:h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.name} website`}
            width={1200}
            height={750}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
          />
        </div>
      </Link>

      <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`${project.accent.iconBg} ${project.accent.iconText} w-11 h-11 rounded-lg flex items-center justify-center shrink-0`}
            >
              <Icon size={22} strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <h3
                className={`font-bold text-[#2d2e32] group-hover:${project.accent.text} transition-colors ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}
              >
                {project.name}
              </h3>
              <span
                className={`${project.accent.tint} ${project.accent.text} text-xs font-semibold px-2 py-0.5 rounded-md w-fit mt-1`}
              >
                {project.industry}
              </span>
            </div>
          </div>

          <TypeBadge type={project.type} />
        </div>

        <p className="text-[#555555] font-medium text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {project.stat && (
          <div
            className={`${project.accent.tint} border-l-4 ${project.accent.border} rounded-r-md px-4 py-2.5`}
          >
            <p className={`text-sm font-bold ${project.accent.text}`}>
              {project.stat}
            </p>
            {project.statSource && (
              <p className="text-xs text-gray-500 mt-0.5">
                {project.statSource}
              </p>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 flex-wrap mt-auto pt-1">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="font-medium text-xs md:text-sm shadow-sm px-2 py-1 rounded-md bg-slate-100 border border-[#f9f9f9]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#147efb] font-bold text-sm hover:gap-2.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147efb] rounded w-fit"
        >
          View Project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function FreelancePage() {
  return (
    <div className="w-full">
      <Navbar />

      <section className="w-full bg-[#f9f9f9] flex flex-col items-center overflow-hidden pt-10 pb-20 px-7">
        <h2 className="text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-8">
          Freelance Projects
        </h2>

        <div className="w-full max-w-6xl flex flex-col items-center text-center gap-4 mb-14">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-[2.75rem] text-[#2d2e32] leading-tight max-w-3xl">
            Projects worth clicking.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Client platforms already generating enquiries and{" "}
            <strong>users across 7 countries</strong> , plus self-directed
            builds that show how I think through a product, from booking flows
            to storefronts to real-time search. Everything below is live. Open
            it, judge it, then let&apos;s talk.
          </p>
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="w-full max-w-2xl text-center mt-16 pt-10 border-t border-gray-200">
          <p className="text-gray-700 text-lg mb-6">
            You've seen the work.{" "}
            <strong>Now tell me about your project.</strong>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:atayeroclinton.ac@gmail.com"
              className="flex items-center justify-center h-[60px] text-white bg-[#147efb] px-8 rounded-xl hover:bg-[#0e66c7] transition font-bold text-lg"
            >
              Email Me →
            </a>
            <strong className="text-gray-500 text-sm md:text-base">OR</strong>
            <a
              href="https://wa.me/2349093695472"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              title="Message on WhatsApp"
              className="flex items-center justify-center h-[60px] w-[60px] text-[#05f364] border-2 border-[#05f364] rounded-xl hover:bg-[#05f364] hover:text-white transition"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
