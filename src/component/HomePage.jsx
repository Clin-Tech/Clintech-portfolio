"use client";

import Image from "next/image";
import React from "react";
import { LinkedInIcon, MyPix, GithubIcon } from "../../public/assets";
import Link from "next/link";
import AnimatedTextLine from "../shared/AnimatedTextLine";

const HomePage = () => {
  return (
    <section
      className="w-full  h-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-5 pt-[5%] pb-[2%] px-7 md:px-[70px]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/black-thread-light.png')",
      }}
    >
      <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col items-center md:items-start gap-2">
        <div className="font-extrabold text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] text-[#2d2e32]">
          <AnimatedTextLine textLine="Hi, I'm Clinton. Frontend Engineer, built production e-commerce & mobile apps." />
        </div>
        <div className="flex flex-col items-start md:items-start gap-5">
          <p className="flex-wrap text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Shipped customer-facing UIs serving real users at POLOM (e-commerce
            platform). 3+ years building web (React, Next.js) and mobile (React
            Native) with clean API integrations, Google Maps SDKs, and
            Zustand/React Query for state management.
          </p>
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="flex items-center gap-5">
              <Link href={"https://github.com/Clin-Tech"}>
                <Image
                  src={GithubIcon}
                  alt="github"
                  className="h-7 md:h-10 w-7 md:w-10 hover:scale-110 transition-all animate-bounce duration-2000"
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/clinton-atayero-3800b5238/"}
              >
                <Image
                  src={LinkedInIcon}
                  alt="linkedin"
                  className="h-7 md:h-10 w-7 md:w-10 hover:scale-110 transition-all animate-bounce duration-2000"
                />
              </Link>
            </div>
            <div className="w-full flex justify-center md:justify-start">
              <Link href="/#contact" passHref>
                <button
                  onClick={() => {
                    if (window.plausible) window.plausible("hire_button_click");
                  }}
                  className="flex items-center gap-2 bg-[#147efb] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#0e66c7] hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <span role="img" aria-label="email">
                    📨
                  </span>
                  <span>Hiring? Let's Talk! I Ship Production Code</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-[35%] h-fit flex items-center justify-center md:justify-start">
        <Image
          src={MyPix}
          alt="My Picture"
          width={300}
          height={300}
          priority
          placeholder="blur"
          className="rounded-full shadow-2xl border-[5px] border-blue-100 object-cover"
        />
      </div>
    </section>
  );
};

export default HomePage;
