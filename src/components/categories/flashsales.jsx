import React from "react";
import Product from '../product'
import {products }from '../../data/products.js'
import { forwardRef ,useImperativeHandle} from "react";




const FlashsalesProducts = forwardRef((props, ref)=>{
const scrolldiv = React.useRef(null)
const salesProducts =[];
for (let index = 0; index < 12; index++) {
  const element = products[index];
  let product = <Product {...element} key={element.id} updateheader = {props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>
  salesProducts.push(product)
}

function scroll(direction){

 if(direction ==="left"){
   scrolldiv.current.scrollLeft -=800
 }else{
  scrolldiv.current.scrollLeft += 800
 }
}

useImperativeHandle(ref,()=>({
  scroll
}))

return <>
<div className={`${props.display} gap-2 max-w-full grid-cols-6 flex-nowrap overflow-auto transition scroll-smooth scrollbar-hidden `} ref={scrolldiv}>
  {salesProducts}
</div>
</>
});



function FlashSales(props) {
  const [display,setDisplay]= React.useState("flex")
  const scrolldiv = React.useRef(null)

  function HandleDisplay(){
    let nextdisplay = display == "flex" ? "grid" : "flex"
    setDisplay(nextdisplay)
  }


  function handlescroll(direction){
     scrolldiv.current.scroll(direction)
  }
  return (
    <>
      <div className="flex flex-row  w-11/12 justify-between flex-wrap">
        <div className="flex flex-row  w-6/12 justify-between flex-wrap">
          <div>
            <div className="flex ">
               <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
               <p className="text-red-600 ml-2">Today's</p>
            </div>
            
            <h1 className="text-4xl font-semibold my-4">Flash sales</h1>
          </div>
          <div className="flex flex-row mt-7 items-end ">
            <div className="flex flex-col w-10  mx-1 text-black">
              <p className="text-xs font-semibold opacity-70">days</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">03</h1>
            </div>
            <span className="text-red-600 text-3xl mb-4">:</span> 
            <div className="flex flex-col w-10  mx-1 text-black">
              <p className="text-xs font-semibold opacity-70">hours</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">23</h1>
            </div>
            <span className="text-red-600 text-3xl mb-4">:</span>
            <div className="flex flex-col w-10  mx-1 text-black ">
              <p className="text-xs font-semibold opacity-70">minutes</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">19</h1>
            </div>
            <span className="text-red-600 text-3xl mb-4">:</span>
            <div className="flex flex-col  w-10  mx-1 text-black">
              <p className="text-xs font-semibold opacity-70">seconds</p>
              <h1 className="text-3xl font-semibold mb-4 -mt-1">56</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
            <button className="w-8 h-8 rounded-full bg-gray-100 mx-1" onClick={()=>{handlescroll("left")}}>
               <img src={"/images/arrow-small-left.svg"} alt="the left arrow" className="w-8" />
            </button>
            <button className="w-8 h-8 rounded-full  bg-gray-100" onClick={ ()=>{handlescroll("right")}}>
                <img src={"/images/arrow-small-right.svg"} alt="the right arrow" className="w-8" />
            </button>
          
        </div>
      </div>
       
      
      <FlashsalesProducts display={display} ref={scrolldiv} updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>

      <button className="py-2 px-8 bg-red-500 rounded  text-white ml-[45%] mt-4" onClick={HandleDisplay}>{display == "flex" ? "view all products" : "show less products"}</button>
      <hr className="bg-gray-400 mt-8 mr-28"/>
    </>
  );
}

export default FlashSales;
