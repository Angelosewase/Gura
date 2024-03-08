import React from "react";
import rightarrow from "/images/arrow-small-right.svg";
import leftarrow from "/images/arrow-small-left.svg";

function FlashSales() {
  return (
    <>
      <div className="flex flex-row  w-11/12 justify-between ">
        <div className="flex flex-row  w-6/12 justify-between">
          <div>
            <div className="flex ">
               <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
               <p className="text-red-600 ml-2">Today's</p>
            </div>
            
            <h1 className="text-4xl font-semibold my-4">Flash sales</h1>
          </div>
          <div className="flex flex-row mt-7 items-end ">
            <div className="flex flex-col w-10  mx-1 text-black">
              <p className="text-xs font-semibold opacity-70">days</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">03</h1>
            </div>
            <span className="text-red-600 text-3xl mb-4">:</span> 
            <div className="flex flex-col w-10  mx-1 text-black">
              <p className="text-xs font-semibold opacity-70">hours</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">23</h1>
            </div>
            <span className="text-red-600 text-3xl mb-4">:</span>
            <div className="flex flex-col w-10  mx-1 text-black ">
              <p className="text-xs font-semibold opacity-70">minutes</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">19</h1>
            </div>
            <span className="text-red-600 text-3xl mb-4">:</span>
            <div className="flex flex-col  w-10  mx-1 text-black">
              <p className="text-xs font-semibold opacity-70">seconds</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">56</h1>
            </div>
          </div>
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
  );
}
export default FlashSales;
