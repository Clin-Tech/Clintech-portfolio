"use client";

import Link from "next/link";
import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/#contact" },
];

const titleAnimate = {
  hidden: { x: 50 },
  visible: {
    x: -150,
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      // repeatType: "reverse",
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 bg-white shadow-md px-7 py-4 z-50 ">
      <div className=" flex justify-between items-center w-full">
        <Link href={"/"}>
          <motion.div
            variants={titleAnimate}
            initial="hidden"
            animate="visible"
            className="relative text-3xl font-extrabold text-[#147efb] cursor-pointer"
          >
            <div className="absolute top-[-12px] left-[-10px] raindrop" />
            <div className="absolute bottom-[-10px] right-[-10px] raindrop" />
            Clin
            <span className="text-[#2d2e32] hover:text-[#147efb]">Tech</span>
          </motion.div>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ href, label }) => (
            <li
              key={label}
              className="font-bold text-lg text-[#2d2e32] hover:text-[#147efb] transition duration-300 hover:scale-105 hover:underline cursor-pointer"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          {open ? (
            <X
              size={28}
              color="#2d2e32"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              color="#2d2e32"
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {open && (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col md:hidden bg-white shadow-md absolute top-full left-0 w-full px-7 pt-6 pb-4 space-y-4"
        >
          {navItems.map(({ href, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-bold text-lg text-[#2d2e32] hover:text-[#147efb] transition duration-300 hover:underline"
              onClick={() => setOpen(false)}
            >
              <Link href={href}>{label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
