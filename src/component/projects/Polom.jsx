"use client";
import { motion } from "framer-motion";
import React from "react";
import { PolomPix } from "../../../public/assets";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Polom = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 shadow py-7 mb-5 bg-white rounded"
    >
      <div className="w-full md:w-1/3 flex items-center justify-center ">
        <Link
          href="https://polomapp.rsvp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={PolomPix}
            alt="POLOM Customer UI Homepage"
            width={432}
            height={272}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="w-[90%] md:w-1/2 flex flex-col items-start gap-5">
        <p className="font-semibold text-2xl cursor-pointer flex flex-col items-start">
          POLOM E-commerce Customer UI
          <span className="font-bold text-base text-[#147efb]">
            Role: Frontend Developer (Web & Mobile)
          </span>
        </p>
        <p className="text-[#555555] font-medium mt-1">
          Built customer-facing web (Next.js) and mobile (React Native) UIs for
          a production e-commerce platform serving real users. Integrated Google
          Maps APIs (Autocomplete, Directions, Geocoding) to power delivery
          address selection, live route calculation, and ETA display.
          Implemented real-time cart sync with React Query, managed auth flows
          with Zustand, and handled form validation with Formik across 20+
          screens.
          <br />
          <br />
          <strong className="text-[#2d2e32]">
            Deployed to production. Used by Beta customers making purchases
            today.
          </strong>
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          {[
            "Next.Js (Web)",
            "React Native (Mobile)",
            "Tailwind",
            "Tanstack React Query",
            "Zustand",
            "Formik",
          ].map((stack, index) => (
            <p
              key={index}
              className="font-medium text-sm md:text-md shadow-sm p-1 px-2 m-1 rounded-md bg-slate-100 border border-[#f9f9f9]"
            >
              {stack}
            </p>
          ))}
        </div>
        <div className="w-full flex items-center justify-between ">
          <p className="font-bold text-[#888888] cursor-pointer flex items-center gap-1">
            Code <FaGithub /> <em className="text-xs">( Private repo )</em>
          </p>
          <Link href={"https://polomapp.rsvp/"}>
            <p className="font-bold cursor-pointer hover:text-[#147efb] flex items-center gap-1">
              Live Demo
              <FaGlobe className="animate-pulse" />
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Polom;
