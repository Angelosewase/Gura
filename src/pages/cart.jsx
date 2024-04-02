import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { products } from "../data/products.js";
import { Link } from "react-router-dom";

let product1 = products[0];
let product2 = products[1];

const CartProduct = (props) => {
  return (
    <>
      <div className="grid grid-cols-4  mt-8 border-b-2 border-gray-50 pb-4 ">
        <div className="flex gap-5  items-center">
          <img src={props.image} alt="" className="w-10" />
          <p className="text-sm">{props.name}</p>
        </div>
        <div className="flex items-center">
          <p>${props.priceCents / 100}</p>
        </div>
        <div className=" flex items-center pl-1">
          <input
            type="number"
            className="w-14 px-2 py-1 border-2 outline-none border-gray-400 rounded-md"
            min={0}
          />
        </div>
        <div className="flex items-center">${props.priceCents / 100}</div>
      </div>
    </>
  );
};

const Cart = () => {
  return (
    <>
      <Header />
      <div className="mx-20">
        <div className="mt-10">
          <span className="opacity-50">Home</span> /Cart
        </div>

        <div className=" p-1 mt-10">
          <div>
            <div className="grid grid-cols-4 font-semibold  ">
              <p>product</p>
              <p>price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <CartProduct {...product1} />
            <CartProduct {...product2} />
          </div>
          <div className="mt-3 flex justify-between pr-[5%]">
            <button className="border-2 border-gray-300 text-sm font-semibold rounded-sm px-5 py-3">
              Return to shop
            </button>
            <button className="border-2 border-gray-300 text-sm font-semibold rounded-sm px-5 py-3 ml-4">
              update cart
            </button>
          </div>
          <div className="flex  pr-[5%] mt-20 gap-[25%]">
            <div>
              <input
                type="text"
                placeholder="coupon code"
                className="border-2 border-gray-700 rounded-sm py-2 outline-none mr-4 text-lg pl-2"
              />
              <button className="bg-red-700 text-white px-10 py-3 rounded">
                apply coupon
              </button>
            </div>
            <div className="border-2 py-4 px-4 rounded border-black flex-1">
             <h1 className="font-semibold">Cart Total</h1>
             <div className="flex justify-between border-b-2 py-2 mb-2">
                <p className="text-sm">Subtotal:</p>
                <span className="text-sm">$1170</span>
             </div>
             <div className="flex justify-between border-b-2 py-2 mb-2">
                <p className="text-sm">shipping:</p>
                <span className="text-sm"> free</span>
             </div>
             <div className="flex justify-between  py-2 mb-2">
                <p className="text-sm">Total:</p>
                <span className="text-sm">$1500</span>
             </div>
             <button className="bg-red-700 text-white rounded py-3 px-5 mx-20">
              <Link to={"/checkout"}> process to checkout</Link>
             </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
