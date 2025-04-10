import React from "react";
import WorkHeader from "./Components/workHeader";
import SliderImages from "./Components/sliderImages";
import Test from "./Components/test";
import Social from "./Components/social";
import PatnerSection from "./Components/PatnerSection";
import ProfileSection from "../Components/ProfileSection";
import { PatnerData } from "./../../data/utils/PatnersData";
import SliderImagesWIthText from "./Components/SliderImagesWithText";


export default function Work() {
  return (
    <div className=" bg-black w-[100%] ">
      <div>
        <WorkHeader />
      </div>
      {/* <div><SliderImages/></div> */}
      <div className="mt-2">
        <Test />
      </div>
      <div className="mt-8 ">
        <SliderImages />
      </div>
      <div className="h-2"></div>
      <div><Social/></div>
      <div className="mt-8 ">
        <SliderImagesWIthText />
      </div>
      <div className="px-8 pt-[16rem] pb-[8rem]">
        <PatnerSection />
      </div>
      <div >
        <ProfileSection  data={PatnerData}/>
      </div>
    </div>
  );
}
