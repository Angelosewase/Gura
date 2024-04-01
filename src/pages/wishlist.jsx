import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/product";
import { products } from "../products";

let productOne = products[2];
let productTwo = products[5]

const WishList = () => {
  return (
    <>
      <Header />
      <div className="mx-20">
        <div>
          <div className="flex justify-between items-center mb-6 mt-10">
            <p className="font-semibold">Wishlist (4)</p>
            <button className="border-2 px-4  py-1 rounded">Move all to bag</button>
          </div>
          <div>
            <Product {...productOne} wishlist={true}/>
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
