import Image from "next/image";
import Link from "next/link";
import { socicalData } from "./../../data/utils/socialData";
import { WorkSlideType } from "@/data/types/workSlideTypes";
import MonsterChild from "./compoenent/MonsterChild";
export default function SocailContent() {
  return (
    <section className="bg-black">
      <div className=" bg-black ">
        <MonsterChild />
      </div>

      {/* Main Container */}
      <div className="flex  flex-col w-full px-8 pt-[16rem] pb-[8rem]">
        {/* Social Section */}
        <div className="w-full  flex">
          <div className="flex flex-1 justify-start items-start max-w-[50%]">
            <h1 className="z-[2] tracking-[.2rem] uppercase mix-blend-exclusion text-[4.2rem] font-normal leading-[1.05]">
              Social
            </h1>
          </div>
          <div className="flex flex-col flex-1 justify-start items-start max-w-[50%]">
            <p className="text-normal leading-[1.65] max-w-[42rem] text-[.9rem] font-thin">
              We craft compelling content that resonates across all platforms,
              sparking engagement and driving meaningful conversations. By
              leveraging our deep understanding of the landscape, we create
              campaigns that stand out amongst the vast ocean of social media
              content. Whether it’s finding a viral moment or helping you
              sustain your brand story, our social campaigns are designed to cut
              through the noise, amplify your message, and build a loyal
              community around your brand.
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-full pt-[6rem] pb-[4rem ">
          <div className="grid gap-x-[2rem] gap-y-[4rem] grid-rows-auto grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))]">
            {socicalData.map((social: WorkSlideType) => (
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
      </div>
    </section>
  );
}
