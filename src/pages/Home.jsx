import React from 'react'
import buildingImg from "../assets/undraw_best-place_dhzp.svg"
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { LuGift, LuHandshake, LuLock, LuPackage, LuRefreshCw } from 'react-icons/lu';
import aboutImage from "../assets/aboutImage1.png";
import abstract from "../assets/abstract.svg";
import deliver from "../assets/deliver.svg";
import order from "../assets/order.svg";
import { PrimaryLink } from '../components/Button';

export const Home = () => {

  const images = [abstract, deliver, order]
  const titles = ["Build", "Choose", "Deliver"]
  const text = [
    "Select Your Desired Parts from your case to your processor",
    "Do You want it Prebuilt or Do You want To Build it Yourself?",
    "Sit back as we handle the shipping to you",
  ]

  return (
    <div className="h-fit w-full overflow-hidden">
      {/* Welcome */}
      <div className="flex min-h-screen w-full relative items-start justify-center bg-gradient-to-t from-yellow-50 to-white overflow-hidden p-8">
        <div className="flex flex-col mt-12">
          <div className="font-semibold text-center leading-loose py-8 text-2xl md:text-3xl lg:text-5xl">
            Empower Your World with<br/>Jasper Kissa
          </div>
          <div className="font-light text-lg text-center">
            Where technology meets expertise—unlock the potential of your devices with our premium products and unmatched repair services.
          </div>

          <div className="flex gap-x-4 items-center justify-center mt-8 text-white">
            <PrimaryLink 
            route="/under-construction"
            label="Browse Categories"
            />
            <PrimaryLink 
            route="/about"
            label="About Us"
            icon={<HiOutlineArrowTopRightOnSquare />}
            />
          </div>
        </div>

        <img src={buildingImg} alt="bulidingImage" 
          className='absolute -bottom-8'
        />
      </div>

      {/* Offerings */}
      <div className="flex gap-x-2 md:gap-x-4 text-2xl md:text-4xl lg:text-5xl font-bold justify-center py-12 px-8">
        <p>What</p>
        <p>we</p>
        <p>provide?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center gap-16 px-8 py-16">
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
      </div>

      {/* Create Your Own PC */}
      <div className="flex flex-col w-full h-fit md:h-[90vh] px-8 py-16 items-center justify-start gap-y-16 bg-slate-50">
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full'>Get Your own PC in 3 Steps</p>
        <div className="flex flex-col md:flex-row w-full h-fit justify-center items-center md:items-start gap-x-16 gap-y-8">
          {images.map((image, index) => (
            <div className="flex flex-col justify-between items-center gap-y-4 max-w-[350px] md:h-[350px] w-fit text-center">
              <div className="flex flex-col">
                <div className="font-semibold text-2xl leading-9">{titles[index]}</div>
                <div className='leading-7'>{text[index]}</div>
              </div>
              <img src={image} alt={titles[index]} className='h-50 w-50 md:h-50 md:w-50'/>
            </div>
          ))}
        </div>

      </div>

      {/* Why jasper kissa? */}
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center pt-14 mb-8">Why Jasper Kissa?</div>
      <div className="flex flex-col md:flex-row h-fit w-full md:justify-center items-start px-8 py-8 gap-8">
        <img src={aboutImage} alt="aboutImage" className='h-fit'/>
        <div className="flex flex-col gap-2 md:w-[35%]">
          <div className="text-lg md:text-xl font-bold">Your Trusted Partner in Tech Excellence</div>
          <div className="w-fit">From providing you with high-performance PC parts to expert repairs and tailored IT solutions, Jasper Kissa Computer Center is here to power your digital journey.</div>
          <PrimaryLink 
          route="/about"
          label="Learn More"
          icon={<HiOutlineArrowTopRightOnSquare />}
          />
        </div>
      </div>

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