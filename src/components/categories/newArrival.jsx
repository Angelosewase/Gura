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
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-8">
        <div className="h-full  bg-black rounded-md relative">
          <img
            src={"/products/playstation.jpg"}
            alt="the playstation image"
            className="h-[450px] w-full mt-20 rounded-md"
          />
          <div className="absolute bottom-10 left-8 text-white">
            <h3 className="text-xl font-semibold mb-3">PlayStation 5</h3>
            <p className="text-sm opacity-90">
              Black and white version of the PS5 <br />
              coming out on sale
            </p>
            <br />
            <span className="text-lg underline underline-offset-3">
              Shop now
            </span>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 h-full rounded-md">
          <div className="border-2  bg-zinc-950 h-[243px] rounded-md relative">
            <img
              src={"/products/jpg.jpg"}
              alt="the women heart collection"
              className="h-60 ml-auto brightness-50"
            />

            <div className="absolute text-white bottom-6 left-8">
              <h3 className="text-xl font-semibold mb-3">Women's collection</h3>
              <p className="text-sm opacity-90">
                Featured women's collection that <br />
                gives you another vibe
              </p>
              <br />
              <span className="text-lg underline underline-offset-3">
                Shop now
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 h-full rounded-md">
            <div className=" bg-black rounded-md relative">
              <img
                src={"/products/jbl.webp"}
                alt="the speakers image"
                className="h-56 ml-auto mt-[29px] rounded-md"
              />
              <div className="absolute text-white bottom-4 left-8">
                <h3 className="text-xl font-semibold -mb-4">Speakers</h3>
                <br />
                <p className="text-sm opacity-90">Amazon wireless speakers</p>
                <span className="text-lg underline underline-offset-3">
                  Shop now
                </span>
              </div>
            </div>
            <div className=" bg-black rounded-md relative">
              <img
                src={"/products/gucci pefumejpg.jpg"}
                alt="the gucci perfume"
                className="h-60 ml-auto mt-[13px] rounded-md"
              />
              <div className="absolute text-white bottom-12 left-8">
                <h3 className="text-xl font-semibold -mb-4">Perfume</h3>
                <br />
                <p className="text-xs opacity-90">GUCCI INTENSE OUD EDP</p>
                <span className="text-lg underline underline-offset-3">
                  Shop now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;
