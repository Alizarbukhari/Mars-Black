"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { slideImg } from '../../../data/utils/workslidedata';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function Test() {

    return (
        <div className="relative w-full h-[50vh] overflow-visible bg-black">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev',
                }}
                loop={true}
                centeredSlides={true}
                slidesPerView={1.65}
                spaceBetween={15}
                className="h-full"
            >
                {slideImg.map((item) => (
                    <SwiperSlide key={item.id} className="!w-[60%]">
                        <div className={`h-full w-[100%] `}>
                           <Image
                           src={item.img}
                           alt="Picture of the author"
                           layout="fill"
                           
                           className={`rounded-lg w-full h-full relative `}
                           />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Arrows */}
                {/* <div className="arrow-prev absolute top-1/2 left-4 z-20 text-white"><MdKeyboardArrowLeft size={60} /></div>
                <div className="arrow-next absolute top-1/2 right-4 z-20 text-white"><MdKeyboardArrowRight size={60} /></div> */}
            </Swiper>

            {/* Required CSS for slide positioning */}
            <style jsx global>{`
        .swiper-slide:not(.swiper-slide-active)::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            pointer-events: none; /* Click through allow kare */
            transition: opacity 0.3s ease; /* Smooth effect ke liye */
            }

            .swiper-slide-active::after {
            opacity: 0 !important; /* Active slide par overlay hide */
            }

            /* Specific positioning for next/prev slides */
            .swiper-slide-next {
            transform: translateX() scale(1) !important;
            }

            .swiper-slide-prev {
            transform: translateX() scale(1) !important;
            }

      `}</style>
        </div>
    );
}

//             background: rgba(0,0,0,0.5); /* 50% opacity black layer */  remove because of overlay