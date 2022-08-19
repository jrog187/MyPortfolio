import React from "react"
import {FaLinkedinIn, FaGithub } from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from "react-icons/ai"
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link"

const Contact = () =>{
    return(
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2 className="py-4">Get in Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full rounded-xl">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300" src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
                            </div>
                            <div>
                                <h2 className="py-2">Roger Yampang</h2>
                                <p>Fullstack developer</p>
                                <p>I am available for freelance projects or a position as a working student. Contact me and let's figure something out.</p>
                            </div>
                            <div>
                            <p className="uppercase pt-8">Let's connect</p>
                            
                            <div className="flex items-center justify-center justify-between max-w-[330px] m-auto py-4">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><FaLinkedinIn /></div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><FaGithub /></div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineMail /></div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"><BsFillPersonLinesFill /></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="" className="uppercase text-sm py-2">Name</label>
                                        <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="" className="uppercase text-sm py-2">Phone Number</label>
                                        <input type="number" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                        <label htmlFor="" className="uppercase text-sm py-2">Email</label>
                                        <input type="email" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                                </div>
                                <div className="flex flex-col py-2">
                                        <label htmlFor="" className="uppercase text-sm py-2">subject</label>
                                        <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                                </div>
                                <div className="flex flex-col py-2">
                                        <label htmlFor="" className="uppercase text-sm py-2">message</label>
                                        <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact