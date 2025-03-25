'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight } from "react-icons/md";
import {slideImg}  from '../../../data/utils/workslidedata';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export default function SliderImages() {
  return (
    <div
      className="slider-container bg-[#000000] "
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
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
      >
        <MdKeyboardArrowRight  size={40} />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={10}
        style={{ padding: '20px 0' }}
      >
        {slideImg.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt={`Slide ${item.id}`}
              style={{
                width: '100%',
                height: '300px', 
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
