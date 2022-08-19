import React from "react"
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from "react-icons/ai"
import {FaLinkedinIn, FaGithub } from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Main = () =>{
    return(
        <div id="main" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">LET'S COLLABORATE</p>
                    <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Roger</span></h1>
                    <h1 className="py-4 text-gray-700">A FullStack developer</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">I am fullstack developer specialized in building and designing top digital experiences. Currently, I'm focused on building as much as possible in other to take your website and my skills to the next level</p>
                    <div className="flex items-center justify-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><FaLinkedinIn /></div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><FaGithub /></div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineMail /></div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><BsFillPersonLinesFill /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main