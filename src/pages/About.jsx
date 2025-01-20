import React from 'react'
import { LuMapPin } from 'react-icons/lu'


const About = () => {
  return (
    <div className='text-zinc-800 px-8 w-full h-fit flex-col justify-center items-start gap-2.5 inline-flex'>
      {/* About Us */}
      <div className="flex items-center w-full justify-between">
        <div className="text-3xl font-semibold leading-9 mr-4">About Us</div>
        <div className="h-[1px] w-full bg-yellow-300 grow shrink basis-0"></div>
      </div>
      <div className="text-base font-bold leading-7 w-full">
        Your trusted partner in technology solutions
      </div>
      <div className="text-base font-normal leading-7 w-full">
        At Jasper Kissa Computer Center, we believe technology should enhance your life, not complicate it. Our journey began with a simple vision: to bring reliable, affordable, and expert computer services to our community. Today, with multiple branches, we’re proud to be a trusted name in tech solutions
      </div>
      {/* Mission Vision */}
      <div className="py-3 flex-col justify-center items-center gap-2.5 inline-flex w-full">
        <div className="text-center text-2xl font-semibold leading-loose">OUR MISSION & VALUES</div>
        <div className="text-center text-base font-normal leading-7 w-full mb-8">
        Jasper Kissa aims to provide unparalleled service by focusing on our customers’ needs and offer services with honesty, transparency, and a passion for technology
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2.5">
          <div className="p-8 bg-yellow-300 rounded-lg flex-col justify-center items-start gap-2.5 inline-flex  w-full text-zinc-800">
            <div className="text-base font-bold leading-7">Our Mission</div>
            <div className="self-stretch text-base font-normal leading-7">At Jasper Kissa Computer Center, we foster a family-like culture where every team member is encouraged to give their best in fulfilling their roles. With the grace of God guiding our efforts, our mission is to provide our customers with top-quality products and unparalleled customer service. We are dedicated to ensuring client satisfaction through innovative, reliable, and cost-effective solutions that meet the evolving needs of the communities we serve.</div>
          </div>
          <div className="p-8 bg-yellow-300 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex w-full text-zinc-800">
            <div className="text-base font-bold leading-7">Our Vision</div>
            <div className="self-stretch text-base font-normal leading-7">At Jasper Kissa Computer Center, our vision is to be the leading provider of innovative and reliable computer solutions, empowering communities and businesses with cutting-edge technology. We aspire to grow and evolve, expanding our reach both local and online, while maintaining our commitment to exceptional customer service and technical excellence.</div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="py-4 w-full">
        <div className="text-3xl text-center font-semibold leading-9 mb-4">COME VISIT US</div>
          <div className="py-4 h-fit gap-y-8 justify-center items-center flex-col flex">
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
              <a href="https://maps.app.goo.gl/gz3N9QwsWpeTysAFA" target='_blank' rel='noreferrer'>
                <div className="flex gap-x-2.5 text-center text-base font-bold underline leading-7 items-center">
                Trento Branch
                <LuMapPin />
                </div>
              </a>
              <div className="text-center text-base leading-7">Ambot asa, Agusan del Sur</div>
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

      {/* Opening Hours */}
      <div className="flex flex-col gap-y-2.5">
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
    </div>
  )
}

export default About