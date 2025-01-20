import React from 'react';
import { IoLocationSharp, IoMail, IoLogoFacebook } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import logo from '../assets/jkccLogo.png';

export const Footer = () => {
  return (
    <footer className="text-zinc-800 px-8 py-16 justify-center items-start flex flex-col gap-y-8 md:flex-row md:gap-x-40">
          {/* Logo and Description */}
        <div className="flex flex-col w-fit items-start gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="JKCC Logo" width={36} />
            <h1 className="text-2xl font-semibold">JKCC</h1>
          </div>
          <p className="text-sm max-w-[380px] leading-relaxed">
          Explore cutting-edge tech, expert repairs, and tailored IT solutions—because you deserve more. To God be the Glory!
          </p>
          <div className="flex gap-4">
            <a href="/" aria-label="Facebook">
              <IoLogoFacebook size={20} />
            </a>
            <a href="/" aria-label="Email">
              <IoMail size={20} />
            </a>
            <a href="/" aria-label="Messenger">
              <FaFacebookMessenger size={20} />
            </a>
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="">2025, Jasper Kissa Computer Center. All Rights Reserved</div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-4 w-fit items-start">
          <h2 className="font-bold text-base">Useful Links</h2>
          <nav className="flex flex-col gap-2">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/under-construction" className="hover:underline">
              Brands
            </a>
            <a href="/under-construction" className="hover:underline">
              Categories
            </a>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col w-fit gap-4 items-start">
          <h2 className="font-bold text-base">Contact Us</h2>
          <div className="flex items-center gap-3">
            <IoLocationSharp size={20} />
            <address className="not-italic text-sm leading-tight">
              Purok 4, Barangay 5,<br/>Rosales Street San Francisco, Agusan del Sur
            </address>
          </div>
          <div className="flex items-center gap-3">
            <IoMail size={20} />
            <a href="mailto:jasperkissa@gmail.com" className="text-sm leading-tight hover:underline">
              jasperkissa@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MdPhone size={20} />
            <a href="tel:+639123456789" className="text-sm leading-tight hover:underline">
              +63 912 345 6789
            </a>
          </div>
        </div>
    </footer>
  );
};
