import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/product";
import { products } from "../data/products";
import { wishlistProducts } from "../data/wishlist";
import { cart } from "../data/cart";


function addalltocart(update){
  let quantity=1
for (let i = 0; i < wishlistProducts.length; i++) {
  const wishlistelement = wishlistProducts[i];
  let foundproduct;
  for (let index = 0; index < cart.length; index++) {
    const cartelement = cart[index];
      if(cartelement.id === wishlistelement){
      foundproduct=true
      }
    }
   if(!foundproduct){cart.push({id:wishlistelement,quantity:quantity})}
  }
 update(cart.length)
}

const  WishlistProducts =({updated,updateheader,updateheaderwishlist})=>{
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
  clicked={updated} updateheader={updateheader} updateheaderwishlist={updateheaderwishlist}
  />)

  return <>
  <div className="grid grid-cols-6 gap-2">
  {wishlist}
  </div>
  {wishlist.length === 0 ? <p className="text-2xl font-semibold ml-[20%]"> Oops! There are no products in the wishlist</p>:""}
  </>
}

let productTwo = products[5]

const WishList = () => {
  const [updated,setUpdated] = React.useState(false)
  
  const headerref = React.useRef(null)

  function updateheader(value){
    headerref.current.setCartvalue(value)
   }
  
   function updateheaderwishlist(value){
    headerref.current.setwishlistvalue(value)
   }

  return (
    <>
      <Header ref={headerref}/>
      <div className="mx-20">
        <div>
          <div className="flex justify-between items-center mb-6 mt-10">
            <p className="font-semibold">Wishlist ({wishlistProducts.length})</p>
            <button className="border-2 px-4  py-1 rounded hover:bg-gray-200" onClick={() =>{addalltocart(updateheader)}}>Move all to bag</button>
          </div>
          <div>
          <WishlistProducts updated={setUpdated} updateheader={updateheader} updateheaderwishlist={updateheaderwishlist}/>
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
              <Product {...productTwo} recommended={true} updateheader={updateheader}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
