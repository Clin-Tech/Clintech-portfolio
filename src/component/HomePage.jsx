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
          <AnimatedTextLine textLine="Hi, I'm Clinton - Frontend Developer." />
        </div>
        <div className="flex flex-col items-start md:items-start gap-5">
          <p className="flex-wrap text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            I build fast, responsive web and mobile interfaces using React,
            React Native (Expo), Tailwind CSS, and Next.js. Experienced in
            integrating REST APIs and Google Maps services to power scalable
            e-commerce solutions.
          </p>
          <div className="flex gap-5 ">
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
        </div>
      </div>
      {/* <div className="w-full md:w-1/2 lg:w-[35%] h-fit flex items-center justify-center md:justify-start">
        <Image
          src={MyPix}
          alt="My Picture"
          className="w-[20em] h-[20em] object-cover rounded-full body shadow-3xl border-[5px] border-blue-100 md:animate-bounce duration-4000 ease-in-out"
        />
      </div> */}
    </section>
  );
};

export default HomePage;
