import React from 'react'
import WorkHeader from './Components/workHeader'
import SliderImages from './Components/sliderImages'
import Test from './Components/test'


export default function Work
() {
  return (
    <div className=' bg-black w-[100%] '>
      <div><WorkHeader/></div>
      {/* <div><SliderImages/></div> */}
      <div className='mt-2'><Test/></div>
      <div className='mt-8 '>
        <SliderImages/>
      </div>
      
      
  
        
    </div>
  )
}
