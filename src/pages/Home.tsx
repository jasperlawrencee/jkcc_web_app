import React from 'react'
import buildingImg from "../assets/undraw_best-place_dhzp.svg"
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { LuArrowRight, LuGift, LuHandshake, LuLock, LuPackage, LuRefreshCw } from 'react-icons/lu';
import { PrimaryLink } from '../components/Button';
import Faq from "react-faq-component";
import aboutImage from "../assets/aboutImage1.png";
import abstract from "../assets/abstract.svg";
import deliver from "../assets/deliver.svg";
import order from "../assets/order.svg";



export const Home = () => {

  const images = [abstract, deliver, order];
  const titles = ["Build", "Choose", "Deliver"];
  const text = [
    "Select Your Desired Parts from your case to your processor",
    "Do You want it Prebuilt or Do You want To Build it Yourself?",
    "Sit back as we handle the shipping to you",
  ];
  
  const data = {
    rows: [
        {
          title: <p className='font-bold'>What services do you offer?</p>,
          content: <p>We provide personalized IT consultations, computer repair and upgrade services, and network setup and support.
            We also offer custom-build PCs where you can choose from our pre-built selections or customize a PC based on your needs and budget.</p>,
        },
        { title: <p className='font-bold'>How can I contact you?</p>,
          content: <p>You can reach us via our About Us page, where you'll find our phone numbers, our Facebook page, and a contact form.</p>,
        },
        {
          title: <p className='font-bold'>What are your operating hours?</p>,
          content: <p>Our centers are open Monday to Saturday from 8 AM to 6 PM (PST)</p>,
        },
    ],
  };

  const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
  };

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
            icon={undefined}
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
      <div className="flex flex-col h-fit w-full items-start md:items-center justify-center pt-12 gap-y-4 px-8">
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold justify-center text-start md:text-center">
          Our Mission & Values
        </div>
        <div className="flex text-start md:text-center text-lg font-normal leading-7 w-full md:w-[60vw]">
          Jasper Kissa aims to provide unparalleled service by focusing on our customers’ needs and offer services with honesty, transparency, and a passion for technology
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center gap-16 px-8 py-16">
        {offeringIcons.map((icon, index) => (
          <div 
          key={`offering-${index}`}
          className="flex flex-col items-center text-center gap-y-4">
            {icon}
            <div className="flex flex-col">
              <div className="font-bold">{offeringTitle[index]}</div>
              <div >{offeringText[index]}</div>
            </div>
          </div>
        ))}
      
      </div>
      <div className="w-full md:items-center md:justify-center flex px-8 pb-12">
        <div className="w-full md:w-[60vw] flex flex-col gap-8 md:flex-row items-start justify-between">
          <div className="flex w-full text-2xl font-bold">Explore Our Comprehensive IT Services</div>
          <div className="flex flex-col w-full gap-y-4">
            <div className="text-lg">At Jasper Kissa Computer Center, we offer a range of expert IT services designed to meet your needs. From personalized consultations to reliable network support, our team is here to help you succeed.</div>
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-4 w-full">
                <div className="font-bold text-xl">It Consultations</div>
                <p>Tailored advice to enhance your technology efficiency and productivity.</p>
              </div>
              <div className="flex flex-col gap-y-4 w-full">
                <div className="font-bold text-xl">Repair Services</div>
                <p>Fast and reliable solutions for all your computer issues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Your Own PC */}
      <div className="flex flex-col w-full md:h-[95vh] px-8 py-16 items-center justify-between gap-y-16 bg-slate-50">
        <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full'>Grab Your own PC in 3 Steps</p>
        <div className="flex flex-col md:flex-row w-full h-fit justify-center items-center md:items-start gap-x-16 gap-y-8">
          {images.map((image, index) => (
            <div 
            key={`step-${index}`}
            className="flex flex-col justify-between items-center gap-y-4 max-w-[350px] md:h-[350px] w-fit text-center">
              <div className="flex flex-col">
                <div className="font-semibold text-2xl leading-9">{titles[index]}</div>
                <div className='leading-7'>{text[index]}</div>
              </div>
              <img src={image} alt={titles[index]} className='h-50 w-50 md:h-50 md:w-50'/>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className='text-xl font-bold text-center'>Build Your Dream PC Today</p>
          <p className='text-center'>Customize your own or choose from our high-performance pre-built rigs!</p>
          <PrimaryLink
          route="/under-construction"
          label="Get Started"
          icon={<LuArrowRight/>}
          />
        </div>
      </div>

      {/* Why jasper kissa? */}
      <div className="flex flex-col w-full px-8 justify-center items-center bg-slate-200">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold w-full text-center pt-14 mb-8">Why Jasper Kissa?</div>
        <div className="flex flex-col md:flex-row h-fit w-full md:justify-center items-start py-8 gap-8">
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
          {/* Testimonials */}
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col w-full h-fit px-8 py-16 items-center justify-center gap-y-16">
        <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Frequently Asked Questions</p>
        <div className="w-full md:w-[60vw]">
          <Faq
            data={data}
            styles={styles}
            config={config}
          />
        </div>
      </div>
      {/* Need More Help? */}

    </div>
  )
}