import React from 'react'
import Fade from 'react-reveal/Fade'

const Message = () => {
  return (
    <div name="message" className="w-full h-screen bg-gradient-to-br from-[#FFF] to-[#FFD6EC]">
      <Fade bottom>
        <div className="max-w-screen-lg h-full flex flex-col justify-center items-center mx-auto gap-4">
            <h1 className="text-4xl">Buat corat coret</h1>
            <form 
            action="https://getform.io/f/82e0564e-d1c8-44d4-8aad-0383b5e2ab88"
            method="POST"
            className="w-60 h-72 md:w-96 md:h-96 flex flex-col justify-center items-center gap-6"
            >
                <textarea 
                name="message" 
                placeholder="Enter your Message"
                className="w-full h-full p-4 rounded-md text-2xl border-2" />
                <button className="w-20 h-10 text-xl hover:scale-110 duration-150 active:scale-90 rounded-lg bg-gradient-to-r from-[#FFA1CF] via-[#FFD6EC] to-[#FFF]">Send</button>
            </form>
        </div>
      </Fade>
    </div>
  )
}

export default Message