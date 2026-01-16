"use client";

import Image from "next/image";
import { useState } from "react";

const LazyYouTubeEmbed = ({ videoId }: { videoId: string }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center">
      <div className="relative w-full max-w-[560px] aspect-video rounded-xl shadow-md overflow-hidden bg-black">
        {!isReady ? (
          <button onClick={() => setIsReady(true)} className="w-full h-full">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              width={560}
              height={315}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 84 84"
              >
                <circle cx="42" cy="42" r="42" fill="black" opacity="0.6" />
                <polygon fill="white" points="33,26 60,42 33,58" />
              </svg>
            </div>
          </button>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
            title="What I Do – Frontend Developer Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    </div>
  );
};

export default LazyYouTubeEmbed;
