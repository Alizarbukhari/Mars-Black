'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { socialText, socialSlid, socialSlid2, socialSlid3, socialSlid4, socialSlid5 } from '../../../data/utils/socailslidedata2';
import Image from 'next/image';
import 'swiper/css';

const allSlides = [socialSlid, socialSlid2, socialSlid3, socialSlid4, socialSlid5];

export default function MonsterChild() {
  return (
    <div className='w-full bg-black'>
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

  // Navigation: always slide in the same direction
  const handlePrev = () => {
    const swiper = swiperRef.current.swiper;
    let newIndex = swiper.activeIndex - 6;
    swiper.slideTo(newIndex, 600);
    // If index goes before the first copy, reset to the equivalent index in the middle copy without animation
    if (newIndex < total) {
      swiper.once('transitionEnd', () => {
        swiper.slideTo(newIndex + total, 0);
      });
    }
  };

  const handleNext = () => {
    const swiper = swiperRef.current.swiper;
    let newIndex = swiper.activeIndex + 6;
    swiper.slideTo(newIndex, 600);
    // If index exceeds the middle copy, reset back to middle copy without animation
    if (newIndex >= total * 2) {
      swiper.once('transitionEnd', () => {
        swiper.slideTo(newIndex - total, 0);
      });
    }
  };

  return (
    <section className='mb-2'>
      <div className='mb-2 ml-6'> 
        <h1 className='text-[20px] font-sans text-red-50'>{title}</h1>
      </div>
      
      <div className="slider-container bg-[#000000] relative w-full mx-auto overflow-hidden">
        {/* Custom Navigation Arrows */}
        <div onClick={handlePrev} className="arrow-prev absolute transition-opacity duration-300 ease-in-out hover:scale-125 top-[50%] -translate-y-1/2 left-4 z-20 text-white cursor-pointer">
          <MdKeyboardArrowLeft size={40} />
        </div>
        <div onClick={handleNext} className="arrow-next absolute transition-opacity duration-300 ease-in-out hover:scale-125 top-[50%] -translate-y-1/2 right-1 z-20 text-white cursor-pointer">
          <MdKeyboardArrowRight size={40} />
        </div>

        <Swiper
          ref={swiperRef}
          initialSlide={total} // Start from the middle copy
          loop={false}     // Loop is handled manually
          slidesPerView={7}
          spaceBetween={1}
          
          className="h-full shadow-none brightness-100 flex"
        >
          {infiniteSlides.map((item, index) => (
            <SwiperSlide 
              key={index} // index used as key since duplicates exist
              className="h-[124px] flex items-center justify-center shadow-none"
            >
              <div className="relative w-full h-full flex transition-all duration-300 hover:scale-105">
                <div className="w-[200px] h-[274px]">
                  <Image
                    src={item.img}
                    alt={`Slide ${item.id}`}
                    width={181}
                    height={274}
                    className="w-[200px] h-[274px] flex"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
