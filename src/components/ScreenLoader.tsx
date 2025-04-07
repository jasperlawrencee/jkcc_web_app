import React from "react";
import logo from "../assets/jkccLogo.png";
import "../styles/ScreenLoader.css";

const ScreenLoader: React.FC = () => {
    console.log("loading");
    return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div> */}
      <img src={logo} alt="logo" className="bouncing-logo" width={120}/>
    </div>
    );
};

export default ScreenLoader;