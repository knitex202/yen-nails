import React from "react";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex w-full h-64 bg-gray-800 items-center justify-around">
      <div className="text-white">
        <p>© {currentYear} Yen Nail N' Spa </p>
      </div>
      <div className="text-white">
        <p className="font-bold text-lg">Business Hours</p>
        <p>MON - SAT: 10AM - 7PM</p>
        <p>SUN: 11AM - 5PM</p>
      </div>
      <div className="text-white">
        <p className="font-bold text-lg">Contact Info</p>
        <p className="mb-4">
          Phone: <a href="tel:+15128692620">512-869-2620</a>
        </p>
        <address>
          1102 South Austin Avenue Suite 104 <br />
          Georgetown, Texas 78626 <br />
        </address>
      </div>
    </div>
  );
}

export default Footer;
