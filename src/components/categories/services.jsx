import React from "react";

function Services() {
  return (
    <>
      <div className="flex flex-row w-10/12 justify-between mx-auto mb-20">
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full mb-4">
            <div className=" bg-slate-400 w-14 h-14 rounded-full flex items-center justify-center">
              <img
                src={"/images/shipping-fast.svg"}
                alt="shipping icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold ">FREE AND FAST DELIVERY</h2>
          <p className="text-gray-900 font-normal">
            Free delivery for order over $140
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center ">
          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full mb-4">
            <div className=" bg-slate-400 w-14 h-14 rounded-full flex items-center justify-center ">
              <img
                src={"/images/user-headset.svg"}
                alt="customer care icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold">24/7 CUSTOMER CARE</h2>
          <p className="text-gray-900 font-normal">
            friendly 24/7 customer support
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full mb-4">
            <div className=" bg-slate-400 w-14 h-14 rounded-full flex items-center justify-center">
              <img
                src={"/images/shield-check.svg"}
                alt="the safety icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
          <h2 className="text-lg font-bold">MONEY BACK GUARANTEE</h2>
          <p className="text-gray-900 font-normal">we return money within 30</p>
        </div>
      </div>
    </>
  );
}

export default Services;
