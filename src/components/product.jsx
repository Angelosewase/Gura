import React from "react";
import { wishlistProducts } from "../data/wishlist";

function addtowhishlist (data){
  let productduplicated = true;
  for (let i = 0; i < wishlistProducts.length; i++) {
    const element = wishlistProducts[i];
    if(element == data){
      productduplicated=false;
    }
  }
if(productduplicated){
  wishlistProducts.push(data)
}
}

function removeformwishlist(data,clicked){
for (let i = 0; i < wishlistProducts.length; i++) {
    const element = wishlistProducts[i];
    if(element == data){
      wishlistProducts.splice(i,1)
      break;
    }
  }
clicked(prev =>!prev);
}

const ProductIconDiv1 = (props) => {
  let display = props.recommended ? "hidden" : "flex";
  let data = props.data;
  return (
    <>
      <div className="absolute top-2 right-2 ">
        <div
          className={`w-8 h-8 ${display} items-center justify-center bg-gray-100 rounded-full mb-1 hover:bg-gray-400`}
          onClick={()=>{addtowhishlist(data)}}
        >
          <img src={"/images/heart.svg"} alt="the heart icon" className="w-5" />
        </div>
        <div
          className={`w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full `}
        >
          <img src={"/images/eye.svg"} alt="the eye icon" className="w-5" />
        </div>
      </div>
    </>
  );
};

const ProductIconDiv2 = ({data,clicked}) => {

  return (
    <>
      <div className="absolute top-2 right-2 ">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-500 rounded-full mb-2 "
        onClick={()=>{removeformwishlist(data,clicked)}}>
          <img src={"/images/trash.svg"} alt="the heart icon" className="w-5" />
        </div>
      </div>
    </>
  );
};

function Product(props) {
  let ProductIconDiv = props.wishlist ? ProductIconDiv2 : ProductIconDiv1;

  return (
    <>
      <div className=" inline-block relative my-2 ">
        <div>
          <div className="h-56 w-56 flex justify-center border-2 rounded-lg shadow-sm hover:shadow-lg transition">
            <img src={props.image} alt="" className="w-36 h-36 my-auto " />
          </div>
          <div className=" h-18 flex flex-col justify-center items-start ">
            <h1 className="font-semibold w-56">{props.name}</h1>
            <div>
              <span className="text-sm mr-2">${props.priceCents / 100}</span>
              <span className="text-sm text-gray-500 line-through">$360</span>
            </div>
            <div>
              <img
                src={`/ratings/rating-${props.rating.stars * 10}.png`}
                alt="the ratings image"
                className="w-14 inline-block"
              />
              <span className="text-sm">({props.rating.count})</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[66px] bg-black text-white w-full h-10 font-3xl flex justify-center invisible hover:visible">
          <p className="my-auto">Add to cart</p>
        </div>
        <ProductIconDiv recommended={props.recommended} data={props.id} clicked={props.clicked}/>
      </div>
    </>
  );
}

export default Product;
