import { WorkSlideType } from "@/data/types/workSlideTypes";
import Link from "next/link";
import Image from "next/image";
type Props = {
    data : WorkSlideType[];
}
export default function ProfileSection( props :Props  ) {
  return (
    <div className="w-full pt-[6rem] pb-[4rem ">
    <div className="grid gap-x-[2rem] gap-y-[4rem] grid-rows-auto grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]">
      {props.data.map((social: WorkSlideType) => (
        <div key={social.id} className="">
          {/* Componnt */}
          <Link
            className="text-white text-center text-ellipsis flex flex-col justify-start items-center relative overflow-hidden"
            href={`https://www.instagram.com/${social.instaName}`}
          >
            <div className="z-[12] aspect-[1] rounded-full w-[10rem] relative overflow-hidden transform translate-x-0 translate-y-0 translate-z-0 scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0">
              <Image
                src={social.image}
                alt="media"
                layout="fill"
                className=""
              />
            </div>
            <div className="z-[12] mt-3 p-2 px-4 relative overflow-hidden">
              {/* traanstion */}

              <div className="transform  scale-x-100 scale-y-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0">
                <div className="flex flex-col justify-start items-center">
                  <div className="relative z-20 inline-flex group w-fit">
                    {/* Background Layer */}
                    <div
                      className="absolute inset-y-0 left-0 w-0 bg-white 
              transition-all duration-500 group-hover:w-full 
              -z-10 h-[110%] top-[-5%] rounded-sm"
                    ></div>

                    {/* Text */}
                    <span
                      className="text-white group-hover:text-black 
             text-[50px] font-bold uppercase px-2"
                    >
                      <div className="tracking-[.1rem] uppercase max-w-[70rem] text-[1.75rem] font-normal leading-[1.15]">
                        {social.title}
                      </div>
                      <div className="uppercase max-w-[42rem] text-[.9rem] font-thin">
                        @{social.instaName}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}
