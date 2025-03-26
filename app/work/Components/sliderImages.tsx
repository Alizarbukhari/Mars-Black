'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { socialSlid } from '../../../data/utils/workslidedata';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function SliderImages() {
  const [swiperDirection, setSwiperDirection] = useState<'horizontal' | 'vertical'>('horizontal'); // Keep track of direction

  const handlePrevClick = () => {
    setSwiperDirection('horizontal'); // Set direction to normal
  };

  const handleNextClick = () => {
    setSwiperDirection('horizontal'); // Set direction to normal
  };

  return (
    <div
      className="slider-container bg-[#000000] "
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {/* Custom Navigation Buttons */}
             {/* Navigation Arrows */}
             <div onClick={handlePrevClick} className="arrow-prev absolute top-4 left-4 z-20 text-white"><MdKeyboardArrowLeft size={60} /></div>
                <div  onClick={handleNextClick} className="arrow-next absolute top-4 right-4 z-20 text-white"><MdKeyboardArrowRight size={60} /></div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true} // Enable looping
        centeredSlides={true}
        slidesPerView={5}
        direction={swiperDirection} // Set the direction based on button click
        style={{ padding: ' 0' }}
      >
        {socialSlid.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.img}
              alt={`Slide ${item.id}`}
              width={221}
              height = {124}
              className=' w-[221px] h-[124px] '
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
