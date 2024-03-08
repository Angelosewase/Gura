import React from "react";

function BestSelling(){
    return(
        <>
     <div className="flex flex-row  w-11/12 justify-between ">
        <div className="w-6/12">
          <div className="flex">
            <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
            <p className="text-red-600 ml-2">This month</p>
          </div>
          <h1 className="text-4xl font-semibold my-4">Best selling Products</h1>
        </div>
        <div>
           <button className="bg-red-500 h-12 w-40 rounded-md text-white mt-8">view all</button>
        </div>
      </div>
        </>
    )
}
export default BestSelling;