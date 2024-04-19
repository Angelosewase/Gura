import React from "react";
import Product, { addToCart, addtowhishlist } from "./product";
import Header from "./header";
import Footer from "./footer";
import { cart } from "../data/cart";
import { wishlistProducts } from "../data/wishlist";
import { products } from "../data/products";
import { useParams } from "react-router-dom";

const ProductDisplay = (props) => {
  const [quantity, setQuantity] = React.useState(1);
  let { id } = useParams();
  //  let product = products.find((product) => (product.id = id));
  //  console.log(product)

  let product;
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.id === id) {
      product = element;
    }
  }

  const headerref = React.useRef(null)

  function updateheader(value){
    headerref.current.setCartvalue(value)
   }
  
   function updateheaderwishlist(value){
    headerref.current.setwishlistvalue(value)
   }
  return (
    <>
      <Header ref={headerref} />
      <div className="grid grid-cols-1 md:grid-cols-2 px-20 gap-2 mx-2 md:mx-14 mt-10">
        <div className="flex items-center justify-center shadow">
          <img src={product.image} alt="product image" className="w-72" />
        </div>

        {/* product description div */}
        <div>
          <h2 className="text-2xl">{product.name}</h2>
          <div>
            <div className="mb-2">
              <img
                src={`/ratings/rating-${product.rating.stars * 10}.png`}
                alt="ratings"
                className="w-16 inline-block mr-1"
              />
              <span className="text-xs text-gray-500 mr-2">
                ({product.rating.count} reviews)
              </span>
              <span className="text-xs text-green-500">| In stock</span>
            </div>
            <span>${(product.priceCents / 100).toFixed(2)}</span>
          </div>
          {/* description div */}
          <div className=" ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              illum unde ex porro asperiores minus fugiat ipsa fuga, esse quasi
              explicabo dicta possimus incidunt. Quisquam recusandae magnam
              omnis cumque a.
            </p>
            <hr className="mt-4" />
          </div>
          {/* colors */}
          <div>
            <span>colors</span>
            <button className="w-4 h-4 rounded-full mx-1 my-3 bg-red-500 "></button>
            <button className="w-4 h-4 rounded-full mx-1 my-3 bg-green-500 "></button>
          </div>
          {/* sizes */}
          <div>
            <span className="mr-2">Size :</span>
            <button className=" rounded border-2 mx-1 py-1 px-2 text-xs border-gray-400 hover:bg-red-500 hover:text-white hover:border-none">
              XS
            </button>
            <button className=" rounded border-2 mx-1 py-1 px-2 text-xs border-gray-400 hover:bg-red-500 hover:text-white hover:border-none">
              X
            </button>
            <button className=" rounded border-2 mx-1 py-1 px-2 text-xs border-gray-400 hover:bg-red-500 hover:text-white hover:border-none">
              M
            </button>
            <button className=" rounded border-2 mx-1 py-1 px-2 text-xs border-gray-400 hover:bg-red-500 hover:text-white hover:border-none">
              L
            </button>
            <button className=" rounded border-2 mx-1 py-1 px-2 text-xs border-gray-400 hover:bg-red-500 hover:text-white hover:border-none">
              XL
            </button>
          </div>

          <div className="mt-3 flex iemcs-center gap-4">
            <div className="flex mt-1">
              <button
                className="border-2 border-gray-150 rounded py-3 text-base h-6 w-20 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                Add
              </button>
              <span className=" text-3xl flex items-center justify-center mx-4 -mt-1">
                {quantity}
              </span>
              <button
                className="border-2 border-gray-150 rounded py-3 text-base h-6 w-20 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white"
                onClick={() => {
                  setQuantity((prev) => (prev !== 0 ? prev - 1 : 0));
                }}
              >
                remove
              </button>
            </div>
            <button
              className="bg-red-500 rounded py-1 px-8 text-white"
              onClick={() => {
                addToCart(id, quantity);
                updateheader(cart.length)
              }}
            >
              buy now
            </button>
            <button
              className="rounded border-2 mx-1 py-1 px-2 text-xs border-gray-400"
              onClick={() => {
                addtowhishlist(id);
                updateheaderwishlist(wishlistProducts.length)
              }}
            >
              <img
                src={"/images/heart.svg"}
                alt="the heart icon"
                className="w-5"
              />
            </button>
          </div>

          {/* delivery options */}
          <div className="mt-4 w-7/12 border-2 rounded p-2">
            <div className="flex  p-2">
              <img
                src="/images/shipping-fast.svg"
                alt="delivery icon"
                className="w-8"
              />
              <div className="ml-3">
                <h3 className="text-sm">Free delivery</h3>
                <p className="text-xs underline font-bold">
                  Enter your postal code for deliver availability
                </p>
              </div>
            </div>
            <hr />
            <div className="flex  p-2">
              <img
                src="/images/rotate-right.svg"
                alt="return delivery"
                className="w-8"
              />
              <div className="ml-3">
                <h3 className="text-sm">Return Delivery</h3>
                <p className="text-xs underline font-bold">
                  Free 30 days delivery return. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="ml-8 md:ml-14">
          <div className="flex justify-between items-center mb-6 mt-10">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-8 bg-red-700  rounded"></div>
              <p className="font-semibold">related items</p>
            </div>
          </div>

          <div>
            <Product {...products[9]} recommended={true} updateheader={updateheader}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDisplay;
