import React from 'react'

function serviceContext({arrData}) {
    const service = arrData.map((item)=>{
        return (
          <div className="flex justify-between w-full gap-2 items-center">
            <p className="font-semibold font-oswald">{item.service}</p>
            <hr className="w-5/6 border-2 border-dotted border-gray-500"/>
            <p className="font-oswald text-xl font-semibold text-red-600">{item.price}</p>
          </div>
        )
      })
  return (
    <>
    {service}
    </>
  )
}

export default serviceContext