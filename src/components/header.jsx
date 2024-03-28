import React from "react";
import HeaderTop from "./headertop";
import { Link } from "react-router-dom";

function Header() {
  const { profile, setProfile } = React.useState(true);

  return (
    <>
      <HeaderTop />
      <div className="flex flex-row mt-3 w-full justify-between h-20 m-auto items-center border-b border-gray-400">
        <h1 className=" ml-28 text-3xl font-medium">Exclusive</h1>
        <ul className="flex flex-row w-80 justify-between font-500 ">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              contact us
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="hover:underline">
              About us
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Sign up
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 mr-24">
          <div>
            <label className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="what are you looking for?"
                className="bg-slate-100 p-2 pr-8 rounded-s-md focus:outline-none"
              />
              <img
                src={"/images/search.svg"}
                alt="searc icon"
                className="w-6 pr-2 bg-slate-100 rounded-e-md"
              />
            </label>
          </div>

          <div className="flex flex-row gap-3">
            <img
              src={"/images/heart.svg"}
              alt="the heart icon"
              className="w-6 "
            />
            <img
              src={"/images/shopping-cart.svg"}
              alt="the shopping cart image"
              className="w-6"
            />
            {profile ? (
              ""
            ) : (
              <Link to="/account" className="flex items-center justify-center">
                <img
                src={"/images/user.svg"}
                alt="the shopping cart image"
                className="w-6"
              />
              </Link>
            
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
