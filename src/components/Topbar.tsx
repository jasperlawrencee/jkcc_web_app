import React, { useEffect, useState } from "react";
import { 
  IoMenu, 
  IoChevronBackOutline, 
  IoHome, 
  IoGrid, 
  IoBag, 
  IoInformationCircle, 
} from "react-icons/io5";
import logo from "../assets/jkccLogo.png";
import { LuArrowRight, LuLogOut } from "react-icons/lu";
import { PrimaryButton } from "./Button";
import { useAuth } from "./AuthContext";
import { auth } from "src/config/firebaseConfig";
import ScreenLoader from "./ScreenLoader";
import ModalLogout from "./ModalLogout";

export const Topbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state
  // const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { currentUser, isLoggedIn } = useAuth();

  const handleLogout = () => {
    auth.signOut();
    setDialogOpen(false);
  }

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false); // Set loading to false once auth state is determined
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Render the full-screen loader while checking auth state
    return <ScreenLoader />;
  }

  return (
    <div className="relative w-full">
      {/* Topbar */}
      <div className="flex fixed w-full h-20 bg-white px-8 top-0 z-50 py-4 justify-center items-center gap-x-28 shadow-sm">
        {/* Sidebar Button */}
        <div className="lg:hidden text-zinc-800 w-full">
          <button onClick={toggleSidebar}>
            <IoMenu size={20} />
          </button>
        </div>

        {/* Logo with Text */}
        <a href="/" className="hidden lg:flex gap-2.5 justify-center items-center text-zinc-800 text-base font-semibold">
          <img src={logo} alt="logo" width={36}/>
          <p className="flex w-full">Expert in Computers | Expect More</p>
        </a>

        {/* Route Buttons */}
        <div className="hidden lg:flex gap-x-16 justify-center w-fit text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/under-construction" className="hover:underline">Browse</a>
          <a href="/under-construction" className="hover:underline">Custom PC</a>
        </div>

        {/* Login Tab */}
        {!isLoggedIn && (
          <div className="text-sm font-semibold items-center justify-end flex gap-x-4">
            <a href="/login" className="hidden lg:flex hover:underline text-zinc-800">
              Login
            </a>
            <a href="/register"
              className="flex hover:underline text-white bg-zinc-800 rounded-xl px-4 py-2 items-center justify-center gap-x-2 w-fit min-w-[120px]">
              Sign Up Now
              <LuArrowRight className="hidden lg:flex" />
            </a>
          </div>
        )}
        {isLoggedIn && (
          <div className="text-sm font-semibold items-center justify-end flex gap-x-4">
            <a href="/under-construction">
              {currentUser?.displayName || "User"}
            </a>
            <button
            onClick={() => setDialogOpen(true)}
            >
              <LuLogOut />
            </button>
            {isDialogOpen && (
              <ModalLogout 
                onClose={() => setDialogOpen(false)}
                onConfirm={() => handleLogout()}
              />
            )}
          </div>
        )}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] text-zinc-800 flex text-left space-y-1 list-none z-40 lg:hidden">
          <div className="w-[45%] bg-white h-full p-4">
            <div className="flex justify-between w-full items-center mb-4">
              <div className="flex gap-x-2 items-center">
                <button onClick={toggleSidebar}>
                  <IoChevronBackOutline size={20} />
                </button>
                <p className="text-xl font-semibold">JKCC</p>
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
            {isLoggedIn && (
              <PrimaryButton
                onClick={() => setDialogOpen(true)}
                label="Log Out"
              />
            )}
          </div>
          <div className="w-[55%] bg-white opacity-50 h-[100%]"></div>
        </div>
      )}
    </div>
  );
};