import React from 'react'
import Fade from 'react-reveal/Fade'
import fiaFirstPage from '../assets/fia-first-page.png'
import pibesdey from '../assets/hepibertdey.mp3'
// import foru from '../assets/thereforu.mp3'

const FirstPage = () => {
  return (
    <div name="firstpage" className="w-full h-screen bg-gradient-to-tr from-[#FFF] to-[#FFD6EC] text-4xl text-center relative">
      <Fade bottom>
        <div className="max-w-screen-lg h-full flex flex-col gap-5 mx-4 md:mx-auto justify-center items-center">
            <h1>Eitss, halo bu dokter</h1>
            <audio controls loop src={pibesdey} />
            <h1>Play dulu la yakan ecek eceknya <br /> biar gak senyap x</h1>
        </div>
        <div className="w-80 flex justify-center items-center gap-2 absolute bottom-8 right-8">
            <h1>Dah idupkan lagu? Lanjut scroll masee</h1>
            <img width={80} src={fiaFirstPage} alt="" />
        </div>
      </Fade>
    </div>
  )
}

export default FirstPage