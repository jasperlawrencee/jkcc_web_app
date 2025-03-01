import React from 'react';
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className='hidden md:flex h-12 bg-yellow-300 px-8 py-3 justify-between items-center text-zinc-800'>
      <div className="text-sm gap-8 flex items-center font-semibold">
        <a href="/under-construction" className='font-bold leading-tight hover:underline flex items-center gap-2.5'>
        <IoMenu />
        <div className="text-sm font-bold">Browse all categories</div>
        </a>
        <div className="text-lg select-none">|</div>
        <a href="/" className='hover:underline'>Home</a>
        <a href="/under-construction" className='hover:underline'>Brands</a>
        <a href="/under-construction" className='hover:underline'>Shop</a>
        <a href="/about" className='hover:underline'>About Us</a>
      </div>
      <div className="hover:underline text-sm leading-tight font-semibold">
        <a href="/orders">Order Tracking</a>
      </div>
    </div>
  )
}
