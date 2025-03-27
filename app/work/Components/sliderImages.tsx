'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { socialSlid } from '../../../data/utils/workslidedata';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function SliderImages() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className='h-[300px] w-full'>  
    <div className=' mb-6 ml-6'> 
    <h1 className=' text-[20px] font-sans text-red-50'> SURF </h1>

    </div>
      <div
      className="slider-container bg-[#000000] h-[200px] " // Fixed container height
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Custom Navigation Buttons */}
      <div ref={prevRef} className="arrow-prev absolute top-2-translate-y-1/2 left-4 z-20 text-white cursor-pointer">
        <MdKeyboardArrowLeft size={60} />
      </div>
      <div ref={nextRef} className="arrow-next absolute top-8 -translate-y-1/2 right-4 z-20 text-white cursor-pointer">
        <MdKeyboardArrowRight size={60} />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={30} // Add spacing between slides
        direction="horizontal"
        className="h-full" // Full height for Swiper
      >
        {socialSlid.map((item) => (
          <SwiperSlide 
            key={item.id}
            className="h-[124px] flex items-center justify-center" // Fixed slide height
          >
            <div className="relative w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75"
              style={{ willChange: 'opacity' }}
>  <div className="absolute inset-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={item.img}
                alt={`Slide ${item.id}`}
                layout="fill"
                className=" w-[300px] h-[124px]" // Maintain aspect ratio
                priority
              />
            </div>z
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>

  );
}