import React from 'react'
import Fade from 'react-reveal/Fade'
import fiaMain from '../assets/fia-main.png'

const Main = () => {
  return (
    <div name="main" className="w-full h-screen bg-gradient-to-br from-[#FFF] to-[#FFD6EC]">
        <Fade bottom>
            <div className="max-w-screen-lg h-full mx-auto md:pb-0 flex flex-col-reverse gap-y-5 md:flex-row justify-center items-center px-4">
                <div className="md:w-3/4 flex flex-col justify-center gap-y-5">
                    <h1 id="fia" data-text="Fifia Eltha Zahrani" className="w-80 h-full text-6xl md:text-8xl font-bold">
                        Fifia Eltha Zahrani
                    </h1>
                    <p className="text-3xl md:text-4xl">
                        Hepi berthdey tu yu
                    </p>
                </div>
                <div className="w-[200px] md:w-1/4 shadow-xl">
                    <img className="w-full" src={fiaMain} alt="" />
                </div>
            </div>
        </Fade>
    </div>
  )
}

export default Main
