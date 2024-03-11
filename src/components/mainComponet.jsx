import React from "react";
import FlashSales from "./categories/flashsales";
import BrowserCategory from "./categories/browse";
import BestSelling from "./categories/bestSelling";
import Explore from "./categories/explore";
import NewArrivals from "./categories/newArrival";
import Services from "./categories/services";

function MainContent() {
  return (
    <>
      <div className="flex fle-row">
        <div className="w-1/4 border-r-2 border-r-slate-500 flex flex-col pl-28  mr-1">
          <div className="mb-1.5 mt-12">Woman's fashion</div>
          <div className="my-1.5">Men's fashion</div>
          <div className="my-1.5">Electronics</div>
          <div className="my-1.5">Home & Lifestyle</div>
          <div className="my-1.5">medicine</div>
          <div className="my-1.5">Sports and outdoors</div>
          <div className="my-1.5">Baby's toys</div>
          <div className="my-1.5">Gorceries and pests</div>
          <div className="mt-1.5 mb-4">Healthy and beauty</div>
        </div>
        <div className="bg-black w-8/12  mt-6 ml-8 relative">
          <img src={"/products/apple-iphone-15-pro.jpg"} alt="the iphone image"  className="h-80 ml-auto mr-10 mt-8"/>
         
          <div className="absolute text-white top-14 left-10">
            <span className="text-white">iPhone 14 series</span>
            <h1 className="text-5xl font-semibold mb-1 mt-5">Up to 10%</h1>
            <h1 className="text-5xl font-semibold mb-6">off voucher</h1>
             <span className="border-b-2 border-b-white pb-1 text-lg">Shop now</span>
          </div>
        </div>
      </div>
      <div className="ml-28 my-28">
        <FlashSales />
      </div>
      <div className="mx-28 my-28">
        <BrowserCategory />
      </div>
      <div className="ml-28 my-28">
        <BestSelling />
      </div>
      <div className="ml-28 my-20 mr-40  bg-black relative">
        <img
          src={"/products/bluetooth speaker.webp"}
          alt="the bluetooth speaker image"
          className="ml-auto mr-24 h-[440px]"
        />
        <div className="absolute text-white bottom-20 left-16">
          <p className="text-green-400">categories</p>
          <h1 className="text-3xl mt-6 mb-5 font-semibold">Enhance Your <br /> Music exprience</h1>
          <div className=" grid grid-cols-4 w-72">
            <div className="flex flex-col  rounded-full bg-white text-black items-center align-middle w-12 h-12">
              <h2 className="text-sm font-bold mt-1">23</h2>
              <p className="text-xs -mt-1">hours</p>
            </div>
            <div className="flex flex-col  rounded-full bg-white text-black items-center align-middle w-12 h-12">
              <h2 className="text-sm font-bold mt-1">05</h2>
              <p className="text-xs -mt-1">Days</p>
            </div>
            <div className="flex flex-col  rounded-full bg-white text-black items-center align-middle w-14">
              <h2 className="text-sm font-bold mt-1">59</h2>
              <p className="text-xs -mt-1">minutes</p>
            </div>
            <div className="flex flex-col  rounded-full bg-white text-black items-center align-middle w-14 ">
              <h2 className="text-sm font-bold mt-1">35</h2>
              <p className="text-xs -mt-1">seconds</p>
            </div>
          </div>
          <button className="w-40 h-12 bg-green-400 border-none mt-7 rounded-md">Buy now</button>
        </div>
      </div>
      <div className="ml-28 my-28">
        <Explore />
        <div></div>
      </div>
      <div className="ml-28 mr-36 mt-28 mb-48">
        <NewArrivals />
      </div>
      <div>
        <Services />
      </div>

      <button className="w-8 h-8 rounded-full bg-gray-100 ml-[90%]">
        <img
          src={"images/arrow-small-left.svg"}
          alt="the up arrow"
          className="w-8 rotate-90"
        />
      </button>
    </>
  );
}

export default MainContent;
