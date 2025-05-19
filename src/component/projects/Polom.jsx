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
        <Link href={"https://polom.shop/"}>
          <Image
            src={PolomPix}
            alt="Homepage image"
            className=" w-[90%] md:w-[27em] h-[17em]"
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
          Contributed to the development of a full-featured e-commerce platform
          with multiple interfaces across web and mobile. Integrated delivery
          logistics, user flows, and real-time data handling for an efficient
          buying experience. <br /> Integrated Google Maps APIs (Autocomplete,
          Directions, Geocoding) for live address suggestions, route
          calculation, and ETA display. Built with React Native and Next.js.
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
              className="font-medium text-sm md:text-md shadow-sm p-1 px-2 m-1 rounded-md bg-[#f9f9f9] border border-[#f9f9f9]"
            >
              {stack}
            </p>
          ))}
        </div>
        <div className="w-full flex items-center justify-between ">
          {/* <Link href={"https://github.com/97Clinton/Fetch_Metadata-project"}> */}
          <p className="font-bold text-[#888888] cursor-pointer flex items-center gap-1">
            Code <FaGithub /> <em className="text-xs">( Private repo )</em>
          </p>
          {/* </Link> */}
          <Link href={"https://polom.shop/"}>
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
