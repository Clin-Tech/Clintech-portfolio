"use client";

import Link from "next/link";
import React from "react";

function Contact() {
  return (
    // app/contact/page.jsx
    <section
      id="contact"
      className="w-full bg-white py-16 px-6 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-[#147efb]">
        Ready to Ship Production Code
      </h2>
      <p className="text-gray-700 mb-6 max-w-2xl text-md md:text-lg">
        I build frontends that work, clean UIs, integrated APIs, deployed to
        production. If you need someone who ships features (not just writes
        code), let's talk.
      </p>
      <p className="text-gray-600 mb-6 max-w-xl text-sm">
        <strong>Open to:</strong> Full-time frontend roles (React, Next.js,
        React Native), contract work, or freelance projects. Remote preferred.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <a
          href="mailto:atayeroclinton.ac@gmail.com"
          className="text-white bg-[#147efb] px-8 py-4 rounded-xl hover:bg-[#0e66c7] transition font-bold text-lg"
        >
          📧 Email Me
        </a>

        <a
          href="/assets/Clinton-Atayero-Frontend-Engineer-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          onClick={() => {
            if (window.plausible) window.plausible("cv_download_click");
          }}
          className="text-[#147efb] border-2 border-[#147efb] px-8 py-4 rounded-xl hover:bg-[#147efb] hover:text-white transition font-bold text-lg"
        >
          📄 Download Resume
        </a>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          Email:{" "}
          <span className="font-bold text-black">
            atayeroclinton.ac@gmail.com
          </span>
        </p>
        <p>
          Phone: <span className="font-bold text-black">+234 816 302 9703</span>
        </p>
        <p>
          Location:{" "}
          <span className="font-bold text-black">
            Lagos, Nigeria (Remote available)
          </span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
