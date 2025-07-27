"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2d2e32] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Atayero Clinton. All rights reserved.
        </div>

        <div className="w-[20%] flex items-center justify-between gap-5 text-xl">
          <a
            href="https://github.com/Clin-Tech"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#147efb] transition"
          >
            <FaGithub size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/clinton-atayero-3800b5238/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#147efb] transition"
          >
            <FaLinkedin size={34} />
          </a>
          <a
            href="mailto:atayeroclinton.ac@gmail.com"
            className="hover:text-[#147efb] transition"
          >
            <FaEnvelope size={34} />
          </a>
        </div>

        <div>
          <a href="/" className="text-sm hover:text-[#147efb] transition">
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
