
import react, {useRef,useEffect} from "react"
import Image from "next/image"


export const Badges = ()=>{
    const scrollRef = useRef<HTMLDivElement>(null);
    

    return(
         <div className="w-full flex items-center justify-center py-16 mt-11 ">
              <div className="w-[80%] flex flex-row items-center  justify-between  ">
                <div className="w-[250px] h-[250px]"> 
                  <Image 
                  src= "/about/la-icon.png"
                  alt="La Icon"
                  width={481}
                  height={481}
                  className="h-full w-full"
                  />
                </div>
                <div className=" text-[30px] font-bold">LOS ANGELES | NEW YORK</div>
                <div className="w-[250px] h-[250px]"> 
                  <Image 
                  src= "/about/ny-icon.png"
                  alt="La Icon"
                  width={481}
                  height={481}
                  className="h-full w-full"
                  /> </div>
                
              
             
              </div></div>
    )
}

