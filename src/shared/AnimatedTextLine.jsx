"use client";
import { useEffect, useState } from "react";

const AnimatedTextLine = ({ textLine }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const headline = textLine;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev < headline.length ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="">
      {headline.split("").map((char, i) => (
        <span
          key={i}
          className={`transition duration-200 ${
            i < visibleCount ? "text-[#2d2e32]" : "text-blue-200"
          }`}
        >
          {char}
        </span>
      ))}
    </p>
  );
};

export default AnimatedTextLine;
