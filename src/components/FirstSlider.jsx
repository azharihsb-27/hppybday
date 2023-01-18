import React from 'react'
import fiaSlideFirst from '../assets/fia-slide1.png'

const FirstSlider = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-bl from-[#FFD6EC] to-[#FFF]">
        <div className="w-max-screen-lg h-full mx-auto flex justify-center items-center gap-6">
          <marquee scrollamount="20" behavior="scroll" direction="left">
            <p className="text-2xl">iklan dulu maseee</p>
            <img width={150} src={fiaSlideFirst} alt="" />
          </marquee>
        </div>
    </div>
  )
}

export default FirstSlider