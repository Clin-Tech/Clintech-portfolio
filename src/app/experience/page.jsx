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
    role: "Frontend Developer (Web & Mobile)",
    date: "Jan 2024 – Present",
    points: [
      "Built customer-facing React Native app using Expo + NativeWind",
      "Integrated Google Maps API for delivery & ETA features",
      "Implemented TanStack React Query for efficient API caching",
      "Redesigned delivery and pickup UI improving UX scores by 40%",
      "Led refactor of Next.js web portal using App Router",
      "Collaborated with senior dev on production release cycles",
      "Admin Dashboard – order and inventory control, built with componentized UI and role-based access",
      "Driver App – real-time order tracking, delivery updates with location awareness",
      "Branch Manager Panel – local order oversight, dispatch coordination",
    ],
  },
  {
    logo: FiveStarLogo,
    company: "5Star Company",
    role: "Frontend Developer",
    date: "May 2024 – Nov 2024",
    points: [
      "Built reusable UI components with React and Tailwind",
      "Integrated authentication and dashboard APIs",
      "Improved page load performance by 30%",
      "Collaborated with testers to identify and fix bugs",
      "Built metrics dashboard for real-time data visualization",
    ],
  },
  {
    logo: ZuriLogo,
    company: "Zuri x Ingressive For Good",
    role: "Frontend Intern (Team Lead)",
    date: "Aug 2022 – Oct 2022",
    points: [
      "Led frontend team to build FetchMetadata app",
      "Ranked 5th out of 132 teams",
      "Managed task delegation and code reviews",
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
