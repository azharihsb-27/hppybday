import React from 'react'
import Fade from 'react-reveal/Fade'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import fiaLastPage from '../assets/fia-last-page.png'
import foru from '../assets/thereforu.mp3'

const LastPage = () => {
  return (
    <div name="lastpage" className="w-full h-screen bg-gradient-to-bl from-[#FFD6EC] to-[#FFF] relative">
      <Fade bottom>
        <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center gap-6 text-4xl">
            <img width={300} src={fiaLastPage} alt="" />
            <h1 className="mx-8 text-justify">Happy birthday and good luck for ur OSCE bu dokter, <span className="text-3xl"> 화이팅!! </span> </h1>
            <div className="flex justify-center items-center gap-6 border-t-2 border-[#A7FFE4]">
              <p>Khusus section ini pake ini aja</p>
              <audio controls src={foru}></audio>
            </div>
        </div>
        <footer className="w-full h-16 md:px-20 pb-2 absolute bottom-0 flex justify-start items-center bg-gradient-to-r from-[#FFA1CF] to-[#FF74B1] text-xl">
          <ul className="w-full flex justify-center md:justify-end items-center gap-20">
            <li>
              <a className="hover:border-b-4 border-[#A7FFE4] duration-200 cursor-pointer" href="https://www.instagram.com/fiaazahranii/">
                <FaInstagram /> 
                <span>@fiaazahranii</span>
              </a>
            </li>
            <li>
              <a className="hover:border-b-4 border-[#A7FFE4] duration-200 cursor-pointer" href="https://web.whatsapp.com/">
                <FaWhatsapp /> 
                <span>+62 852-1374-9634</span>
              </a>
            </li>
          </ul>
        </footer>
      </Fade>
    </div>
  )
}

export default LastPage