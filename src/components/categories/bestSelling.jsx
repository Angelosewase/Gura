import React from "react";
import {products} from '../../data/products.js'
import Product from '../product'

const Morebestesellingproducts = (props)=>{
  const Products  = []
  for (let index = 35; index <40; index++) {
   const element = products[index];
   Products.push(<Product {...element} key={element.id} updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>)
  }
    return(
    <>
       <div className=" flex items-center justify-center lg:justify-evenly lg:mr-28  flex-wrap mt-4 md:mt-0 gap-0 md:gap-4 md:justify-start md:items-start">
         {Products}
       </div>
    </>)
}

const BestSellingProducts= (props)=>{
  const Products  = []
   for (let index = 20; index <25; index++) {
    const element = products[index];
    Products.push(<Product {...element} key={element.id} updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>)
   }
     return(
     <>
        <div className=" grid grid-cols-2 md:flex  justify-center lg:justify-evenly lg:mr-28  flex-wrap mt-4 md:mt-0 gap-2 md:gap-4 md:justify-start md:items-start">
          {Products}
        </div>
     </>)
}



function BestSelling(props){
  const [more,setMore] = React.useState(false)
    return(
        <>
     <div className="flex flex-row  w-11/12 justify-between  flex-wrap md:flex-nowrap ">
        <div className=" w-full md:w-6/12">
          <div className="flex">
            <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
            <p className="text-red-600 ml-2">This month</p>
          </div>
          <h1 className="text-4xl font-semibold my-4">Best selling Products</h1>
        </div>
        <div>
           <button className="bg-red-500 h-12 w-40 rounded-md text-white mt-8 hidden md:block" onClick={()=>{setMore(prev => !prev)}}>{more ? "show less" : "view all"}</button>
        </div>
      </div>
      <BestSellingProducts updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>
      {more ? <Morebestesellingproducts updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/> : ""}
        </>
    )
}
export default BestSelling;