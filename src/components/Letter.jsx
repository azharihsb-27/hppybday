import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

const Letter = () => {
  const [id, setId] = useState(0)
  const letter = [
    'Halo Fifia Eltha Zahrani Ginting',
    'Selamat ulang tahun',
    'Sheeesh dah 20 ',
    'Walaupun banyak tugas',
    'Jangan lupa buat istirahat',
    'dan',
    'Makan juga teratur',
    'Percuma kan jadinya',
    'Kalo kau sakit',
    'Padahal kau sendiri dokter',
    'Ya walaupun dokter gigi',
    'Ahh dan yang terakhir',
    '',
    '.',
    '..',
    '...',
    'Scroll aja pelan-pelan',
    'Nanti bakal tau sendiri',
    'Yang terakhir itu apa',
    'Dari: Yang Mulia, Kasim Azhari',
  ]

  const handleNext = () => {
    id === letter.length - 1 ? setId(id) : setId(currentId => currentId + 1)
  }

  const handlePrev = () => {
    id === 0 ? setId(id) : setId(currentId => currentId - 1)
  }

  return (
    <div name="letter" className="w-full h-screen bg-gradient-to-br from-[#FFF] to-[#FFD6EC]">
      <Fade bottom>
        <div className="max-w-screen-lg h-full mx-auto flex justify-center items-center px-4">
          <div className="w-full flex justify-center items-center">
            <div className="w-[50%] h-80 relative flex justify-center items-center bg-gradient-to-t from-[#FFD6EC] via-[#FFF] to-[#FFA1CF] rounded-xl shadow-xl">
              <button 
              onClick={() => handlePrev()}
              className="w-20 h-10 bg-gradient-to-r active:rotate-[-20deg] duration-75 from-[#FFD6EC] to-[#FFF] shadow-md absolute left-[-90px] md:left-[-40px] text-xl">Prev</button>
              
              <h1 className="text-3xl text-center transition duration-300">{letter[id]}</h1>

              <button 
              onClick={() => handleNext()} 
              className="w-20 h-10 bg-gradient-to-l active:rotate-[20deg] duration-75 from-[#FFD6EC] to-[#FFF] shadow-md absolute right-[-90px] md:right-[-40px] text-xl">Next</button>
            </div>
          </div>
        </div>
        </Fade>
      </div>
  )
}

export default Letter
