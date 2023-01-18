import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Header = () => {
    const [nav, setNav] = useState(false);
    const contents = [
        {
            id: 1,
            content: 'firstpage',
        },
        {
            id: 2,
            content: 'main',
        },
        {
            id: 3,
            content: 'letter',
        },
        {
            id: 4,
            content: 'message',
        },
        {
            id: 5,
            content: 'lastpage',
        }
    ]
  return (
    <div className="w-full h-20 px-4 flex justify-between items-center text-white bg-[#FFA1CF] fixed top-0 z-10">
        <div>
            <h1 className="text-5xl font-navFont ml-4">22/7 x 2 + a</h1>
        </div>

        <ul className="hidden md:flex">
            {contents.map(({id, content}) => (
                <li key={id} className="px-4 cursor-pointer capitalize text-2xl">
                    <Link 
                    className="hover:border-b-4 border-[#A7FFE4] duration-300" 
                    to={content} 
                    smooth duration={500}
                    > 
                        {content} 
                    </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-[#FFA1CF]">
                {contents.map(({id, content}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl">
                        <Link
                        className="hover:border-b-4 border-[#A7FFE4] duration-200"
                        onClick={() => setNav(!nav)}
                        to={content}
                        smooth
                        duration={500}
                        >
                            {content}
                        </Link>
                    </li>
                ))}
            </ul>
        )}

    </div>
  )
}

export default Header
