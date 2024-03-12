import React from "react";

function Product() {
  return (
    <>
      <div className=" inline-block relative ">
        <div>
          <div className="h-56 w-56 flex justify-center border-2 rounded-lg shadow-sm ">
            <img
              src={"/products/intermediate-composite-basketball.jpg"}
              alt="a basketball image"
              className="w-36 h-36 my-auto o"
            />
          </div>
          <div className=" h-18 flex flex-col justify-center items-start ">
            <h1 className="font-semibold">A basketball ball</h1>
            <div >
              <span className="text-sm mr-2">$260</span>
              <span className="text-sm text-gray-500 line-through">$360</span>
            </div>
            <div>
              <img
                src={"/ratings/rating-50.png"}
                alt="the ratings image"
                className="w-14 inline-block"
              />
              <span className="text-sm">(50)</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[66px] bg-black text-white w-full h-10 font-3xl flex justify-center invisible hover:visible">
          <p className="my-auto">Add to cart</p>
        </div>

        <div className="absolute top-2 right-2 ">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mb-2"><img src={"/images/heart.svg"} alt="the heart icon" className="w-5" /></div>
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"><img src={"/images/eye.svg"} alt="the eye icon" className="w-5" /></div>
        </div>
      </div>
    </>
  );
}

export default Product;
