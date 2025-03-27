
import Image from "next/image"
import Link from "next/link"
export default function ServicesSection() {
  const services = [
    {
      title: "Culture",
      imageSrc: "/servies_images/header1.png",
      href: "/services/culture",
    },
    {
      title: "Audience",
      imageSrc: "/servies_images/header2.png",
      href: "/services/audience",
    },
    {
      title: "Network",
      imageSrc: "/servies_images/header3.png",
      href: "/services/network",
    },
  ]

  return (
    <>
      <div className="w-[100%] h-auto">
        {/* Images container */}
        <div className="w-full h-auto md:h-[500px] bg-black flex flex-col md:flex-row gap-1 px-1">
          {services.map((service, index) => (
            <div 
              key={index}
              className="md:w-[33%] w-full h-[470px] bg-green-500 flex items-center justify-center relative group"
            >
              {/* Text overlay */}
             
              <div className="absolute text-white z-10 text-[30px] font-bold">
              <Link href={service.href}>{service.title}</Link>
              </div>
             
              
              {/* Image container */}
              <div className="w-full h-full bg-black">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Gray background div */}
        <div className="w-full h-[80px] bg-[#444444]"></div>
      </div>
    </>
  )
}