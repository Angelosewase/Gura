import Header from "../components/header";
import Footer from "../components/footer";
import { products } from "../products";

let product1 = products[0];
let product2 = products[1];

function CheckoutProduct(props) {
  return (
    <>
      <div className="grid grid-cols-2 my-2  gap-10 flex-1 ">
        <div className="flex gap-2 items-center">
          <img src={props.image} alt="" className="w-9" />
          <p className="text-sm">{props.name}</p>
        </div>
        <p className="text-sm">${props.priceCents / 100}</p>
      </div>
    </>
  );
}

const Checkout = () => {
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
                <label htmlFor="firstname" className="text-gray-500">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label htmlFor="companyname">Company name</label>
                <input
                  type="text"
                  name="companyname"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label htmlFor="streetaddress">Street address</label>
                <input
                  type="text"
                  name="streetaddress"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label htmlFor="apartment">
                  Apartement, Floor, etc(optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col  mt-1">
                <label htmlFor="town/city">Town/ city</label>
                <input
                  type="text"
                  name="town/city"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label htmlFor="phonenumber">Phone numbert</label>
                <input
                  type="tel"
                  name="phonenumber"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col mt-1 mb-1">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="bg-slate-100 outline-none rounded p-2"
                />
              </div>
              <input type="checkbox" name="saveinfo" />
              <label htmlFor="saveinfo" className="text-sm">
                save this information for faster check-out next time
              </label>
            </form>
          </div>

          <div className="w-6/12 mt-4">
            <div className="flex flex-col">
              <CheckoutProduct {...product1} />
              <CheckoutProduct {...product2} />
            </div>
            <div className="my-2">
              <div className="grid grid-cols-2  py-2">
                <p>subtotal:</p>
                <p className="pl-5">$1170</p>
              </div>
              <hr className="w-8/12" />
              <div className="grid grid-cols-2 py-2">
                <p>shipping:</p>
                <p className="pl-5">free</p>
              </div>
              <hr className="w-8/12" />
              <div className="grid grid-cols-2 py-2">
                <p className="font-semibold">Total:</p>
                <p className="pl-5">$1170</p>
              </div>
              
            </div>
            <div className="my-1">
              <div className="flex  gap-2 items-center">
                <input type="radio" name="paymentoption" className=" w-4"/>
                <label htmlFor="paymentoption"> Bank</label>
              </div>
              <div className="flex  gap-2 items-center">
                <input type="radio" name="paymentoption" className=" w-4"/>
                <label htmlFor="paymenyoption"> cash on delivery</label>
              </div>

            </div>

            <div className="flex gap-3 my-5">
              <input type="text" placeholder="apply coupon" className="pl-2 py-2 pr-4 text-lg rounded border-2 border-gray-700 placeholder:text-gray-400" />
              <button className="bg-red-500 text-white px-10 py-3 rounded ">Apply coupon</button>
            </div>
            <button className="bg-red-500 text-white px-10 py-3 rounded ">Place order</button>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
