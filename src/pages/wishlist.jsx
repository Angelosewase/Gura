import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/product";
import { products } from "../data/products";
import { wishlistProducts } from "../data/wishlist";

const  WishlistProducts =({updated})=>{
  const foundwishlistProducts = []

  for (let index = 0; index < wishlistProducts.length; index++) {
    const element = wishlistProducts[index];
    for (let index = 0; index < products.length; index++) {
      const product = products[index];
      if(product.id === element){
      foundwishlistProducts.push(product)
      }
    }
    
  }
  const wishlist = foundwishlistProducts.map((product)=> <Product {...product} wishlist={true} key={product.image} 
  clicked={updated}
  />)

  return <>
  <div className="grid grid-cols-6 gap-2">
  {wishlist}
  </div>
 
  </>
}

let productTwo = products[5]

const WishList = () => {
  const [updated,setUpdated] = React.useState(false)
  return (
    <>
      <Header />
      <div className="mx-20">
        <div>
          <div className="flex justify-between items-center mb-6 mt-10">
            <p className="font-semibold">Wishlist ({wishlistProducts.length})</p>
            <button className="border-2 px-4  py-1 rounded">Move all to bag</button>
          </div>
          <div>
          <WishlistProducts updated={setUpdated}/>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center mb-6 mt-10">
            <div className="flex gap-2 items-center">
            <div className="w-4 h-8 bg-red-700  rounded"></div>
            <p className="font-semibold">Just for you</p>
            </div>
            <button className="border-2 px-4  py-1 rounded">See all</button>
            </div>
            
            <div>
              <Product {...productTwo} recommended={true}/>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
