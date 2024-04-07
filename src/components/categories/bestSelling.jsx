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
       <div className="flex justify-evenly mr-28 flex-wrap">
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
        <div className="flex justify-evenly mr-28 flex-wrap">
          {Products}
        </div>
     </>)
}



function BestSelling(props){
  const [more,setMore] = React.useState(false)
    return(
        <>
     <div className="flex flex-row  w-11/12 justify-between ">
        <div className="w-6/12">
          <div className="flex">
            <button className="bg-red-500 w-3 h-6 rounded-sm"></button>
            <p className="text-red-600 ml-2">This month</p>
          </div>
          <h1 className="text-4xl font-semibold my-4">Best selling Products</h1>
        </div>
        <div>
           <button className="bg-red-500 h-12 w-40 rounded-md text-white mt-8" onClick={()=>{setMore(prev => !prev)}}>{more ? "show less" : "view all"}</button>
        </div>
      </div>
      <BestSellingProducts updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/>
      {more ? <Morebestesellingproducts updateheader={props.updateheader} updateheaderwishlist={props.updateheaderwishlist}/> : ""}
        </>
    )
}
export default BestSelling;