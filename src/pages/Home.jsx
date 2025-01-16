import React from 'react'
import buildingImg from "../assets/undraw_best-place_dhzp.svg"
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { LuGift, LuHandshake, LuLock, LuPackage, LuRefreshCw } from 'react-icons/lu';

export const Home = () => {

  return (
    <div className="h-fit w-full overflow-hidden">
      {/* Welcome */}
      <div className="flex h-[100vh] w-full relative justify-center bg-gradient-to-t from-yellow-50 to-white overflow-hidden p-8">
        <div className="flex flex-col mt-8">
          <div className="font-semibold text-center leading-loose py-8 text-2xl md:text-3xl lg:text-5xl">
            Empower Your World with<br/>Jasper Kissa
          </div>
          <div className="font-light text-lg text-center">
            Where technology meets expertise—unlock the potential of your devices with our premium products and unmatched repair services.
          </div>

          <div className="flex gap-x-4 items-center justify-center mt-8 text-white">
            <a href='/under-construction'
            className='bg-zinc-800 px-4 py-2 rounded-lg'
            >
              Browse Categories</a>
            <a href='/about'
            className='bg-zinc-800 px-3 py-2 rounded-lg flex items-center gap-3'>
              About Us
              <HiOutlineArrowTopRightOnSquare />
              </a>
          </div>
        </div>

        <img src={buildingImg} alt="bulidingImage" 
          className='absolute -bottom-8'
        />
      </div>

      {/* Offerings */}
      {/* <div className="flex justify-center items-center py-16 gap-x-16">
        {offeringIcons.map((icon, index) => (
          <div 
          key={index}
          className="flex flex-col items-center text-center gap-y-4">
            {icon}
            <div className="flex flex-col">
              <div className="font-bold">{offeringTitle[index]}</div>
              <div >{offeringText[index]}</div>
            </div>
          </div>
        ))}
      </div> */}


      {/* Services */}
      {/* <div className="w-full h-[100vh]">
        
      </div> */}

    </div>
  )
}

const offeringIcons = [
  <LuPackage size={24}/>,
  <LuRefreshCw size={24}/>,
  <LuGift size={24}/>,
  <LuLock size={24}/>,
  <LuHandshake size={24}/>
]

const offeringTitle = [
  "Free Shipping",
  "Warranty Replacement",
  "Special Gifts",
  "Secured Payemnts",
  "Support 24/7",
]

const offeringText = [
  "For All Orders Over ₱5,000",
  "For Item Defects",
  "On Laptop or Computer Repairs",
  "Payment Cards Accepted",
  "Contact Us Anytime",
]