"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { Clinvest } from "../../../public/assets";

const ClinVest = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 shadow py-7 mb-5 bg-white rounded"
    >
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <Link
          href="https://clinvest.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Clinvest}
            alt="ClinVest Real-Estate MVP"
            width={432}
            height={272}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="w-[90%] md:w-1/2 flex flex-col items-start gap-5">
        <p className="font-semibold text-2xl cursor-pointer flex flex-col items-start">
          ClinVest — Real-Estate Listing MVP
          <span className="font-bold text-base text-[#147efb]">
            Role: Frontend Developer
          </span>
        </p>

        <p className="text-[#555555] font-medium mt-1">
          Lightweight estate app showing real property discovery UX:
          multi-parameter <b>Search</b>, <b>Saved listings</b> (localStorage +
          badge), SEO via <b>JSON-LD</b> on detail pages, and Plausible
          analytics. Built with Next.js (App Router), TypeScript, Tailwind, and
          Framer Motion. Deployed on Vercel.
        </p>
        <ul className="text-sm text-[#444] space-y-1">
          <li>• Server-safe query parsing for search → client render</li>
          <li>• Saved items sync across tabs (storage events)</li>
          <li>• JSON-LD Product/Offer for property details</li>
        </ul>

        <div className="flex items-center gap-3 flex-wrap">
          {[
            "Next.js 15",
            "TypeScript",
            "Tailwind",
            "Framer Motion",
            "Plausible",
          ].map((stack, i) => (
            <p
              key={i}
              className="font-medium text-sm md:text-md shadow-sm p-1 px-2 m-1 rounded-md bg-slate-100 border border-[#f0f0f0]"
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="w-full flex items-center justify-between">
          <Link href={"https://github.com/Clin-Tech/clinvest"}>
            <p className="font-bold cursor-pointer hover:text-[#147efb] flex items-center gap-1">
              Code <FaGithub />
            </p>
          </Link>
          <Link
            href="https://clinvest.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default ClinVest;
