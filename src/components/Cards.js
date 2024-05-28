import React from "react";

function Cards({ ItemData }) {
  const imgCard = ItemData.map((item, index) => {
    return (
      <div>
        <div key={index} className="size-80 bg-white overflow-hidden">
          <img
            className="h-full w-full object-cover hover:scale-125 ease-in duration-300"
            src={item.image}
          />
        </div>
        <p className=" font-oswald text-xl font-semibold text-gray-800">{item.name}</p>
        <p className=" font-semibold text-gray-600">{item.position}</p>
      </div>
    );
  });
  return <>{imgCard}</>;
}

export default Cards;
