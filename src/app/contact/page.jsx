"use client";

import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-white py-16 px-6 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-[#147efb]">
        Let's Work Together
      </h2>

      <p className="text-gray-700 mb-6 max-w-xl text-md md:text-lg">
        Got a job opportunity or freelance project? I'm open to Frontend roles
        (React, Next.js, React Native) and collaborations. Let’s build something
        amazing.
      </p>

      <div className="text-md text-gray-600 mb-4">
        <p>
          Email:{" "}
          <span className="font-bold text-black">
            atayeroclinton.ac@gmail.com
          </span>
        </p>
        <p>
          Phone: <span className="font-bold text-black">+234 816 302 9703</span>
        </p>
      </div>

      <a
        href="mailto:atayeroclinton.ac@gmail.com"
        className="text-white bg-[#147efb] px-6 py-3 rounded-xl hover:bg-[#0e66c7] transition font-semibold"
      >
        Contact Me via Email
      </a>
      <a
        href="/assets/Clintech-Official-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        onClick={() => {
          if (window.plausible) window.plausible("cv_download_click");
        }}
        className="mt-4 text-[#147efb] font-semibold hover:underline text-base"
      >
        📄 Download My CV (PDF)
      </a>
      <noscript>
        <p className="text-red-500 mt-2">
          If the download doesn't work,{" "}
          <a href="/assets/Clintech-Official-Resume.pdf" className="underline">
            click here to open the CV directly.
          </a>
        </p>
      </noscript>
    </section>
  );
}

export default Contact;
