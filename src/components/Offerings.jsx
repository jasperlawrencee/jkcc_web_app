import React from 'react'
import { LuGift, LuHeartHandshake, LuLock, LuPackage, LuRefreshCw } from "react-icons/lu";

export const Offerings = () => {
  return (
    <div className='flex-col md:flex-row w-full h-fit p-8 md:p-[60px] justify-center md:justify-around items-center gap-4 inline-flex bg-zinc-800 text-white text-base font-normal leading-normal text-center'>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <LuPackage />
            <div className="font-bold">Free Shipping</div>
            <div className="leading-7">For all orders over ₱5,000</div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <LuGift />
            <div className="font-bold">Special Gifts</div>
            <div className="leading-7">On Laptop and Computer Orders</div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <LuHeartHandshake />
            <div className="font-bold">Support 24/7</div>
            <div className="leading-7">Contact Us Anytime</div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <LuLock />
            <div className="font-bold">Secured Payments</div>
            <div className="leading-7">Payment Cards Accepted</div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <LuRefreshCw />
            <div className="font-bold">Warranty Replacement</div>
            <div className="leading-7">For item defects</div>
        </div>
    </div>
  )
}
