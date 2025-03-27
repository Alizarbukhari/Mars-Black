'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { socialText, socialSlid, socialSlid2, socialSlid3, socialSlid4, socialSlid5 } from '../../../data/utils/workslidedata';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Array of all slide datasets
const allSlides = [socialSlid, socialSlid2, socialSlid3, socialSlid4, socialSlid5];

export default function SliderImages() {
  return (
    <div className='w-full'>
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

interface SliderSectionProps {
  title: string;
  slides: Array<{ id: number; img: string }>;
}

function SliderSection({ title, slides }: SliderSectionProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className='mb-2'>
      <div className='mb-2 ml-6'> 
        <h1 className='text-[20px] font-sans text-red-50'>{title}</h1>
      </div>
      
      <div className="slider-container bg-[#000000] "
        style={{
          position: 'relative',
          width: '100%',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* Navigation Arrows */}
        <div ref={prevRef} className="arrow-prev absolute transition-opacity duration-300 ease-in-out hover:scale-125  top-6 -translate-y-1/2 left-4 z-20 text-white cursor-pointer">
          <MdKeyboardArrowLeft size={60} />
        </div>
        <div ref={nextRef} className="arrow-next absolute transition-opacity duration-300 ease-in-out hover:scale-125 top-6 -translate-y-1/2 right-1 z-20 text-white cursor-pointer">
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
          slidesPerView={6} // Ya fixed value like 4
          spaceBetween={10}
          className="h-full shadow-none brightness-100 flex"
        >
          {slides.map((item) => (
            <SwiperSlide 
              key={item.id}
              className="h-[124px] flex items-center justify-center shadow-none"
            >
              <div className="relative w-full h-full flex  transition-all duration-300 hover:scale-105 ">
                <div className=" w-[221px] h-[124px] ">
                  <Image
                    src={item.img}
                    alt={`Slide ${item.id}`}
                    width={221}
                    height={124}
                    className=" w-[221px] h-[124px] flex   "
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