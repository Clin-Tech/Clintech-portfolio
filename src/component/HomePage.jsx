"use client";
import Image from "next/image";
import React from "react";
import { LinkedInIcon, MyPix, GithubIcon } from "../../public/assets";
import Link from "next/link";
import AnimatedTextLine from "../shared/AnimatedTextLine";

const HomePage = () => {
  const featuredProjects = [
    {
      title: "POLOM E-Commerce",
      description: "4 production apps • 1,400+ businesses",
      metrics: ["60% fewer API calls", "40% faster renders"],
      link: "#polom-project",
    },
    {
      title: "ApplyCraft",
      description: "AI job tracker • Shipped in 7 days",
      metrics: ["Supabase backend", "Row-level security"],
      link: "#applycraft-project",
    },
    {
      title: "TanStack Query Demo",
      description: "Real-time crypto tracker",
      metrics: ["Auto-refetch", "Optimistic UI"],
      link: "#tanstack-project",
    },
  ];

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center gap-16 pt-20 pb-16 px-7 md:px-[70px]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/black-thread-light.png')",
      }}
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-5">
        <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col items-center md:items-start gap-6">
          <div className="font-extrabold text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-[#2d2e32] leading-tight">
            <AnimatedTextLine textLine="Clinton Atayero" />
          </div>

          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            Frontend Engineer | React • Next.js • TypeScript
          </p>

          <div className="flex flex-wrap gap-4 py-3">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                3 years production
              </span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                4 apps shipped
              </span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg border border-purple-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                60% API reduction
              </span>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                40% performance gain
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center md:text-left">
            Built production e-commerce platform at{" "}
            <span className="font-semibold text-gray-900">POLOM</span> serving
            real users. Migrated to TanStack Query, optimized performance,
            shipped features users rely on daily.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link href="#featured-projects" passHref>
              <button className="flex items-center justify-center gap-2 bg-[#147efb] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0e66c7] hover:scale-105 transition-all duration-300 shadow-md">
                <span>View Work</span>
                <span>↓</span>
              </button>
            </Link>
            <Link href="#contact" passHref>
              <button
                onClick={() => {
                  if (window.plausible) window.plausible("hire_button_click");
                }}
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-md border-2 border-gray-200"
              >
                <span role="img" aria-label="email">
                  📨
                </span>
                <span>Get in Touch</span>
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <Link href="https://github.com/Clin-Tech">
              <Image
                src={GithubIcon}
                alt="github"
                className="h-8 w-8 hover:scale-110 transition-all"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/clinton-atayero-3800b5238/">
              <Image
                src={LinkedInIcon}
                alt="linkedin"
                className="h-8 w-8 hover:scale-110 transition-all"
              />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-[35%] h-fit flex items-center justify-center md:justify-start">
          <div className="relative">
            <Image
              src={MyPix}
              alt="Clinton Atayero"
              width={300}
              height={300}
              priority
              placeholder="blur"
              className="rounded-full shadow-2xl border-[5px] border-blue-100 object-cover"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-gray-200">
              <p className="text-sm font-semibold text-green-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                Open to Remote
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="featured-projects" className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2e32] mb-2">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600">
            Production apps and proof-of-concept projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-[#147efb] cursor-pointer h-full">
                <h3 className="text-xl font-bold text-[#2d2e32] mb-2 group-hover:text-[#147efb] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-[#147efb] rounded-full"></div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#147efb] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="#all-projects" passHref>
            <button className="text-[#147efb] font-semibold hover:underline flex items-center gap-2 mx-auto">
              <span>View All Projects</span>
              <span>↓</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
