import React from "react";
import { wishlistProducts } from "../data/wishlist";
import { cart } from "../data/cart.js";
import Notification from "./notifications.jsx";
import { Link } from "react-router-dom";

export function addtowhishlist(data) {
  let productduplicated = true;
  for (let i = 0; i < wishlistProducts.length; i++) {
    const element = wishlistProducts[i];
    if (element == data) {
      productduplicated = false;
    }
  }
  if (productduplicated) {
    wishlistProducts.push(data);
  }
}

function removeformwishlist(data, clicked) {
  for (let i = 0; i < wishlistProducts.length; i++) {
    const element = wishlistProducts[i];
    if (element == data) {
      wishlistProducts.splice(i, 1);
      break;
    }
  }
  clicked((prev) => !prev);
}

//THE ICON DIV FOR ADDING TO THE CART AND TO THE WISHLIST

const ProductIconDiv1 = (props) => {
  let display = props.recommended ? "hidden" : "flex";
  let data = props.data;
  return (
    <>
      <div className="absolute md:top-2 md:right-2 top-2 right-2">
        <div
          className={`w-8 h-8 ${display} items-center justify-center bg-gray-100 rounded-full mb-1 hover:bg-gray-400`}
          onClick={() => {
            addtowhishlist(data);
            props.updateheaderwishlist(wishlistProducts.length);
            props.handlenotifications("add", "wishlist");
          }}
        >
          <img src={"/images/heart.svg"} alt="the heart icon" className="w-5" />
        </div>
        <div
          className={`w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full `}
        >
         
          <Link to={`/product/${data}`}>
            <img src={"/images/eye.svg"} alt="the eye icon" className="w-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

//THE ICON DIV FOR REMOVING FROM THE WISHLIST
const ProductIconDiv2 = ({
  data,
  clicked,
  updateheaderwishlist,
  handlenotifications,
}) => {
  return (
    <>
      <div className="absolute top-2 right-2 ">
        <div
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-500 rounded-full mb-2 "
          onClick={() => {
            removeformwishlist(data, clicked);
            updateheaderwishlist(wishlistProducts.length);
            handlenotifications("remove");
          }}
        >
          <img src={"/images/trash.svg"} alt="the heart icon" className="w-5" />
        </div>
      </div>
    </>
  );
};

export function addToCart(id, quantity) {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === id) {
      element.quantity=quantity
      return;
    }
  }
  cart.push({ id, quantity });
}

function isfoundinacart(id) {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    if (element.id === id) {
      return true;
    }
  }
}

function Product(props) {
  const [addedtocart, setaddtocart] = React.useState(
    isfoundinacart(props.id) || false
  );
  let ProductIconDiv = props.wishlist ? ProductIconDiv2 : ProductIconDiv1;
  const addtocartdivref = React.useRef(null);

  const [notification, setnotfication] = React.useState(false);
  const [type, setType] = React.useState();
  const [location, setLocation] = React.useState();

  function handlenotifications(type, location) {
    setnotfication(true);
    setType(type);
    setLocation(location);
    setTimeout(() => {
      setnotfication(false);
    }, 3000);
  }

  return (
    <>
      <div className=" inline-block relative my-2 md:w-auto  ">
        <div>
          <div
            className="md:h-56 md:w-56 w-[165px] h-[165px] flex justify-center border-2 rounded-lg shadow-sm hover:shadow-lg transition relative "
            onMouseEnter={() => {
              addtocartdivref.current.classList.remove("invisible");
            }}
            onMouseLeave={() => {
              addtocartdivref.current.classList.add("invisible");
            }}
          >
            <img src={props.image} alt="" className="md:w-36 md:h-36 w-24 h-24 my-auto " />

            <div
              className="absolute bottom-0 bg-black text-white w-full h-8 font-3xl flex justify-center rounded-sm invisible "
              ref={addtocartdivref}
              onClick={() => {
                addToCart(props.id, 1);
                setaddtocart(true);
                props.updateheader(cart.length);
                handlenotifications("add", "cart");
              }}
            >
              <p className="my-auto">
                {addedtocart ? "Added to cart" : "Add to cart"}
              </p>
            </div>
          </div>
          <div className=" h-18 flex flex-col justify-center items-start ">
            <h1 className="font-semibold md:w-56 w-42">{props.name}</h1>
            <div>
              <span className="text-sm mr-2">
                ${(props.priceCents / 100).toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                $
                {(
                  props.priceCents / 100 +
                  (props.priceCents / 100) * 0.1
                ).toFixed(2)}
              </span>
            </div>
            <div>
              <img
                src={`/ratings/rating-${props.rating.stars * 10}.png`}
                alt="the ratings image"
                className=" w-14 inline-block"
              />
              <span className="text-sm">({props.rating.count})</span>
            </div>
          </div>
        </div>

        <ProductIconDiv
          recommended={props.recommended}
          data={props.id}
          clicked={props.clicked}
          updateheaderwishlist={props.updateheaderwishlist}
          handlenotifications={handlenotifications}
        />
        {notification ? <Notification type={type} location={location} /> : ""}
      </div>
    </>
  );
}


export default Product;
