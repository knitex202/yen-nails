import React from "react";
import ServiceContext from "../components/serviceContext";

function Services() {
  const solarNails = [
    { service: "Pink & White Full set", price: "$40" },
    { service: "Pink & White with Color", price: "$45" },
    { service: "Pink & White Fill", price: "$35" },
    { service: "full Set with Color", price: "$30" },
    { service: "Fill with Color", price: "$20" },
    { service: "Nails Removal with Service", price: "$5" },
    { service: "Nails Removal without Service", price: "$10" },
  ];

  const shellac = [
    { service: "Shellac French Manicure", price: "$35" },
    { service: "Shellac Manicure", price: "$30" },
    { service: "Shellac Polish Change", price: "$20" },
    { service: "Shellac Color with Service", price: "$15" },
    { service: "Teenagers: (Under 18)" },
    { service: "-Shellac French Manicure", price: "$30" },
    { service: "-Shellac Manicure", price: "$25" },
  ];

  const manicure = [
    { service: "Spa Manicure", price: "$15" },
    { service: "Deluxe Manicure", price: "$25" },
    { service: "Relaxing Manicure", price: "$35" },
    { service: "Kids Manicure (7 - 9)", price: "$12" },
    { service: "Kids Manicure (6 & Under)", price: "$10" },
  ];

  const pedicure = [
    { service: "Spa Pedicure", price: "$25" },
    { service: "Deluxe Pedicure", price: "$35" },
    { service: "Relaxing Pedicure", price: "$45" },
    { service: "Kids Pedicure (7 - 9)", price: "$20" },
    { service: "Kids Pedicure (6 & Under)", price: "$15" },
    { service: "Polish Change", price: "$10" },
  ];

  const waxing = [
    { service: "Eyebrows", price: "$10" },
    { service: "Lip", price: "$7" },
    { service: "Chin", price: "$7 & Up" },
    { service: "Sides", price: "$10 & Up" },
    { service: "Face", price: "$30 & Up" },
    { service: "Underarms", price: "$20 & Up" },
    { service: "Half Arms", price: "$25 & Up" },
    { service: "Full Arms", price: "$40 & Up" },
    { service: "Half Legs", price: "$30 & Up" },
    { service: "Full Legs", price: "$45 & Up" },
  ];

  return (
    <div className=" w-full p-24 ">
      <article className="flex flex-col  ">
        <div className="flex flex-col gap-4 items-center  ">
          <div className="flex w-full gap-8">
            <section id="solarNails " className="w-full">
              <p className=" font-poppins font-semibold text-4xl">
                Solar Nails
              </p>
              <hr className="mb-4 border-2 rounded border-red-400" />
              <ServiceContext arrData={solarNails} />
            </section>
            <section id="Shellac" className="w-full">
              <p className="  font-poppins font-semibold text-4xl">Shellac</p>
              <hr className="mb-4 border-2 rounded border-red-400" />
              <ServiceContext arrData={shellac} />
            </section>
          </div>
          <div className="flex w-full gap-8">
          <section id="manicure" className="w-full">
            <p className=" font-poppins font-semibold text-4xl">Manicure</p>
            <hr className="mb-4 border-2 rounded border-red-400" />
            <ServiceContext arrData={manicure} />
          </section>
          <section id="pedicure" className="w-full">
            <p className="  font-poppins font-semibold text-4xl">Pedicure</p>
            <hr className="mb-4 border-2 rounded border-red-400" />
            <ServiceContext arrData={pedicure} />
          </section>
          </div>
          <div className="flex w-full gap-8">
          <section id="waxing" className="w-full">
            <p className="  font-poppins font-semibold text-4xl">Waxing</p>
            <hr className="mb-4 border-2 rounded border-red-400" />
            <ServiceContext arrData={waxing} />
            <p className=" mt-8 font-oswald text-xl"><span className="font-bold">Free Drinks</span> are provided. enjoy complimentary water, sodas, red or white wine (2 per person) </p>
          </section>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Services;
