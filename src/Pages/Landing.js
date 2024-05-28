import React from "react";
import yenNails from "../assets/yenNails.jpg";
import manicure from "../assets/manicure.jpg";
import pedicure from "../assets/pedicure.jpg";
import waxing from "../assets/waxing.jpg";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { imageData } from "../ImageData";

function Landing() {
  return (
    <div className="w-full">
      <div className="relative w-full mix-blend-overlay">
        <img className="w-full" src={yenNails} alt="" />
        <div className="absolute bottom-0 w-screen h-4/5  bg-gradient-to-t from-black  to-transparent"></div>
      </div>
      <div className="w-full h-full px-28 bg-black">
        <article className="flex flex-col pt-12 items-center justify-center">
          <p className="w-auto mt-24 font-poppins text-center text-red-300 font-bold text-7xl">Book Your Appointment</p>
          <p className="mt-4 text-white  font-light text-3xl">Offering Quality Craft Services </p>
        </article>
        <p className="my-12 text-red-50 font-semibold text-4xl"> <span className="text-red-400">Some</span> Services</p>
        <article className="flex w-full justify-center pt-4 sm:gap-4 sm:scale-75 md:gap-8 md:scale-90 xl:gap-24 xl:scale-100">
          <div className="w-96 text-center ">
            <div className="flex w-96 h-64 bg-white overflow-hidden">
              <img
                className=" h-full w-full object-cover hover:scale-125 ease-in duration-200"
                src={manicure}
                alt=""
              />
            </div>
            <p className=" py-4 text-white text-lg font-medium font-poppins">
              Manicure
            </p>
            <p className="pb-4 text-white">
              Select the manicure of your choice and additional services for
              your personal style.
            </p>
            <Link className="text-red-300 hover:text-red-500" to="/services#manicure">
              More Services +
            </Link>
          </div>
          <div>
            <div className="w-96 text-center">
              <div className="w-96 h-64 bg-white overflow-hidden">
                <img
                  className="h-full w-full object-cover hover:scale-125 ease-in duration-200"
                  src={pedicure}
                  alt=""
                />
              </div>
              <p className=" py-4 text-white text-lg font-medium font-poppins">
                Spa Pedicure
              </p>
              <p className="pb-4 text-white">
                Choose from our five relaxing pedicures and add your choice of
                add ons for tip to toes perfection!
              </p>
              <Link className="text-red-300 hover:text-red-500" to="/services#pedicure">
                More Services +
              </Link>
            </div>
          </div>
          <div>
            <div className="w-96 text-center">
              <div className="w-96 h-64 bg-white overflow-hidden">
                <img
                  className="h-full w-full object-cover hover:scale-125 ease-in duration-200"
                  src={waxing}
                  alt=""
                />
              </div>
              <p className=" py-4 text-white text-lg font-medium font-poppins">
                Waxing
              </p>
              <p className="pb-4 text-white">
                Indulge in our premium waxing service for smooth, radiant skin.
              </p>
              <Link className="text-red-300 hover:text-red-500" to="/services#waxing">
                More Services +
              </Link>
            </div>
          </div>
        </article>
        <article className="flex py-48 justify-center" >
          <div className=" grid grid-cols-3 gap-4">
          <Cards ItemData={imageData}/>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Landing;
