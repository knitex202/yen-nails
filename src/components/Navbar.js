import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook-black.png";

function Navbar() {
  const [navClass, setNavClass] = useState("");




  return (
    <div
      className={`sticky top-0 z-50 flex px-6 w-screen h-24 bg-white drop-shadow-lg items-center justify-around`}>
      <div>
        <nav className="flex gap-6 text-gray-500 font-oswald">
          <NavLink className="group focus:text-red-500 hover:text-red-300" to="/">
            <p>Home</p>
            <div className="w-0 h-1 bg-red-300 group-hover:w-full group-focus:w-full group-focus:bg-red-500 ease-in-out duration-200"/>
          </NavLink>
          <NavLink className="group focus:text-red-500 hover:text-red-300" to="/about">
            <p>About</p>
            <div className="w-0 h-1 bg-red-300 group-hover:w-full group-focus:w-full group-focus:bg-red-500 ease-in-out duration-200"/>
          </NavLink>
          <NavLink className="group focus:text-red-500 hover:text-red-300" to="/services">
            <p>Services</p>
            <div className="w-0 h-1 bg-red-300 group-hover:w-full group-focus:w-full group-focus:bg-red-500 ease-in-out duration-200"/>
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-col text-center font-josefin font-bold text-xl md:text-2xl lg:text-4xl">
        Yen Nail N' Spa
      </div>
      <div>
        <nav className="flex gap-6 text-gray-500 font-oswald">
          <NavLink className="group focus:text-red-500 hover:text-red-300" to="/booking">
            <p>Book Now</p>
            <div className="w-0 h-1 bg-red-300 group-hover:w-full group-focus:w-full group-focus:bg-red-500 ease-in-out duration-200"/>
          </NavLink>
          <NavLink className="group focus:text-red-500 hover:text-red-300" to="/gallery">
            <p>Gallery</p>
            <div className="w-0 h-1 bg-red-300 group-hover:w-full group-focus:w-full group-focus:bg-red-500 ease-in-out duration-200"/>
          </NavLink>
          <NavLink className="group focus:text-red-500 hover:text-red-300" to="/contact">
            <p>Contact</p>
            <div className="w-0 h-1 bg-red-300 group-hover:w-full group-focus:w-full group-focus:bg-red-500 ease-in-out duration-200"/>
          </NavLink>

          <a
            href="https://www.facebook.com/p/Yen-Nails-N-Spa-100008740420593/"
            target="blank">
            <img className="h-6 ml-8" src={facebook} alt="facebook.com" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
