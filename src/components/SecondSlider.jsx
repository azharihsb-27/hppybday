import React from 'react'
import fiaSlideSecond from '../assets/fia-slide2.png'

const SecondSlider = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-bl from-[#FFD6EC] to-[#FFF]">
        <div className="w-max-screen-lg h-full mx-auto flex justify-center items-center gap-6">
          <marquee scrollamount="20" behavior="scroll" direction="right">
            <img width={150} src={fiaSlideSecond} alt="" />
            <p className="text-2xl">iklan lagi hwehwehwe</p>
          </marquee>
        </div>
    </div>
  )
}

export default SecondSlider