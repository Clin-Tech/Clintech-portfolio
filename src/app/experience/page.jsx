"use client";

import React from "react";
import { ExperienceCard } from "../../component/ExperienceCard";
import { FiveStarLogo, PolomLogo, ZuriLogo } from "../../../public/assets";
import Navbar from "../../component/Navbar";
import { motion } from "framer-motion";
import Footer from "../../component/Footer";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const experiences = [
  {
    logo: PolomLogo,
    company: "POLOM E-commerce Company",
    role: "Frontend Engineer (Web & Mobile)",
    date: "Jan 2024 – Present",
    points: [
      "Built 4 production apps serving real users: Customer Web/Mobile, Delivery Driver, Admin Dashboard, Branch Manager Portal",
      "Integrated Google Maps APIs (Autocomplete, Directions, Geocoding) across 20+ screens for live delivery routing and ETA calculation",
      "Reduced component render overhead 40% through React.memo, useMemo, and lazy loading on product/order pages",
      "Migrated API layer from fetch to TanStack React Query, cutting redundant network calls 60% with smart caching",
      "Managed complex state with Zustand (cart, user preferences); implemented Formik validation across checkout flows",
      "Delivered responsive UIs with Tailwind CSS and NativeWind ensuring consistency across web and mobile platforms",
    ],
  },
  {
    logo: FiveStarLogo,
    company: "5Star Company (Financial Services)",
    role: "Frontend Developer",
    date: "May 2024 – Nov 2024",
    points: [
      "Built secure authentication flows (login, registration, 2FA) with React Hook Form and comprehensive validation",
      "Integrated REST APIs for transaction history, account management, and real-time data with proper error handling",
      "Improved page load performance 30% by implementing code splitting and lazy loading on dashboard routes",
      "Led codebase refactor removing 2,000+ lines of dead code; documented component patterns for team maintainability",
      "Built real-time metrics dashboard with data visualization using Recharts for financial KPI tracking",
    ],
  },
  {
    logo: ZuriLogo,
    company: "Zuri x Ingressive For Good",
    role: "Frontend Developer & Team Lead",
    date: "Feb 2022 – Aug 2022",
    points: [
      "Led cross-functional team of 8 (4 developers, 4 designers) to Top 5 finish out of 132 competing teams",
      "Built FetchMetadata, full-stack platform extracting GPS, timestamps, and camera data from uploaded files",
      "Architected frontend with vanilla JavaScript, HTML5, CSS3; integrated Node.js/Express/MongoDB backend",
      "Managed task delegation, code reviews, and Git workflow ensuring on-time delivery under bootcamp deadlines",
    ],
  },
];

const page = () => {
  return (
    <div className="w-full">
      <Navbar />
      <section className="w-full bg-[#f9f9f9] flex flex-col items-center justify-center gap-5 overflow-hidden pt-10 py-5 px-7 ">
        <h2 className=" text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-6">
          Experience
        </h2>
        <div className="w-[95%] md:w-[70%] flex flex-col items-center justify-center gap-10">
          <motion.div
            className="flex flex-col gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={item}>
                <ExperienceCard {...exp} reverse={i % 2 !== 0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
