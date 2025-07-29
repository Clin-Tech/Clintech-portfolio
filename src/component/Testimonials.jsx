"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full bg-[#f9f9f9] flex flex-col items-center justify-center pt-10 py-10 md:py-5 px-7 overflow-hidden">
      <h2 className="text-2xl font-semibold text-[#147efb] border-b-[3px] border-b-[#147efb] rounded-b-3xl hover:rounded-none transition duration-300 hover:scale-110 px-5 pb-[10px] mb-4">
        Testimonials
      </h2>
      <h2 className="text-lg md:text-xl font-semibold text-center mb-6">
        What others say about working with me
      </h2>

      <div className="relative w-[70%] h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            onMouseLeave={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(!isPaused)}
            onTouchStart={() => setIsPaused(true)}
            className=" w-[85%] md:w-[70%] rounded-xl  shadow-xl bg-black"
          >
            <Image
              src={testimonials[current].src}
              alt={`${testimonials[current].name} testimonial`}
              className="object-cover rounded-xl"
              priority
            />
            <div className="absolute bottom-[-25] md:bottom-2 md:left-2 bg-black bg-opacity-50 text-white text-sm rounded px-2 py-1">
              <p className="font-bold">{testimonials[current].name}</p>
              <p className="text-xs">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
