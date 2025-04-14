import Image from "next/image"

export default function StorySection() {
  return (
    <div className="bg-black text-white min-h-screen w-full font-sans">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="flex flex-col gap-8">
          {/* Header */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase">
              THE STORY
              <br />
              <span className="inline-block">
                SO <span className="md:ml-16">FAR</span>
              </span>
            </h1>
          </div>

          {/* Story text */}
          <div className="space-y-4 text-sm md:text-base opacity-80">
            <p>
              At our core, we are innovators and storytellers with a passion for creating meaningful experiences. Our
              journey began with a simple idea that has evolved into the brand you see today. We've navigated
              challenges, celebrated victories, and continuously refined our vision along the way.
            </p>
            <p>
              What started as a small project between friends has grown into a movement that spans across cities and
              communities. We believe in the power of collaboration and the impact that thoughtful design can have on
              everyday life.
            </p>
            <p>
              Our commitment to quality and authenticity remains unwavering as we continue to expand our horizons and
              push the boundaries of what's possible. Every product we create is a testament to our dedication and the
              values we hold dear.
            </p>
          </div>

          {/* Badges */}
          <div className="flex justify-center gap-6 py-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center">
                <div className="text-[10px] md:text-xs font-bold text-center">
                  <div>ESTABLISHED</div>
                  <div>2020</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500 text-white flex items-center justify-center">
                <span className="text-2xl font-bold">M</span>
              </div>
              <span className="text-xs mt-2">LOS ANGELES | NEW YORK</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center">
                <div className="text-[10px] md:text-xs font-bold text-center">
                  <div>MADE IN</div>
                  <div>USA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/about/devin.svg"
              width={600}
              height={300}
              alt="People sitting on a bench"
              className="w-full h-auto object-cover grayscale"
            />
          </div>

          {/* Team members */}
          <div className="flex justify-between pt-4">
            <div className="text-center">
              <h3 className="font-bold">JAMES WALKER</h3>
              <p className="text-xs text-gray-400">Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto relative">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                    <div className="text-[8px] font-bold">POWERED BY</div>
                    <div className="text-xs font-bold mt-1">PASSION</div>
                  </div>
                </div>
                <p className="text-xs mt-1 text-center">02</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold">DEVIN ALTMAN</h3>
              <p className="text-xs text-gray-400">Co-Founder</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
