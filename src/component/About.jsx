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
      {/* Tech Stack */}
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
              I'm a frontend engineer with 3+ years of experience across mobile
              and web projects. At POLOM, I helped build the Delivery, Customer,
              and Admin UIs of a production-grade e-commerce platform using
              React, Tailwind, and React Native.
            </p>
            <p>
              Led a cross-functional team of developers and designers during the
              Zuri Bootcamp — ranked top 5 of 132 teams. Recognized by peers for
              leadership and collaboration.
            </p>
            <p>
              I care about clean UI/UX, scalable frontend patterns, and
              delivering real business value with code. Currently open to remote
              roles or freelance collaborations.
            </p>
            <p className="font-bold">
              <span className="text-[#147efb]">Skilled in:</span> React.js,
              Next.js, React Native, Tailwind CSS, TypeScript, REST APIs, React
              Query, Git.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <iframe
            loading="lazy"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ICVzeo-SNJc"
            title="What I Do – Frontend Developer Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
