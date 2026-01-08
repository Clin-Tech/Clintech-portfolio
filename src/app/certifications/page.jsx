"use client";

import { motion } from "framer-motion";
import {
  CiscoIC3,
  CiscoIT,
  TasuedCert,
  UdemyPMCert,
  UdemyWebCert,
  ZuriCert,
} from "../../../public/assets";
import Image from "next/image";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

export default function Certification() {
  const certs = [
    { src: UdemyWebCert, title: "Web Dev Bootcamp", issuer: "Udemy" },
    {
      src: TasuedCert,
      title: "B.A.ED Degree",
      issuer: "Tai Solarin University of Education (TASUED)",
    },
    { src: UdemyPMCert, title: "Product Management", issuer: "Udemy" },
    { src: ZuriCert, title: "Frontend Web Dev Training", issuer: "I4G x Zuri" },
    {
      src: CiscoIC3,
      title: "Internet & Core Computing",
      issuer: "GNT Nigeria",
    },
    {
      src: CiscoIT,
      title: "IT Essentials: PC Hardware & Software",
      issuer: "GNT Nigeria",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />
      <section className="w-full bg-[#f9f9f9] flex flex-col items-center justify-center gap-5 overflow-hidden pt-10 py-5 px-7 ">
        <h2 className=" text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-6">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-xl overflow-hidden"
            >
              <Image
                src={cert.src}
                alt={cert.title}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
