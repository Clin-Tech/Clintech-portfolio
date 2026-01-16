"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaGithub, FaFileAlt } from "react-icons/fa";
import { FlightFinderPix } from "../../../public/assets";

export default function FlightFinder() {
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
          href="https://spotter-flight-search-engine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={FlightFinderPix}
            alt="FlightFinder preview"
            width={432}
            height={272}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="w-[90%] md:w-1/2 flex flex-col items-start gap-4">
        <p className="font-semibold text-2xl flex flex-col">
          FlightFinder — Flight Search & Offers Explorer
          <span className="text-base font-bold text-[#147efb]">
            Role: Solo developer (end-to-end)
          </span>
        </p>

        <p className="text-[#555555] font-medium -mt-1">
          Search flight offers with a clean UX: airport selection, date inputs,
          passengers, filters, price distribution, and quick flight details.
        </p>

        <ul className="list-disc ml-5 text-[15px] text-gray-700 space-y-1">
          <li>
            Secure server-side token flow (OAuth), no secrets shipped to client
          </li>
          <li>
            Resilient UI states: skeleton loading, clear error banner, empty
            state content
          </li>
          <li>
            Flight details modal on click + price distribution chart for quick
            analysis
          </li>
          <li>
            Hardened repo hygiene: secrets removed from git history + env setup
            via Vercel
          </li>
        </ul>

        <div className="flex items-center gap-3 flex-wrap">
          {[
            "React + Vite",
            "JavaScript",
            "Tailwind",
            "MUI",
            "Serverless API (Vercel)",
            "OAuth Token Handling",
            "Charts (Recharts)",
          ].map((t, i) => (
            <span
              key={i}
              className="font-medium text-sm md:text-md shadow-sm p-1 px-2 m-1 rounded-md bg-slate-100 border border-[#f9f9f9]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="w-full flex items-center justify-between">
          <Link
            href="/projects/flightfinder"
            className="font-bold hover:text-[#147efb] flex items-center gap-1"
          >
            Case Study <FaFileAlt />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="https://spotter-flight-search-engine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-[#147efb] flex items-center gap-1"
            >
              Live Demo <FaGlobe className="animate-pulse" />
            </Link>
            <Link
              href="https://github.com/Clin-Tech/Flight-finder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-[#147efb] flex items-center gap-1"
            >
              Code <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
