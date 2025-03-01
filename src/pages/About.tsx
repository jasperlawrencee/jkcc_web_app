import React from 'react'
import about from '../assets/about.svg'
import { LuMapPin } from 'react-icons/lu'


const About = () => {
  return (

    <div className='text-zinc-800 w-full h-fit flex-col justify-center items-center gap-2.5 inline-flex mt-20 relative'>
      <div className="flex flex-col items-center justify-start w-full gap-y-4 p-8">
        <div className="flex text-3xl font-semibold leading-9">
          <p className='underline-offset-8 underline decoration-yellow-300'>About Us</p>
        </div>
        <div className="flex items-center justify-between lg:w-[60vw] h-full w-full md:gap-x-4 mt-12">
          <div className="flex flex-col lg:w-[60vw] w-fit h-[40vh] justify-center items-start">
            <div className="text-base font-bold leading-7">
              Your trusted partner in technology solutions
            </div>
            <div className="text-base font-normal leading-7 lg:w-[60%] w-full h-fit mt-2">
            Founded in 2006, Jasper Kissa Computer Center has rapidly become a leader in IT solutions, dedicated to empowering clients with innovative technology and exceptional support. Our mission is to ensure customer satisfaction through personalized service.
            </div>
            <div className="text-base font-normal leading-7 lg:w-[60%] w-full h-fit mt-2">
            At Jasper Kissa Computer Center, we believe technology should enhance your life, not complicate it. Our journey began with a simple vision: to bring reliable, affordable, and expert computer services to our community. Today, with multiple branches, we`re proud to be a trusted name in tech solutions
            </div>
          </div>
          <div className="hidden md:flex">
            <img src={about} alt="about" className='h-96 w-h-96'/>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="py-4 w-full h-fit items-center justify-center flex flex-col">
        <div className="text-3xl text-center font-semibold leading-9 mb-4">
          Come Visit Us
        </div>

        <div className="flex flex-col md:flex-row w-full lg:w-[60vw] pt-4">
        <div className="w-full px-8 lg:px-0 py-8">
          <div className="text-base font-bold leading-7">
            Find Us Here
          </div>
          <p className='lg:pr-24'>
          Discover an extensive selection of computer components at our branches. From gaming rigs to workstation builds, find everything you need to create the perfect system. Our staff are on hand to assist you every step of the way.
          </p>
        </div>
        <div className="py-4 h-fit gap-y-8 justify-center items-center flex flex-col w-full px-8 lg:px-0">
            <div className="flex-col justify-center items-center gap-2.5 inline-flex w-fit">
              <a href="https://maps.app.goo.gl/jcmNwY21jCMLBaqH8" target='_blank' rel='noreferrer'>
                <div className="flex gap-x-2.5 text-center text-base font-bold underline leading-7 items-center">
                Main Branch
                <LuMapPin />
                </div>
              </a>
              <div className="text-center text-base leading-7">Purok 4, Barangay 5, San Francisco Agusan del Sur</div>
            </div>
            <div className="flex-col justify-center items-center gap-2.5 inline-flex w-fit">
              <a href="https://maps.app.goo.gl/WF3PxEPKUVcirBZD8" target='_blank' rel='noreferrer'>
                <div className="flex gap-x-2.5 text-center text-base font-bold underline leading-7 items-center">
                Trento Branch
                <LuMapPin />
                </div>
              </a>
              <div className="text-center text-base leading-7">Pan-Philippine Highway, Trento, Agusan del Sur</div>
            </div>
            <div className="flex-col justify-center items-center gap-2.5 inline-flex w-fit">
              <a href="https://maps.app.goo.gl/pNGYSFZfXB2DctsA9" target='_blank' rel='noreferrer'>
                <div className="flex gap-x-2.5 text-center text-base font-bold underline leading-7 items-center">
                Nabunturan Branch
                <LuMapPin />
                </div>
              </a>
              <div className="text-center text-base leading-7">H.M. Tan Bldg. Purok 7, Arabeo St., Davao de Oro</div>
            </div>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="flex flex-col md:flex-row gap-y-4 w-full justify-between md:w-[60vw] px-8 lg:px-0 py-8">
        <div className="flex flex-col gap-y-2.5 w-full">
          <div className="text-3xl font-semibold leading-9">Opening Hours</div>
            <div className="text-base font-normal leading-7">Monday - Saturday:</div>
            <div className="text-base font-normal leading-7">8:00 am - 6:00 pm</div>
          <div className="text-3xl font-semibold leading-9">Contact Number</div>
            <div className="text-base font-normal leading-7">+63 912 3456 789 Globe</div>
            <div className="text-base font-normal leading-7">+63 912 3456 789 Smart</div>
          <div className="text-3xl font-semibold leading-9">Email</div>
            <div className="text-base font-normal leading-7">kissajasper@gmail.com</div>
          <div className="flex flex-col">
            <div className="text-3xl font-semibold leading-9">Visit our FB Page</div>
            <a href='https://www.facebook.com/JKCCofficial' target='_blank' rel='noreferrer' className="text-blue-400 underline">facebook.com/JKCCofficial</a>
          </div>
        </div>
        {/* Contact Us Form */}
        <div className="flex flex-col gap-y-2.5 w-full">
          <div className="flex flex-col gap-y-1">
            <p className='font-semibold text-3xl leading-9'>Get In Touch</p>
            <p>Fill out the form below to contact us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About