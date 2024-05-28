import React from "react";
import Cards from "../components/Cards";
import { allImageData } from "../ImageData";


function Gallery() {
  return (
    <div className="flex flex-col p-24">
      <div className="flex flex-col items-center">
      <p className="my-12 self-start text-red-300 font-poppins font-semibold text-4xl">Gallery</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Cards ItemData={allImageData} />
      </div>
      </div>
    </div>
  );
}

export default Gallery;
