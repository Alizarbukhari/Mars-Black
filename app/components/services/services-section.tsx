import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  imageSrc: string
  href: string
}

const ServiceCard = ({ title, imageSrc, href }: ServiceCardProps) => {
  return (
    <Link href={href} className="relative block h-[500px] overflow-hidden group">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300">
        <div className="absolute bottom-20 left-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white">{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesSection() {
  const services = [
    {
      title: "Culture",
      imageSrc: "/images/culture.png",
      href: "/services/culture",
    },
    {
      title: "Audience",
      imageSrc: "/images/audience.png",
      href: "/services/audience",
    },
    {
      title: "Network",
      imageSrc: "/images/network.png",
      href: "/services/network",
    },
  ]

  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} imageSrc={service.imageSrc} href={service.href} />
        ))}
      </div>
    </section>
  
  )
}

