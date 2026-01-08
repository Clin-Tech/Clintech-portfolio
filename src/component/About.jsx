"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpo,
} from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";
import { AboutPix } from "../../public/assets";
import LazyYouTubeEmbed from "./LazyYouTubeEmbed";

const motionContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const motionChildrenVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const stacks = [
  {
    id: 1,
    icon: <SiReact title="React" className="text-[#61DAFB]" />,
    name: "React",
  },
  {
    id: 2,
    icon: <SiNextdotjs title="Next.js" className="text-black" />,
    name: "Next.js",
  },
  {
    id: 3,
    icon: <SiExpo title="Expo" className="text-black" />,
    name: "Expo",
  },
  {
    id: 4,
    icon: <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />,
    name: "Tailwind CSS",
  },
  {
    id: 5,
    icon: <SiTypescript title="TypeScript" className="text-[#007ACC]" />,
    name: "TypeScript",
  },
  {
    id: 6,
    icon: <SiJavascript title="JavaScript" className="text-[#F7DF1E]" />,
    name: "JavaScript",
  },
  {
    id: 7,
    icon: <SiNodedotjs title="Node.js" className="text-[#68A063]" />,
    name: "Node.js",
  },
];
const About = () => {
  return (
    <div className="w-full flex flex-col items-start gap-8 px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="font-bold text-xl border-r-2 border-[#2d2e32] pr-5 py-4 mr-3">
          Tech Stack
        </div>
        <motion.div
          variants={motionContainerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap gap-10 mt-4 text-4xl"
        >
          {stacks.map((stack) => (
            <motion.div
              variants={motionChildrenVariants}
              key={stack.id}
              className="flex flex-col items-center gap-2"
            >
              {stack.icon}
              <div className="font-bold text-sm">{stack.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="text-2xl font-semibold text-[#147efb] border-b-4 border-[#147efb] pb-2 rounded-b-3xl transition duration-300 hover:rounded-none hover:scale-105 mx-auto">
        About Me
      </p>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 pt-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 text-center lg:text-left">
          <h4 className="font-bold text-xl text-[#2d2e32]">
            Front-end Developer based in Nigeria.
          </h4>
          <div className="w-[95%] text-[#767676] font-medium space-y-4 leading-relaxed">
            <p>
              <strong className="text-[#2d2e32]">
                3+ years shipping production frontends
              </strong>{" "}
              across e-commerce, logistics, and SaaS. At POLOM, I built the
              customer-facing web/mobile UIs for a live e-commerce platform,
              integrated Google Maps APIs (Autocomplete, Directions, Geocoding)
              for delivery routing, handled real-time inventory updates with
              React Query, and deployed to production serving actual paying
              customers.
            </p>
            <p>
              <strong className="text-[#2d2e32]">
                Led cross-functional teams under pressure.
              </strong>{" "}
              During Zuri Bootcamp, led a team of 8 (devs + designers) to top 5
              finish out of 132 teams. Recognized by mentors for technical
              leadership and on-time delivery.
            </p>
            <p>
              <strong className="text-[#2d2e32]">
                Recently shipped ApplyCraft.
              </strong>{" "}
              full-stack job tracker with Supabase auth, RLS, and AI-powered
              outreach generation. Built and deployed in 7 days. Live at
              apply-craft.vercel.app with real users.
            </p>
            <p className="font-bold text-[#147efb]">
              Stack: React.js, Next.js, React Native, TypeScript, Tailwind,
              Supabase, React Query, Zustand, REST APIs, Git
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="bg-[#147efb]/10 rounded-xl p-4 border-l-4 border-[#147efb]">
            <h3 className="font-bold text-lg mb-2 text-[#2d2e32]">
              🎥 Watch: My Developer Introduction (2 min)
            </h3>
            <p className="text-sm text-gray-600">
              Quick walkthrough of my live projects and my approach to building
              production-ready frontends. Currently available for full-time
              roles and freelance work.
            </p>
          </div>
          <LazyYouTubeEmbed videoId="ICVzeo-SNJc" />
        </div>
      </div>
    </div>
  );
};
export default About;
