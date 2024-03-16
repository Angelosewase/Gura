import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Header />
      <div className="flex flex-row my-16 justify-between">
        <div className="w-6/12">
          <img
            src={"/images/cart.png"}
            alt="this is the cart image"
            className="w-full"
          />
        </div>
        <div className="flex flex-col mx-auto w-2/6  my-auto ">
          <h1 className="text-3xl mb-2">Create account</h1>
          <p className=" text-sm mb-8 text-gray-700">Enter your details below</p>
         <div className="flex flex-col mb-1">
            <input type="text" placeholder="name" className="border-b-2 w-2/4 mb-6 text-black outline-none placeholder:text-gray-400 placeholder:text-sm" />
            <input type="email" placeholder="Email or phone number" className="border-b-2 w-2/4 mb-6 text-black outline-none placeholder:text-gray-400 placeholder:text-sm" />
            <input type="text" placeholder="Password" className="border-b-2 w-2/4 mb-6 text-black outline-none placeholder:text-gray-400 placeholder:text-sm" />
          </div>
          <div className="flex justify-between w-6/12 items-center flex-col">
            <button className="h-12 w-full bg-red-500 rounded-sm text-white text-md">create account</button>
            <div className="h-11 mt-2 w-full border-2 border-gray-300 text-md flex items-center justify-center rounded-sm">
                <img src={"https://www.google.com/favicon.ico"}alt="the google icon" className="w-6 mr-2" />
                Sign up with google</div>
          </div>
          <div className="flex justify-between w-3/6 mt-2">
            <p className="text-sm ml-2 opacity-95">already have an account?</p>
            <span className="text-sm border-b-2 mb-1 border-b-black mr-2"><Link to="/login">Log in</Link></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
