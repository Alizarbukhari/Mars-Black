import Image from "next/image"

export default function ServicesPage() {
  return (
    <main>
      <section className="w-full bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Culture Panel */}
          <div className="relative h-[500px] overflow-hidden">
            <Image src="/images/culture.jpg" alt="Culture" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300">
              <div className="absolute bottom-20 left-10">
                <h2 className="text-4xl md:text-5xl font-serif">Culture</h2>
              </div>
            </div>
          </div>

          {/* Audience Panel */}
          <div className="relative h-[500px] overflow-hidden">
            <Image src="/images/audience.jpg" alt="Audience" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300">
              <div className="absolute bottom-20 left-10">
                <h2 className="text-4xl md:text-5xl font-serif">Audience</h2>
              </div>
            </div>
          </div>

          {/* Network Panel */}
          <div className="relative h-[500px] overflow-hidden">
            <Image src="/images/network.jpg" alt="Network" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300">
              <div className="absolute bottom-20 left-10">
                <h2 className="text-4xl md:text-5xl font-serif">Network</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

