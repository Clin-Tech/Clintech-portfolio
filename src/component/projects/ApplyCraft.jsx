"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaGithub, FaFileAlt } from "react-icons/fa";
import { ApplyCraftPix } from "../../../public/assets";

export default function ApplyCraft() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="applycraft-project"
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 shadow py-7 mb-5 bg-white rounded"
    >
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <Link
          href="https://apply-craft.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={ApplyCraftPix}
            alt="ApplyCraft preview"
            width={432}
            height={272}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="w-[90%] md:w-1/2 flex flex-col items-start gap-4">
        <p className="font-semibold text-2xl flex flex-col">
          ApplyCraft — AI Job Tracker & Outreach Assistant
          <span className="text-base font-bold text-[#147efb]">
            Role: Solo developer (end-to-end)
          </span>
        </p>

        <p className="text-[#555555] font-medium -mt-1">
          Track your applications and generate tailored DMs, emails, and cover
          letters directly from job descriptions with AI.
        </p>

        <ul className="list-disc ml-5 text-[15px] text-gray-700 space-y-1">
          <li>Per-user auth with Supabase, row-level security on all data</li>
          <li>Jobs CRUD with statuses, filters, and notes</li>
          <li>
            AI outreach generation using job description + user profile context
          </li>
          <li>Deployed with secure API boundary for AI (no keys on client)</li>
        </ul>

        <div className="flex items-center gap-3 flex-wrap">
          {[
            "Next.js",
            "JavaScript",
            "Tailwind",
            "Supabase (Auth + RLS)",
            "AI API",
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
            href="/projects/applycraft"
            className="font-bold hover:text-[#147efb] flex items-center gap-1"
          >
            Case Study <FaFileAlt />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="https://apply-craft.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-[#147efb] flex items-center gap-1"
            >
              Live Demo <FaGlobe className="animate-pulse" />
            </Link>
            <Link
              href="https://github.com/Clin-Tech/ApplyCraft"
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
