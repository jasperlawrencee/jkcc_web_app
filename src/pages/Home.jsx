import React from 'react'
import { Navbar } from '../components/Navbar'
import { ImageSlider } from '../components/ImageSlider'
import { Offerings } from '../components/Offerings'
import { LinkCard } from '../components/LinkCard'
import { LuArrowRight } from 'react-icons/lu'

export const Home = () => {
  const descriptions = [
    'Expert diagnostics and repair solutions to get your device back to optimal performance',
    'Keep your device cool and dust-free for improved efficiency and longer lifespan',
    'Recover lost files and repair damaged drives with our trusted data solutions',
    'Get the latest operating system installed for enhanced speed and security',
    'Thorough device checkups to detect issues early and ensure smooth performance',
  ]

  return (
    <div className="h-fit">
      <Navbar />
      <ImageSlider />
      <Offerings />
      {/* Navigation Buttons */}
      <div className="w-full h-fit inline-flex justify-center gap-4 p-8 bg-zinc-800">
        <a href="/under-construction" className='h-10 w-fit px-4 py-2 text-sm md:text-base bg-slate-50 rounded-md justify-center items-center text-center inline-flex'>Build Your Own PC</a>
        <a href="/under-construction" className='h-10 w-fit px-4 py-2 text-sm md:text-base border border-slate-50 text-slate-50 rounded-md flex items-center justify-center gap-x-2.5'>
          <LuArrowRight />
          Browse Store
        </a>
      </div>

      {/* Service Cards */}
      <div className="px-8 py-2 flex-col justify-center items-center gap-2.5 inline-flex h-fit w-full">
        <div className="text-slate-50 text-xl md:text-4xl font-bold leading-7">
          What We Also Offer
        </div>
        <div className="text-center text-slate-50 text-base md:text-2xl font-normal leading-normal md:leading-[30px]">
          We provide quality computers, accessories, and reliable repair services to keep your tech running smoothly. Find out below
        </div>
        {/* Make Scrollable when md size */}
        <div className="flex flex-col gap-y-2.5 w-full justify-around md:flex-row mt-8">
          <LinkCard title='Laptop / Computer Repair' description={descriptions[0]}/>
          <LinkCard title='Cleaning / Replacing Thermal Paste' description={descriptions[1]}/>
          <LinkCard title='Data Recovery & Hard Drive Repair' description={descriptions[2]}/>
          <LinkCard title='OS Installation' description={descriptions[3]}/>
          <LinkCard title='Unit Checkup' description={descriptions[4]}/>
        </div>
      </div>

      {/* Check Out */}
      <div className="w-full p-8 flex-col justify-center items-start gap-2.5 inline-flex text-slate-50">
        <div className="text-xl md:text-3xl md:leading-9 font-bold leading-7">Check Out</div>

        <div className="inline-flex gap-x-5 gap-y-4 flex-col md:flex-row w-full">
          <div className="w-full h-[148px] px-8 rounded-md flex-col justify-center items-start gap-2.5 inline-flex bg-blue-500">
            <div className="text-lg font-bold leading-7">Build Your Own PC Now!</div>
            <a href='/under-construction' className='px-4 py-2 bg-slate-50 rounded-md justify-center items-center inline-flex gap-2.5 w-fit text-zinc-800'>
              <LuArrowRight />
              Get Started
            </a>
          </div>

          <div className="w-full h-[148px] px-8 rounded-md flex-col justify-center items-start gap-2.5 inline-flex bg-blue-500">
            <div className="text-lg font-bold leading-7">Select verious types of Laptops</div>
            <a href='/under-construction' className='px-4 py-2 bg-slate-50 rounded-md justify-center items-center inline-flex gap-2.5 w-fit text-zinc-800'>
              Browse Laptops
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}
