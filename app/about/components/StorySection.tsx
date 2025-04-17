import Image from "next/image"
import { Badges } from "./badges"
export default function StorySection() {

  return (
    <div className="bg-black text-white min-h-screen w-full font-sans">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <section className="flex flex-col">
          {/* Header with Vector Image */}
          <div className="relative">
            <Image
              src="/about/vector.png"
              width={1256}
              height={543}
              alt="Story header vector"
              className="w-full h-auto"
              priority
            />


          </div>
        </section>
      </div>
      {/* Story text moved inside the relative container */}
      <div className={`text-[20px] flex-col`}>
        <div className="flex flex-col items-center text-center justify-center">
          <span>   At 02 Projects, we're all about pushing creative boundaries and making things that matter.
            Born</span>
          <span> from the minds of two friends, Jonah and Devin, who shared the same 2002 birth year,
            02 is</span>
          <span>more than just a name — it's a reflection of youthful energy,
            an unwavering drive to create, and</span>
          <span>a desire to learn and grow.
            From day one, we've focused on bringing people together and telling</span>
          <span>stories that matter.
            Whether it's through films, photos, or immersive spaces, we're committed</span>
          <span> to capturing the raw, real emotions that make us human,
            while constantly expanding our </span>
          <span> horizons and embracing new possibilities.</span>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <span> We’re not just a company, we’re a family of creators.
            We build spaces and experiences where</span>
          <span>creatives can feel at home, find inspiration,
            and collaborate with like-minded people. Every</span>
          <span>project, big or small, is rooted in authenticity,
            fueled by curiosity, and driven by our shared</span>
          <span>belief in creative expression.
            From our films that take you on emotional journeys, to the</span>
          <span>festivals we host that unite artists and storytellers,
            we aim to make the world feel a little more</span>
          <span>connected and a lot more creative.</span>

        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <span> Looking ahead, we’re not slowing down. Our vision is bold.
            We want to build more spaces for</span>
          <span>creation, expand our reach through workshops and educational programs,
            and inspire the next</span>
          <span>generation of visionary creators. The possibilities are endless, and we’re here to make them</span>
          <span>happen.
            With each new project, we’re not just telling stories — we’re shaping a culture, fostering</span>
          <span>community,
            and building a legacy that’ll live on for years to come.</span>

        </div>
      </div>

      {/* Badges */}
      <Badges />
      {/* Image */}
      <div className="w-full">

      </div>
      {/* image div */}
      <div className="w-full flex justify-center">
        <div className="w-[80%] bg-green-500">
          <Image
            src="/about/devin.svg"
            width={1827}
            height={1059}
            alt="People sitting on a bench"
            className="w-full h-auto object-cover grayscale"
          />

        </div>
      </div>
      {/* Team members */}
      <div className=" w-full flex justify-center items-center">
        <div className="w-[75%] flex items-center   justify-between py-16 mt-11 ">
          <div className="text-center text-[25px]">
            <h3 className="font-extrabold mb-7">
              JONAH MAZER
            </h3>

            <div className="text-[20px] leading-7">
              <p className=" text-[20px]">
                Co-Founder
              </p>
              <p>jonah@02projects.com</p>
              <p>(818) 730-9912</p>
              <p>New York, NY 10012</p>
            </div>
          </div>

          <div className="text-center ">
            <div className="mx-auto relative">
              <Image
                src="/about/lungs-icon.png"
                width={320}
                height={320}
                alt="Powered by passion"
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center text-[25px]  ">
            <h3 className="font-bold mb-7"> DEVIN ALTMAN</h3>

            <div className="text-[20px] leading-7 ">
              <p className="text-[20px]">Co-Founder</p>
              <p>devin@02projects.com</p>
              <p>(818) 312-5502</p>
              <p>Los Angeles, CA 91367</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
