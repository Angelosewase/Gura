import React from "react";
import heart from'/images/heart.svg'
import shoppingCart from '/images/shopping-cart.svg'
import searchIcon from '/images/search.svg'
import HeaderTop from "./headertop";
import { Link } from "react-router-dom";

function Header(){
   return (
    <>
      <HeaderTop />
      <div className="flex flex-row mt-3 w-full justify-between h-20 m-auto items-center border-b border-gray-400"  >
         <h1 className="ml-28 mr-24 text-3xl font-medium">Exclusive</h1>
         <ul className="flex flex-row w-80 justify-between font-500 ">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><a href="#" className="hover:underline">contact</a></li>
            <li><Link to="/aboutUs" className="hover:underline">About us</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign up</Link></li>
         </ul>
         
         <div className="mr-3">
            <label className="flex flex-row justify-between" >
                 <input type="text" placeholder="what are you looking for?" className="bg-slate-100 p-2 pr-8 rounded-s-md focus:outline-none" />
                 <img src={searchIcon} alt="searc icon" className="w-6 pr-2 bg-slate-100 rounded-e-md" />
            </label>
          
         </div>

         <div className="flex flex-row mr-28 -ml-56">
              <img src={heart} alt="the heart icon" className="w-6 mx-4"/>
              <img src={shoppingCart} alt="the shopping cart image" className="w-6" />
         </div>
      </div>
    
    </>
   )
}

export default Header;