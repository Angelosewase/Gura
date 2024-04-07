import React, { forwardRef, useImperativeHandle } from "react";
import {products} from '../../data/products.js'
import Product from '../product'

const Ourproduts=forwardRef((props,ref)=>{
  const [more ,setMore] = React.useState(false)
  const Products =[]
  for (let index = 10; index < 20; index++) {
    const element = products[index];
    Products.push(<Product {...element} key={element.id} updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>)
  }
  if(more){
  for (let index = 30; index < 40; index++) {
    const element = products[index];
    Products.push(<Product {...element} key={element.id} updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>)
  }

}
function  handleCLick(){
  setMore(prev =>!prev)
}

useImperativeHandle(ref,()=>({
  handleCLick
}))
  return(<>
   <div className="flex justify-evenly mr-28 flex-wrap">
    {Products}
   </div>
  </>)
})

function Explore(props){
  const productsref = React.useRef(null)
  const [buttonclicked,setButtonclicked] = React.useState(false)
  function handleclicl(){
    productsref.current.handleCLick()
    setButtonclicked( prev => !prev)
  }
    return (
        <>
          <div className="flex flex-row  w-11/12 justify-between ">
            <div className="w-6/12">
              <div className="flex">
                <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
                <p className="text-red-600 ml-2">Our products</p>
              </div>
              <h1 className="text-4xl font-semibold my-4">Explore our products</h1>
            </div>
            <div className="flex flex-row items-center">
              <button className="w-8 h-8 rounded-full bg-gray-100 mx-1">
                <img src={"/images/arrow-small-left.svg"} alt="the left arrow" className="w-8" />
              </button>
              <button className="w-8 h-8 rounded-full  bg-gray-100">
                <img src={"/images/arrow-small-right.svg"} alt="the right arrow" className="w-8" />
              </button>
            </div>
          </div>
          <Ourproduts ref={productsref} updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>
          <button className="py-2 px-8 bg-red-500 rounded  text-white ml-[45%] mt-4" onClick={handleclicl}>{buttonclicked ? "show less" : "view all products"}</button>
        </>
    )
}
export default Explore;