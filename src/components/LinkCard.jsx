import React from 'react';
import { LuSquareArrowOutUpRight } from 'react-icons/lu'; 

export const LinkCard = ({ title, description }) => {
  return (
    <div className="w-full h-fit md:w-[250px] md:h-[300px] px-12 py-3 m-x-2.5 
          rounded-lg border border-slate-50 flex-col justify-center items-center gap-2.5 
          inline-flex text-slate-50 md:justify-between md:items-start md:px-4"> 
      <div className="flex flex-col gap-y-12">
        <div className="text-center md:text-left md:text-xl font-bold leading-7">{title}</div>
        <div className="hidden md:flex text-base font-light leading-[30px]">{description}</div>
      </div>
      <a href='/under-construction' className="hover:underline justify-center text-sm items-center gap-2.5 inline-flex">
        Read More
        <LuSquareArrowOutUpRight />
      </a>
    </div>
  );
};