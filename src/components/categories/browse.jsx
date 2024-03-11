import React from "react";
import rightarrow from "/images/arrow-small-right.svg";
import leftarrow from "/images/arrow-small-left.svg";

function BrowserCategory() {
  return (
    <>
      <div className="flex flex-row  w-11/12 justify-between ">
        <div className="w-6/12">
          <div className="flex">
            <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
            <p className="text-red-600 ml-2">Categories</p>
          </div>
          <h1 className="text-4xl font-semibold my-4">Browse by Categories</h1>
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
      <div className=" grid grid-cols-6 gap-4 mt-8 ">
        <div className="border-2 border-stone-300 h-32 rounded-md flex items-center justify-center flex-col hover:bg-red-500 hover:text-white">
          <img
            src={"/images/mobile-button.svg"}
            alt="the phone icon "
            className="w-10 mb-3"
          />
          <p>Phones</p>
        </div>
        <div className="border-2 border-gray-200 h-32 rounded-md flex items-center justify-center flex-col hover:bg-red-500 hover:text-white">
          <img
            src={"/images/computer.svg"}
            alt="the monitor icon"
            className="w-10 mb-3"
          />
          <p>Computers</p>
        </div>
        <div className="border-2 border-gray-200 h-32 rounded-md flex items-center justify-center flex-col hover:bg-red-500 hover:text-white">
          <img
            src={"/images/watch-smart.svg"}
            alt="the monitor icon"
            className="w-10 mb-3"
          />
          <p>smart watches</p>
        </div>
        <div className="border-2 border-gray-200 h-32 rounded-md flex items-center justify-center flex-col hover:bg-red-500 hover:text-white">
          <img
            src={"/images/camera.svg"}
            alt="the camera icon"
            className="w-10 mb-3"
          />
          <p>Camera</p>
        </div>
        <div className="border-2 border-gray-200 h-32 rounded-md flex items-center justify-center flex-col hover:bg-red-500 hover:text-white">
          <img
            src={"/images/headphones.svg"}
            alt="the headphones icon"
            className="w-10 mb-3"
          />
          <p>Headphones</p>
        </div>
        <div className="border-2 border-gray-200 h-32 rounded-md flex items-center justify-center flex-col hover:bg-red-500 hover:text-white">
          <img
            src={"/images/gamepad.svg"}
            alt="the gamepad icon"
            className="w-10 mb-3"
          />
          <p>Gaming</p>
        </div>
      </div>
    </>
  );
}

export default BrowserCategory;
