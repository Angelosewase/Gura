import React from "react";

function HeaderTop(){
    return(
        <>
        <div className="bg-black text-white w-full h-10 p-3 flex flex-row items-center">
                <p className="text-sm ml-[25%]  opacity-80">Summer Sales for All Swim Suits And Free Delivery - 50%! OFF</p><span className="underline ml-3  cursor-pointer font-semibold">shop now</span> 
                <select name="language" className="bg-black text-white ml-[25%]" >
                <option value="english">English</option>
                <option value="french">french</option>
                </select>
        </div>
        </>
    )
}

export default HeaderTop;