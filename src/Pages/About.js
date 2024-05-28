import React from "react";
import Cards from "../components/Cards";
import { management, team } from "../assets/employees";

function About() {
  return (
    <div className="w-full px-24">
      <p className="my-12 text-red-300 font-poppins font-semibold text-4xl">
        About Us
      </p>
      <div className="flex flex-col justify-center">
        <p className=" font-semibold text-center text-3xl">
          Welcome to&nbsp; <br /> Yen Nail N' Spa!
        </p>
        <hr className="w-96 self-center my-8 border-4 border-gray-900 rounded" />
        <p className="mb-16 font-poppins font-medium text-gray-600">Located in Georgetown, Texas, Yen Nail N' Spa provides a luxurious spa experience that is sure to leave you feeling rejuvenated and refreshed. This spa offers an array of services, from manicures and pedicures to facials and massages. With a focus on quality and attention to detail, you can be sure that you will receive the best service possible.</p>
          <article className="flex flex-col w-full">
            <p className=" mb-1 font-poppins font-bold text-red-500 text-4xl ">Team</p>
            <hr className="w-24 mb-8 border-2 border-red-500 rounded"/>
            <div className="flex flex-col items-center">
            <p className=" self-start mb-4 text-gray-500 font-semibold text-2xl">Management</p>
            <div className="grid grid-cols-2 gap-4">
            <Cards ItemData={management}/>
            </div>
            <p className="self-start mb-4 text-gray-500 font-semibold text-2xl">Techs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              <Cards ItemData={team}/>
            </div>
            </div>
          </article>
      </div>
    </div>
  );
}

export default About;
