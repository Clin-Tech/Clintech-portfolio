"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FetchMetadataPix } from "../../../public/assets";
import { FaGlobe, FaGithub } from "react-icons/fa";

const FetchMetadata = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-10 shadow py-7 mb-5 bg-white rounded"
    >
      <div className="w-full md:w-1/3 flex items-center justify-center  ">
        <Link
          href="https://fetch-metadata-app.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={FetchMetadataPix}
            alt="FetchMetadata Homepage"
            width={432}
            height={272}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="w-[90%] md:w-1/2 flex flex-col items-start gap-5">
        <p className="font-semibold text-2xl cursor-pointer flex flex-col items-start">
          Fetch Metadata
          <span className="font-bold text-base text-[#147efb]">
            Role: Team Lead & Frontend Engineer.
          </span>
        </p>
        <p className="font-medium text-[#555555] w-[95%]">
          A Fullstack app that extracts metadata (creation date, GPS
          coordinates, camera settings, etc.) from videos, images, eBooks, and
          music files in just 3 steps. Built during ZURI Bootcamp where I led
          the team as Team Lead and also served as Frontend Engineer.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          {["JavaScript", "MongoDB", "Express.Js", "Cloudinary", "Node.Js"].map(
            (stack, index) => (
              <p
                key={index}
                className="font-medium text-sm md:text-md shadow-sm p-1 px-2 m-1 rounded-md bg-slate-100 border border-[#f9f9f9]"
              >
                {stack}
              </p>
            )
          )}
        </div>
        <div className="w-full flex items-center justify-between ">
          <Link href={"https://github.com/97Clinton/Fetch_Metadata-project"}>
            <p className="font-bold cursor-pointer hover:text-[#147efb] flex items-center gap-1">
              Code <FaGithub />
            </p>
          </Link>
          <Link href={"https://fetch-metadata-app.onrender.com/"}>
            <p className="font-bold cursor-pointer hover:text-[#147efb] flex items-center gap-1">
              Live Demo <FaGlobe className="animate-pulse" />
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FetchMetadata;
