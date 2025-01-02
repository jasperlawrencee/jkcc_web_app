import React from 'react';
import { IoLocationSharp, IoMail, IoLogoFacebook } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import logo from '../assets/jkccLogo.png';

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-slate-50">
      {/* Main Footer Section */}
      <div className="bg-zinc-800 px-8 py-10 flex flex-wrap lg:flex-nowrap gap-8 justify-between items-start">
        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="JKCC Logo" width={36} />
            <h1 className="text-2xl font-semibold">JKCC</h1>
          </div>
          <p className="text-xs max-w-[380px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus tempus vulputate.
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
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-base">Contact Us</h2>
          <div className="flex items-center gap-3">
            <IoLocationSharp size={30} />
            <address className="not-italic text-sm leading-tight">
              Purok 4, Barangay 5, Rosales Street San Francisco, Agusan del Sur
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
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-50 text-zinc-800 py-3 px-2 flex justify-center items-center gap-1.5 md:gap-3 lg:gap-6 text-sm">
        <span className="font-bold">JKCC &copy; 2025</span>
        <a href="/under-construction" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/under-construction" className="hover:underline">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};
