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
        <div className="w-1/4 border-r-2 border-r-slate-500 flex flex-col pl-28">
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
        <div></div>
      </div>
      <div className="ml-28 my-28">
        <FlashSales />
        <div></div>
      </div>
      <div className="ml-28 my-28">
        <BrowserCategory />
        <div></div>
      </div>
      <div className="ml-28 my-28">
        <BestSelling />
        <div></div>
      </div>
      <div>

      </div>
      <div className="ml-28 my-28">
        <Explore />
        <div></div>
      </div>
      <div className="ml-28 my-28">
        <NewArrivals />
        <div></div>
      </div>
      <div>
        <Services />
      </div>
     
    </>
  );
}

export default MainContent;
