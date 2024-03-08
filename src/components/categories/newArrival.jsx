import React from "react";
function NewArrivals() {
  return (
    <>
      <div className="flex flex-row  w-11/12 justify-between ">
        <div className="w-6/12">
          <div className="flex">
            <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
            <p className="text-red-600 ml-2">Featured</p>
          </div>
          <h1 className="text-4xl font-semibold my-4">New arrival</h1>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
