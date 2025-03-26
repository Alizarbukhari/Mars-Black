"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

interface PartnerLogo {
  src: string
  alt: string
}

const partnerLogos: PartnerLogo[] = [
  { src: "/images/partners/canon.svg", alt: "Canon" },
  { src: "/images/partners/levies.svg", alt: "Levi's" },
  { src: "/images/partners/patagonia-1.svg", alt: "Patagonia" },
  { src: "/images/partners/canon.svg", alt: "Slow & Low Rock and Rye" },
  { src: "/images/partners/corona.svg", alt: "Corona" },
  { src: "/images/partners/Adobe.svg", alt: "Adobe" },
  { src: "/images/partners/monster-energy.svg", alt: "Monster Energy" },
  { src: "/images/partners/converse.svg", alt: "Converse" },
  { src: "/images/partners/redbull.svg", alt: "Red Bull" },
  { src: "/images/partners/canon.svg", alt: "Vans" },
  { src: "/images/partners/gopro.svg", alt: "GoPro" },
  { src: "/images/partners/fender.svg", alt: "Fender" },
  { src: "/images/partners/barrel.svg", alt: "10 Barrel Brewing Co" },
  { src: "/images/partners/greenpeace.svg", alt: "Greenpeace" },
  { src: "/images/partners/g-shock.svg", alt: "G-Shock" },
  { src: "/images/partners/white-claw.svg", alt: "White Claw" },
  { src: "/images/partners/canon.svg", alt: "Beats by Dr. Dre" },
  { src: "/images/partners/pabst.svg", alt: "Pabst Blue Ribbon" },
  { src: "/images/partners/sun.png", alt: "Sun Bum" },
  { src: "/images/partners/adidas-4.svg", alt: "Adidas" },
]

const PartnerLogo = ({ logo, index }: { logo: PartnerLogo; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        height: "120px",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={logo.src || "/placeholder.svg"}
          alt={logo.alt}
          width={160}
          height={80}
          className="max-w-[80%] max-h-[80%] object-contain brightness-0 invert"
        />
      </div>
    </div>
  )
}

export default function PartnersGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const categories = ["all", "technology", "lifestyle", "sports", "media"]

  // This would be implemented with real categories in a production app
  const getFilteredLogos = () => {
    if (activeCategory === "all") return partnerLogos
    // This is just a mock implementation - in reality, you'd have category data for each logo
    return partnerLogos.filter((_, index) => {
      if (activeCategory === "technology") return index % 4 === 0
      if (activeCategory === "lifestyle") return index % 4 === 1
      if (activeCategory === "sports") return index % 4 === 2
      if (activeCategory === "media") return index % 4 === 3
      return false
    })
  }

  const filteredLogos = getFilteredLogos()

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Some of our Partners.</h2>
          
        </div>

        {/* Category Filter
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div> */}

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredLogos.map((logo, index) => (
            <PartnerLogo key={index} logo={logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

