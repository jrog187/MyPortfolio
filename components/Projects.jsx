import React from "react"
import Image from "next/image"
import Link from "next/link"
import coinbaseImg from "../public/assets/projects/coinbase.png"
import NetflixImg from "../public/assets/projects/netflix.png"
import eshopImg from "../public/assets/projects/eshop.png"
import photographyCompanyImg from "../public/assets/projects/photographyCompany.png"
import travellyImg from "../public/assets/projects/travelly.png"
import twitchImg from "../public/assets/projects/twitch.png"
import zillowImg from "../public/assets/projects/zillow.png"
import tiktokImg from "../public/assets/projects/tiktok.png"

const Projects = () =>{
    return(
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
                <h2 className="py-4">What i have built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={coinbaseImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Coinbase clone</h3>
                            <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={NetflixImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Netflix clone</h3>
                            <p className="pb-4 pt-2 text-white text-center">React JS</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={eshopImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Online Shop</h3>
                            <p className="pb-4 pt-2 text-white text-center">HTML CSS Javascript</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={photographyCompanyImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Photo Center</h3>
                            <p className="pb-4 pt-2 text-white text-center">HTML CSS Javascript</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={travellyImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Booking company</h3>
                            <p className="pb-4 pt-2 text-white text-center">HTML CSS Javascript</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={twitchImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Twitch clone</h3>
                            <p className="pb-4 pt-2 text-white text-center">React JS</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={zillowImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Zillow clone</h3>
                            <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image className="rounded-xl group-hover:opacity-10" src={tiktokImg} alt="/"/>
                        <div className="hidden group-hover:block absolute">
                            <h3 className="text-2xl text-white tracking-wider text-center">Tiktok clone</h3>
                            <p className="pb-4 pt-2 text-white text-center">Next JS</p>
                            <Link href="/"><p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">more info</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects