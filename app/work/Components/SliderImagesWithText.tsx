"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  socialText,
  socialSlid,
  socialSlid2,
  socialSlid3,
  socialSlid4,
  socialSlid5,
} from "../../../data/utils/workslidedata";
import Image from "next/image";
import "swiper/css";

const allSlides = [
  socialSlid,
  socialSlid2,
  socialSlid3,
  socialSlid4,
  socialSlid5,
];

export default function SliderImagesWIthText() {
  return (
    <div className="w-full bg-black">
      {socialText.map((textItem, index) => (
        <SliderSection
          key={textItem.id}
          title={textItem.text}
          slides={allSlides[index]}
        />
      ))}
    </div>
  );
}

interface Slide {
  id: number;
  img: string;
}

interface SliderSectionProps {
  title: string;
  slides: Slide[];
}

function SliderSection({ title, slides }: SliderSectionProps) {
  const swiperRef = useRef<any>(null);

  // Process slides to ensure total count is a multiple of 6
  const getProcessedSlides = (): Slide[] => {
    let arr = [...slides];
    const remainder = arr.length % 6;
    if (remainder !== 0) {
      const extra = 6 - remainder;
      arr = arr.concat(arr.slice(0, extra));
    }
    return arr;
  };

  // Base slides that are multiple of 6
  const baseSlides = getProcessedSlides();
  const total = baseSlides.length;

  // Duplicate slides three times to simulate infinite scrolling
  const infiniteSlides = [...baseSlides, ...baseSlides, ...baseSlides];

  return (
    <section className="mb-2">
      <div className="slider-container bg-[#000000] relative w-full mx-auto overflow-hidden py-11">
        <Swiper
          ref={swiperRef}
          initialSlide={total} // Start from the middle copy
          loop={false} // Loop is handled manually
          slidesPerView={6}
          spaceBetween={5}
          className="h-full shadow-none brightness-100 flex"
        >
          {infiniteSlides.map((item, index) => (
            <SwiperSlide
              key={index} // index used as key since duplicates exist
              className="h-[124px] flex items-center justify-center shadow-none"
            >
              <div className="relative w-full h-full flex transition-all duration-300 hover:scale-105">
                <div className="">
                  <Image
                    // src={item.img}
                    src={"/assets/img.png"}
                    alt={`Slide ${item.id}`}
                    width={293}
                    height={457}
                    className="] flex rounded"
                    priority
                  />
                </div>
              </div>
              <div className="text-white flex items-center justify-end ">
                <Image
                  src="/assets/Heart.png"
                  alt={"heart"}
                  width={25}
                  height={22}
                />
                <div>777</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
