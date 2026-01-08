"use client";

import React from "react";
import FetchMetadata from "./projects/FetchMetadata";
import Polom from "./projects/Polom";
import ClinVest from "./projects/Clinvest";
import ApplyCraft from "./projects/ApplyCraft";

function Project() {
  return (
    <section className="w-full bg-[#f9f9f9] flex flex-col items-center justify-center overflow-hidden pt-10 py-5 px-7 ">
      <h2 className=" text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-6">
        Featured Projects
      </h2>
      <div className="w-full flex flex-col pt-5 gap-15">
        <Polom />
        <ApplyCraft />
        <FetchMetadata />
        <ClinVest />
      </div>
    </section>
  );
}

export default Project;
