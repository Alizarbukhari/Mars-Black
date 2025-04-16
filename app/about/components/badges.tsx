"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import usepage from "../../smoothScrollComponent/scrollprovider"; // Adjust the import path as needed

const scrollThreshold = 1545; // Set your desired scroll threshold (in pixels)

const Badges: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const { lenis } = usepage();

  useEffect(() => {
    if (!lenis) return;

    // Define the callback which checks the Lenis scroll position.
    const onScroll = ({ scroll }: { scroll: number }) => {
      console.log("Current Lenis scroll position:", scroll);
      if (scroll >= scrollThreshold && !active) {
        setActive(true);
        console.log("Badge active! Scroll reached:", scroll);
      } else if (scroll < scrollThreshold && active) {
        setActive(false);
        console.log("Badge inactive. Scroll below threshold:", scroll);
      }
    };

    // Subscribe to Lenis scroll events.
    lenis.on("scroll", onScroll);

    // Cleanup the event listener on unmount.
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis, active]);

  return (
    <div
      ref={containerRef}
      className={`container w-full flex items-center justify-center py-16 mt-11 ${
        active ? "active" : ""
      }`}
    >
      <div className="item w-[250px] h-[250px]">
        <Image
          src="/about/la-icon.png"
          alt="LA Icon"
          width={481}
          height={481}
          className="h-full w-full"
        />
      </div>
      <div className="hover-text text-[30px] font-bold">
        LOS ANGELES | NEW YORK
      </div>
      <div className="item w-[250px] h-[250px]">
        <Image
          src="/about/ny-icon.png"
          alt="NY Icon"
          width={481}
          height={481}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Badges;
