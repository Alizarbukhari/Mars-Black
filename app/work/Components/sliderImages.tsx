'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { slideImg } from '../../../data/utils/workslidedata';

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
      <button
        className="swiper-button-prev custom-nav"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          zIndex: 10,
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handlePrevClick} // Handle reverse direction
      >
        <MdKeyboardArrowLeft size={40} />
      </button>
      <button
        className="swiper-button-next custom-nav"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          zIndex: 10,
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleNextClick} // Keep direction normal
      >
        <MdKeyboardArrowRight size={40} />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true} // Enable looping
        centeredSlides={true}
        slidesPerView={2}
        direction={swiperDirection} // Set the direction based on button click
        style={{ padding: ' 0' }}
      >
        {slideImg.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt={`Slide ${item.id}`}
              style={{
                width: '100%',
                height: '432px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
