import { useState } from "react";
import { 
  IoMenu, 
  IoChevronBackOutline, 
  IoHome, 
  IoGrid, 
  IoBag, 
  IoInformationCircle, 
  IoPersonCircleOutline 
} from "react-icons/io5";
import logo from "../assets/jkccLogo.png"

export const Topbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {/* Topbar */}
      <div className="fixed top-0 left-0 w-full h-[64px] bg-zinc-800 px-8 py-3 flex items-center justify-between z-50">
        <div className="lg:hidden text-slate-50">
          <button onClick={toggleSidebar}>
            <IoMenu size={20} />
          </button>
        </div>
        <div className="gap-2.5 justify-center items-center flex">
          <a href="/">
            <img src={logo} width={36} alt="logo" />
          </a>
          <div className="text-slate-50 text-base font-semibold leading-7">
            <a href="/" className="hidden lg:flex">
              Expert in Computers | Expect More
            </a>
          </div>
        </div>
        <div>
          <div className="text-slate-50 text-sm font-semibold leading-7 items-center flex gap-x-4">
            <a href="/login">
              <IoPersonCircleOutline size={32} />
            </a>
            <a href="/login" className="hidden lg:flex hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-[64px] left-0 w-[240px] bg-zinc-500 h-[calc(100vh-64px)] p-4 text-slate-50 flex flex-col text-left space-y-1 list-none z-40 lg:hidden">
          <div className="flex justify-between w-full items-center mb-4">
            <div className="flex items-center gap-2">
              <a href="/login">
                <IoPersonCircleOutline size={32} />
              </a>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </div>
            <div>
              <button onClick={toggleSidebar}>
                <IoChevronBackOutline size={20} />
              </button>
            </div>
          </div>

          <li>
            <a
              href="/"
              className="p-2 rounded-lg w-full flex justify-start items-center hover:bg-zinc-600 gap-x-2"
            >
              <IoHome />
              Home
            </a>
          </li>
          <li>
            <a
              href="/under-construction"
              className="p-2 rounded-lg w-full flex justify-start items-center hover:bg-zinc-600 gap-x-2"
            >
              <IoGrid />
              Brands
            </a>
          </li>
          <li>
            <a
              href="/under-construction"
              className="p-2 rounded-lg w-full flex justify-start items-center hover:bg-zinc-600 gap-x-2"
            >
              <IoBag />
              Shop
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="p-2 rounded-lg w-full flex justify-start items-center hover:bg-zinc-600 gap-x-2"
            >
              <IoInformationCircle />
              About Us
            </a>
          </li>
          <div className="h-[2px] w-[90%] bg-slate-50 opacity-5"></div>
          <li>
            <a
              href="/under-construction"
              className="p-2 rounded-lg w-full flex justify-start items-center hover:bg-zinc-600 gap-x-2"
            >
              Browse all categories
            </a>
          </li>
        </div>
      )}
    </div>
  );
};
