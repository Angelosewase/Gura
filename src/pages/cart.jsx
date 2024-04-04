import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { products } from "../data/products.js";
import { Link } from "react-router-dom";
import { cart} from "../data/cart.js";

function updateproductQuantity(productid, quantity){
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    if( element.id === productid){
     element.quantity = quantity
     return
    }
  }
}

function Products(props) {
  const cartProductsdisplay = [];
  for (let i = 0; i < cart.length; i++) {
    const cartlement = cart[i];
 //loop through each element in the cart 
    for (let j = 0; j < products.length; j++) {
      const product = products[j];
// loop throught each element of the products array
      if (product.id == cartlement.id) {
        let productquantity = cartlement.quantity;
        let newproduct = {...product,productquantity}
        cartProductsdisplay.push(newproduct);
      }
    }
  }
  return (
    <>
      {cartProductsdisplay.map((product) => (
        <CartProduct
          {...product}
          calculateSubtotal={props.calculateSubtotal}
          key={product.image}
        />
      ))}
    </>
  );
}

const CartProduct = (props) => {
  const [quantity, setQuantity] = React.useState(props.productquantity);
  let price = props.priceCents;
  let subtotal = (price / 100) * quantity;
  props.calculateSubtotal(subtotal);
  let id = props.id

  return (
    <>
      <div className="grid grid-cols-4  mt-8 border-b-2 border-gray-50 pb-4 ">
        <div className="flex gap-5  items-center">
          <img src={props.image} alt="" className="w-10" />
          <p className="text-sm">{props.name}</p>
        </div>
        <div className="flex items-center">
          <p>${props.priceCents / 100}</p>
        </div>
        <div className=" flex items-center pl-1">
          <input
            type="number"
            className="w-14 px-2 py-1 border-2 outline-none border-gray-400 rounded-md"
            min={1}
            defaultValue={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              updateproductQuantity(id,e.target.value)
            }}
          />
        </div>
        <div className="flex items-center">${subtotal.toFixed(2)}</div>
      </div>
    </>
  );
};

const Checkoutprocessdetails = (props) => {
  return (
    <>
      <div className="border-2 py-4 px-4 rounded border-black flex-1">
        <h1 className="font-semibold">Cart Total</h1>
        <div className="flex justify-between border-b-2 py-2 mb-2">
          <p className="text-sm">Subtotal:</p>
          <span className="text-sm">${props.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b-2 py-2 mb-2">
          <p className="text-sm">shipping:</p>
          <span className="text-sm"> free</span>
        </div>
        <div className="flex justify-between  py-2 mb-2">
          <p className="text-sm">Total:</p>
          <span className="text-sm">${props.total.toFixed(2)}</span>
        </div>
        <button className="bg-red-700 text-white rounded py-3 px-5 mx-20">
          <Link to={"/checkout"}> process to checkout</Link>
        </button>
      </div>
    </>
  );
};

const Cart = () => {
  const [total, setTotal] = React.useState(0);
  let values = [];

  function calculateSubtotal(productSubtotal) {
    for (let index = 0; index < values.length; index++) {
      const element = values[index];
      if (productSubtotal == element) {
        return;
      }
    }
    values.push(productSubtotal);
    setTotal(values.reduce((accumulator, value) => accumulator + value, 0));
  }

  return (
    <>
      <Header />
      <div className="mx-20">
        <div className="mt-10">
          <span className="opacity-50">Home</span> /Cart
        </div>

        <div className=" p-1 mt-10">
          <div>
            <div className="grid grid-cols-4 font-semibold  ">
              <p>product</p>
              <p>price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            <Products calculateSubtotal={calculateSubtotal} />
          </div>
          <div className="mt-3 flex justify-between pr-[5%]">
            <button className="border-2 border-gray-300 text-sm font-semibold rounded-sm px-5 py-3">
              Return to shop
            </button>
            <button className="border-2 border-gray-300 text-sm font-semibold rounded-sm px-5 py-3 ml-4">
              update cart
            </button>
          </div>
          <div className="flex  pr-[5%] mt-20 gap-[25%]">
            <div>
              <input
                type="text"
                placeholder="coupon code"
                className="border-2 border-gray-700 rounded-sm py-2 outline-none mr-4 text-lg pl-2"
              />
              <button className="bg-red-700 text-white px-10 py-3 rounded">
                apply coupon
              </button>
            </div>
            <Checkoutprocessdetails total={total} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
