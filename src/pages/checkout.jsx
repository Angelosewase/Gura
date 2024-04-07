import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { products } from "../data/products";
import { cart } from "../data/cart.js";

let product1 = products[0];
let product2 = products[1];

function CheckoutProduct(props) {
  let subtotal = ((props.priceCents / 100)* props.productquantity)
  props.calculatesubtotal(subtotal)
  return (
    <>
      <div className="grid grid-cols-2 my-2  gap-10 flex-1 ">
        <div className="flex gap-2 items-center">
          <img src={props.image} alt="" className="w-9" />
          <p className="text-sm">{props.name}</p>
        </div>
        <p className="text-sm">${subtotal}</p>
      </div>
    </>
  );
}

const Checkoutproducts = (props) => {
  const checkoutProductsdisplay = [];
  for (let i = 0; i < cart.length; i++) {
    const cartlement = cart[i];
 //loop through each element in the cart 
    for (let j = 0; j < products.length; j++) {
      const product = products[j];
// loop throught each element of the products array
      if (product.id == cartlement.id) {
        let productquantity = cartlement.quantity;
        let newproduct = {...product,productquantity}
        checkoutProductsdisplay.push(newproduct);
      }
    }
  }
   
  return (
    <>
        {checkoutProductsdisplay.map((product)=>(
        <CheckoutProduct {...product} calculatesubtotal={props.calculatesubtotal} key={product.image}/>
        ))}
    </>
  );
};
const CheckoutPriceDetails = (props) => {
  return (
    <>
      <div className="my-2">
        <div className="grid grid-cols-2  py-2">
          <p>subtotal:</p>
          <p className="pl-5">${(props.total).toFixed(2)}</p>
        </div>
        <hr className="w-8/12" />
        <div className="grid grid-cols-2 py-2">
          <p>shipping:</p>
          <p className="pl-5">free</p>
        </div>
        <hr className="w-8/12" />
        <div className="grid grid-cols-2 py-2">
          <p className="font-semibold">Total:</p>
          <p className="pl-5">${(props.total).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

const Checkout = () => {
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
        <div className=" my-10">
          <span className="opacity-50">
            Account/ My account / Product / view cart
          </span>{" "}
          / Checkout
        </div>

        <h1 className="text-3xl">Billing Details</h1>

        <div className="flex justify-between mt-5">
          <div className=" w-4/12">
            <form>
              <div className="flex flex-col mt-1">
                <label  className="text-gray-500">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label >Company name</label>
                <input
                  type="text"
                  name="companyname"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label >Street address</label>
                <input
                  type="text"
                  name="streetaddress"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label >
                  Apartement, Floor, etc(optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col  mt-1">
                <label >Town/ city</label>
                <input
                  type="text"
                  name="town/city"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label>Phone numbert</label>
                <input
                  type="tel"
                  name="phonenumber"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1 mb-1">
                <label >Email address</label>
                <input
                  type="email"
                  name="email"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <input type="checkbox" name="saveinfo" />
              <label  className="text-sm">
                save this information for faster check-out next time
              </label>
            </form>
          </div>

          <div className="w-6/12 mt-4">
            <div className="flex flex-col">
              <Checkoutproducts calculatesubtotal={calculateSubtotal}/>
            </div>
            <CheckoutPriceDetails total={total}/>
            <div className="my-1">
              <div className="flex  gap-2 items-center">
                <input type="radio" name="paymentoption" className=" w-4" />
                <label > Bank</label>
              </div>
              <div className="flex  gap-2 items-center">
                <input type="radio" name="paymentoption" className=" w-4" />
                <label> cash on delivery</label>
              </div>
            </div>

            <div className="flex gap-3 my-5">
              <input
                type="text"
                placeholder="apply coupon"
                className="pl-2 py-2 pr-4 text-lg rounded border-2 border-gray-700 placeholder:text-gray-400"
              />
              <button className="bg-red-500 text-white px-10 py-3 rounded ">
                Apply coupon
              </button>
            </div>
            <button className="bg-red-500 text-white px-10 py-3 rounded ">
              Place order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
