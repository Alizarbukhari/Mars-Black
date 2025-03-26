import React from 'react';

export default function VideoSection() {
  return (
    <div className='relative w-full h-[500px] '>
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover'>
        <source src='/video.mp4' type="video/mp4"/>
      </video>
    
      {/* Text Overlay - Words in a line */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
<div className='items-start'>
<div >  
        <p>Monster Children is ....</p>
</div>
        {/* Horizontal Layout for Words */}
        <div className="flex  text-6xl  flex-col font-bold">
          <h1>Skate.</h1>
          <h1>Surf.</h1>
          <h1>Music.</h1>
          <h1>Art.</h1>
          <h1>Travel.</h1>
        </div>
<div>        <p className="mt-4 text-sm ">20 Years of Publishing</p>
</div>
</div>
      </div>
    </div>
  );
}
