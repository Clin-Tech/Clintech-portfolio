"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaGithub, FaFileAlt } from "react-icons/fa";
import { CryptoTrackerPix } from "../../../public/assets";

export default function TanStackDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="tanstack-project"
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 shadow py-7 mb-5 bg-white rounded"
    >
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <Link
          href="https://crypto-tracker-clinton.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={CryptoTrackerPix}
            alt="Crypto Tracker preview"
            width={432}
            height={272}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="w-[90%] md:w-1/2 flex flex-col items-start gap-4">
        <p className="font-semibold text-2xl flex flex-col">
          Crypto Tracker — TanStack Query Real-Time Demo
          <span className="text-base font-bold text-[#147efb]">
            Role: Solo developer (frontend)
          </span>
        </p>

        <p className="text-[#555555] font-medium -mt-1">
          A fast, responsive crypto market tracker built to showcase TanStack
          Query server-state patterns like caching, background refetching, and
          resilient UI states.
        </p>

        <ul className="list-disc ml-5 text-[15px] text-gray-700 space-y-1">
          <li>
            Auto-refetch every 30s with stable UI (skeleton on first load,
            “Updating…” on background refresh)
          </li>
          <li>
            Search by coin name/symbol + filter gainers/losers (24h change)
          </li>
          <li>
            Sort by market cap, price, or 24h change (client-side derived)
          </li>
          <li>Retry + friendly error state (with built-in query retries)</li>
        </ul>

        <div className="flex items-center gap-3 flex-wrap">
          {["React", "TanStack Query", "TypeScript", "Vite", "Tailwind"].map(
            (t, i) => (
              <span
                key={i}
                className="font-medium text-sm md:text-md shadow-sm p-1 px-2 m-1 rounded-md bg-slate-100 border border-[#f9f9f9]"
              >
                {t}
              </span>
            ),
          )}
        </div>

        <div className="w-full flex items-center justify-between mt-3">
          <Link
            href="https://crypto-tracker-clinton.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-[#147efb] flex items-center gap-1"
          >
            Live Demo <FaGlobe className="animate-pulse" />
          </Link>
          <Link
            href="https://github.com/Clin-Tech/tanstack-query-crypto-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-[#147efb] flex items-center gap-1"
          >
            Code <FaGithub />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
