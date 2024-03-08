import React from "react";
import rightarrow from "/images/arrow-small-right.svg";
import leftarrow from "/images/arrow-small-left.svg";

function Explore(){
    return (
        <>
          <div className="flex flex-row  w-11/12 justify-between ">
            <div className="w-6/12">
              <div className="flex">
                <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
                <p className="text-red-600 ml-2">Our products</p>
              </div>
              <h1 className="text-4xl font-semibold my-4">Explore our products</h1>
            </div>
            <div className="flex flex-row items-center">
              <button className="w-8 h-8 rounded-full bg-gray-100 mx-1">
                <img src={leftarrow} alt="the left arrow" className="w-8" />
              </button>
              <button className="w-8 h-8 rounded-full  bg-gray-100">
                <img src={rightarrow} alt="the right arrow" className="w-8" />
              </button>
            </div>
          </div>
        </>
    )
}
export default Explore;