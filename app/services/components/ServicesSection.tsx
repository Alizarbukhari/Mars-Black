"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

interface ServicesSectionProps {
  nextSectionId?: string // ID of the next section to scroll to
}

export default function ServicesSection({ nextSectionId = "next-section" }: ServicesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isScrollingToNextSection = useRef(false)

  // Services data with 6 items
  const services = [
    {
      title: "Culture",
      videoSrc: "/servies_images/video.mp4",
      href: "/services/culture",
    },
    {
      title: "Audience",
      videoSrc: "/servies_images/videos/1.mp4", // Replace with your new video path
      href: "/services/audience",
    },
    {
      title: "Network",
      videoSrc: "/servies_images/videos/2.mp4", // Replace with your new video path
      href: "/services/network",
    },
    {
      title: "Strategy",
      videoSrc: "/servies_images/video.mp4", // Replace with your new video path
      href: "/services/strategy",
    },
    {
      title: "Creative",
      videoSrc: "/servies_images/video.mp4",
      href: "/services/creative",
    },
    {
      title: "Production",
      videoSrc: "/servies_images/video.mp4",
      href: "/services/production",
    },
  ]

  // Handle wheel event for horizontal scrolling and transition to next section
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingToNextSection.current) return

      // Check if at the end of horizontal scroll
      const isAtEnd = Math.abs(container.scrollWidth - container.scrollLeft - container.clientWidth) < 10

      if (isAtEnd && e.deltaY > 0) {
        // At the end and scrolling down, transition to next section
        e.preventDefault()
        isScrollingToNextSection.current = true

        const nextSection = document.getElementById(nextSectionId)
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth", block: "start" })
          setTimeout(() => {
            isScrollingToNextSection.current = false
          }, 1000) // Match smooth scroll duration
        } else {
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          })
          setTimeout(() => {
            isScrollingToNextSection.current = false
          }, 1000)
        }
      } else {
        // Scroll horizontally within the container
        e.preventDefault()
        container.scrollLeft += e.deltaY // Smooth horizontal scroll
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [nextSectionId])

  return (
    <div className="w-full h-screen bg-black">
      {/* Videos container */}
      <div
        ref={scrollContainerRef}
        className="w-full h-auto md:h-full bg-black flex flex-col md:flex-row gap-2 px-2 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="md:w-[calc(100%/3-8px)] w-full h-[1244px] md:h-full bg-green-500 flex items-center justify-center relative group flex-shrink-0 overflow-hidden"
          >
            {/* Text overlay */}
            <div className="absolute text-white z-10 text-[30px] font-bold">
              <Link href={service.href} className="hover:text-gray-300 transition-colors duration-300">
                {service.title}
              </Link>
            </div>

            {/* Video container */}
            <div className="w-full h-full bg-black relative" style={{ aspectRatio: "9/16" }}>
              <video
                src={service.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{ transform: "scale(1.2)" }} // Zoom the video by 20%
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}