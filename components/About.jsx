import React from "react"

const About = () =>{
    return(
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 items-center">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">// I am not your average developer</p>
                    <p className="py-2 text-gray-600">I a student at the frankfurt university of applied sciences who believe it or not didn't like coding until i reached a certain semester and it hit me. Coding is really cool. Especially when you are able to mix and understand complex tech.</p>
                    <p className="py-2 text-gray-600">I started learning HTML CSS and Javascript. From there I when to learning ReactJS and now i code in NEXTJS. For the backend used java, a bit of NEXTJS and PHP. But thats not all. To optimize planning I also do the design when recommended with the use of Figma And very soon I would be getting into branding and company identity. I am so excited about this journey. Now I just spend may time sharpening my skills indoor to give you the best of the best and take your company to the nextz level.</p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Check out my latest projects</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
                </div>
            </div>
        </div>
    )
}
export default About