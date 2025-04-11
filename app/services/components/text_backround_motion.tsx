"use client";

import { IoMdArrowRoundUp } from "react-icons/io";
import Image from "next/image";

export default function Text_Backround_Motion() {
    const data = [
        {
            id: 1,
            text: "creative",
            image: ["/servies_images/social1.jpeg", "/servies_images/social2.jpeg", "/servies_images/social3.jpeg", "/servies_images/social4.jpeg", "/servies_images/social5.jpeg"],
            first_text: ["Creative Direction", "Brand Identity", "Logomarks", "cover art", "merchandise"],
            second_text: ["poster design", "packaging direction", "video editing", "website design"]
        },
        {
            id: 2,
            text: "social",
            image: ["/servies_images/social1.jpeg", "/servies_images/social2.jpeg", "/servies_images/social3.jpeg", "/servies_images/social4.jpeg", "/servies_images/social5.jpeg"],
            first_text: ["Creative Direction", "Brand Identity", "Logomarks", "cover art", "merchandise"],
            second_text: ["poster design", "packaging direction", "video editing", "website design"]
        },
        {
            id: 3,
            text: "communications",
            image: ["/servies_images/social1.jpeg", "/servies_images/social2.jpeg", "/servies_images/social3.jpeg", "/servies_images/social4.jpeg", "/servies_images/social5.jpeg"],
            first_text: ["Creative Direction", "Brand Identity", "Logomarks", "cover art", "merchandise"],
            second_text: ["poster design", "packaging direction", "video editing", "website design"]
        }
    ];

    return (
        <>
            {data.map((item) => (
                <div key={item.id} className='w-full h-[500px] bg-black flex p-8 relative group text-white
        before:absolute before:top-0 before:left-8 before:right-8 
        before:h-[4px] before:bg-white'>
                    {/* Left content */}
                    <div className='w-[50%] relative'>
                        <div className='flex gap-4 p-4 relative'>
                            {/* ID Element with Hover Effect */}
                            <div className="transition-transform duration-300 group-hover:-translate-y-2
w-6 h-6 mt-2 bg-white text-black flex items-center justify-center rounded-full shadow-md">
                                {item.id}
                            </div>

                            {/* Text with hover background + text color */}
                            <div className="flex flex-col gap-10">
                                <div className="relative z-20 inline-flex group w-fit">
                                    {/* Background Layer */}
                                    <div className="absolute inset-y-0 left-0 w-0 bg-yellow-300 
                    transition-all duration-500 group-hover:w-full 
                    -z-10 h-[110%] top-[-5%] rounded-sm"></div>

                                    {/* Text */}
                                    <span className="text-white group-hover:text-black 
                   text-[50px] font-bold uppercase px-2">
                                        {item.text}
                                    </span>
                                </div>

                                {/* Images Container */}
                                <div className="flex gap-4 mt-4">
                                    {item.image.map((img, index) => (
                                        <div key={index} className="relative overflow-hidden w-[100px] h-[100px] group">
                                            <Image
                                                src={img}
                                                alt="image"
                                                width={150}
                                                height={150}
                                                className="object-cover absolute 
                    opacity-0 translate-x-[-100%] translate-y-[100%]
                    group-hover:opacity-100 
                    group-hover:translate-x-0 group-hover:translate-y-0
                    transition-all duration-500 ease-out w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className='w-[50%] flex justify-center gap-4'>
                        <div className='w-[200px] p-2'>
                            {item.first_text.map((text, index) => (
                                <div className="text-[20px] uppercase font-semibold" key={index}>{text}</div>
                            ))}
                        </div>
                        {/* second text */}
                        <div className='w-[200px] h-auto p-2'>
                            {item.second_text.map((text, index) => (
                                <div className="text-[20px] uppercase font-semibold" key={index}>{text}</div>
                            ))}
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='absolute right-3 top-3 
        opacity-0 translate-x-[-100%] translate-y-[100%]
        group-hover:opacity-100 
        group-hover:translate-x-0 group-hover:translate-y-0
        transition-all duration-500 ease-out
        z-50'>
                        <IoMdArrowRoundUp className="text-[60px] rotate-45 text-green-400" />
                    </div>
                </div>
            ))}
        </>
    );
}
