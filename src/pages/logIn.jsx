import Header from "../components/header";
import Footer from "../components/footer";

function Login() {
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
          <h1 className="text-3xl mb-4">Log in to exclusive</h1>
          <p className=" text-sm mb-8 text-gray-700">Enter your details below</p>
         <div className="flex flex-col mb-1">
            <input type="text" placeholder="Email or phone number" className="border-b-2 w-2/4 mb-4 text-black outline-none placeholder:text-gray-400 placeholder:text-sm" />
            <input type="text" placeholder="Password" className="border-b-2 w-2/4 mb-4 text-black outline-none placeholder:text-gray-400 placeholder:text-sm" />
          </div>
          <div className="flex justify-between w-6/12 items-center">
            <button className="h-10 w-24 bg-red-500 rounded-sm text-white text-sm">Log in</button>
            <span className="text-red-400">forgot password?</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
