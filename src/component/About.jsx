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
    <div className="w-full flex flex-col items-start gap-8 px-7 py-10">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="font-bold text-xl  border-r-[2px] border-r-[#2d2e32] rounded-full pr-5 py-4 mr-3">
          Tech Stack
        </div>
        <motion.div
          variants={motionContainerVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap gap-10 mt-4 text-4xl "
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
      <div className="w-full flex flex-col md:flex-row items-center gap-7 md:gap-0 justify-center pt-10">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src={AboutPix}
            alt="coding-pix"
            className="w-[350px] h-[300px] rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center  justify-center gap-5">
          <p className="text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px]">
            About Me
          </p>
          <h4 className="font-bold text-xl text-[#2d2e32] text-center">
            Front-end Developer based in Nigeria.
          </h4>
          <div className="w-[95%] text-center flex flex-col items-center gap-4">
            <p className="text-[#767676] font-medium leading-relaxed">
              I'm a frontend engineer with 3+ years of experience across mobile
              and web projects. At POLOM, I helped build the Delivery, Customer
              and Admin UI of a production-grade e-commerce platform using
              React, Tailwind, and React Native.
            </p>
            <p className="text-[#767676] font-medium leading-relaxed">
              Led a cross-functional team of developers and designers during the
              Zuri Bootcamp, ranking in the top 5 out of 132 teams. Recognized
              by peers for effective leadership and collaboration.
            </p>
            <p className="mt-3 text-[#767676] font-medium leading-relaxed">
              I care about clean UI/UX, scalable frontend patterns, and
              delivering real business value with code. Currently seeking
              opportunities to contribute to remote teams or organisations
              building impactful products.
            </p>
            <p className="mt-3 font-extrabold text-[#767676] leading-relaxed">
              <span className="text-[#147efb]"> Skilled in: </span> React.js,
              Next.js, React Native, Tailwind CSS, TypeScript, REST APIs,
              TanStack React Query, Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
