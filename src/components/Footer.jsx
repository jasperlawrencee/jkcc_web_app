import React from 'react'
import { IoLocationSharp, IoMail, IoLogoFacebook,  } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import logo from "../assets/jkccLogo.png";

export const Footer = () => {
  return (
    <div className='flex flex-col min-h-screen w-full justify-center items-center text-slate-50'>
        <div className="bg-zinc-800 px-8 py-[70px] justify-between items-start w-full flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-4">
            <div className="flex-col justify-center items-start gap-4 inline-flex">
                <div className="justify-center items-center gap-2 inline-flex">
                    <img src={logo} alt="logo" width={36}/>
                    <div className="text-2xl font-semibold leading-loose">JKCC</div>
                </div>

                <div className="text-xs font-normal text-left max-w-[380px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus tempus vulputate. 
                </div>

                <div className="justify-center items-center gap-4 inline-flex">
                    <a href="/"><IoLogoFacebook size={20}/></a>
                    <a href="/"><IoMail size={20}/></a>
                    <a href="/"><FaFacebookMessenger size={20}/></a>
                </div>
            </div>

            <div className="flex-col inline-flex justify-start items-start gap-4 text-sm">
                <div className="leading-normal font-bold text-base">Useful Links</div>
                <a href="/" className='hover:underline'>Home</a>
                <a href="/under-construction" className='hover:underline'>Brands</a>
                <a href="/under-construction" className='hover:underline'>Categories</a>
                <a href="/under-construction" className='hover:underline'>About Us</a>
            </div>

            <div className="flex-col justify-start items-start gap-4 inline-flex text-sm">
                <div className="leading-normal font-bold text-base">Contact Us</div>
                <div className="w-[300px] flex items-center gap-3">
                    <IoLocationSharp size={30}/>
                    <div className="grow text-left text-sm font-medium leading-tight">
                        Purok 4, Barangay 5, Rosales Street San Francisco, Agusan del Sur
                    </div>
                </div>
                <div className="w-[300px] flex items-center gap-3">
                    <IoMail size={20}/>
                    <div className="grow text-left text-sm font-medium leading-tight">
                        jasperkissa@gmail.com
                    </div>
                </div>
                <div className="w-[300px] flex items-center gap-3">
                    <MdPhone size={20}/>
                    <div className="grow text-left text-sm font-medium leading-tight">
                        +63 912 345 6789
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[52px] bg-slate-50 justify-center items-center gap-x-6 text-zinc-800 w-full text-sm px-11 inline-flex">
            <div className="font-bold leading-tight">JKCC © 2025</div>
            <a href="/under-construction">
                <div className="font-medium leading-[14px]">Privacy and Policy</div>
            </a>
            <a href="/under-construction">
                <div className="font-medium leading-[14px]">Terms & Conditions</div>
            </a>
        </div>
    </div>
  )
}
