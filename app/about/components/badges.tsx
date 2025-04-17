"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import usePage from "../../smoothScrollComponent/scrollprovider"; // Adjust the import path

export const Badges = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { lenis } = usePage();

  useEffect(() => {
    if (!scrollRef.current) {
      console.log("scrollRef is null"); // Debug if ref is null
      return;
    }

    console.log("Setting up IntersectionObserver"); // Confirm setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IntersectionObserver triggered", entry.isIntersecting); // Log visibility
        setIsVisible(entry.isIntersecting); // Update state
      },
      {
        root: null, // Use viewport
        threshold: 0.3, // Trigger at 30% visibility
        rootMargin: "0px",
      }
    );

    observer.observe(scrollRef.current);

    return () => {
      console.log("Cleaning up IntersectionObserver");
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("isVisible changed:", isVisible); 
    if (scrollRef.current) {
      console.log("Class on container:", scrollRef.current.className); 
    }
  }, [isVisible]);

  useEffect(() => {
    console.log("Lenis instance:", lenis); 
  }, [lenis]);

  return (
    <div
      ref={scrollRef}
      className={`w-full flex items-center justify-center py-16 mt-11 `}
    >
      <div className={`container ${
        isVisible ? "is-visible" : ""
      }`}>
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
    </div>
  );
};