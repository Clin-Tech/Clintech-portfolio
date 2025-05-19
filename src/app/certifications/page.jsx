"use client";

import { motion } from "framer-motion";
import {
  CiscoIC3,
  CiscoIT,
  TasuedCert,
  UdemyPMCert,
  UdemyWebCert,
} from "../../../public/assets";
import Image from "next/image";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Certification() {
  const certs = [
    { src: UdemyWebCert, title: "Web Dev Bootcamp", issuer: "Udemy" },
    {
      src: TasuedCert,
      title: "B.A.ED Degree",
      issuer: "Tai Solarin University of Education (TASUED)",
    },
    { src: UdemyPMCert, title: "Product Management", issuer: "Udemy" },
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
            <motion.div
              key={i}
              className="bg-white shadow-xl rounded-xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src={cert.src}
                className="w-full h-fit object-cover"
                alt={cert.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
