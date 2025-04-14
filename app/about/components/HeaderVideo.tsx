import React from "react";

export default function HeaderVideo() {
  return (
    <div className="relative w-full h-[610px] ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/about-header.mp4" type="video/mp4" />
      </video>

      {/* Text Overlay - Words in a line */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
      </div>
    </div>
  );
}
