"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  TestimonialDamilola,
  TestimonialFitsum,
  TestimonialOlivia,
  TestimonialShanana,
  TestimonialShanana2,
} from "../../public/assets";

const testimonials = [
  { src: TestimonialShanana2, name: "Aladesae", role: "DevOps" },
  { src: TestimonialFitsum, name: "Fitsum", role: "Team Member" },
  { src: TestimonialDamilola, name: "Damilola", role: "UI Designer" },
  { src: TestimonialOlivia, name: "OliviaSommy", role: "UI Designer" },
  { src: TestimonialShanana, name: "Adesina", role: "Mentor" },
];

export default function TestimonialCarousel() {
  return (
    <section className="w-full bg-[#f9f9f9] flex flex-col items-center justify-center overflow-hidden pt-10 py-5 px-7 ">
      <h2 className=" text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-6">
        Testimonials
      </h2>
      <h2 className="text-lg md:text-xl font-semibold text-center mb-6">
        What others say about working with me
      </h2>
      <div className="relative w-full overflow-x-auto flex gap-[-40px] px-0 pt-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileTap={{ scale: 1.05 }}
            className="min-w-[200px] sm:min-w-[320px] rounded-xl bg-black shadow-xl relative z-10"
          >
            <Image
              src={t.src}
              alt={`${t.name} testimonial`}
              className="rounded-xl object-cover "
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm rounded px-2 py-1">
              <p className="font-bold">{t.name}</p>
              <p className="text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
