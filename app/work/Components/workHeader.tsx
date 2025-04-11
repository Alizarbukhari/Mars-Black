import ButtonHolder from "@/app/Components/ButtonHolder";
import React from "react";

export default function VideoSection() {
  return (
    <div className="relative w-full h-[500px] ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Text Overlay - Words in a line */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="items-start">
          <div>
            <p className="mt-4 text-sm "> 20 Years of Publishing </p>
          </div>
          <div>
            <p>is ....</p>
          </div>
          {/* Horizontal Layout for Words */}
          <div className="flex  text-6xl  flex-col font-bold">
            <h1>AUTO.</h1>
            <h1>TASTE.</h1>
            <h1>LIFESTYLE.</h1>
            <h1>MOTO.</h1>
            <h1>MUSIC.</h1>
            <h1>FITNESS.</h1>
          </div>
          <ButtonHolder />
        </div>
      </div>
    </div>
  );
}
