import React from "react";

const Addnotification = (props) => {
  return (
    <>
      <div className="fixed flex items-center justify-center bottom-3 right-5 border-2 w-60 h-14 rounded z-[10] bg-emerald-50 border-gray-50 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="25"
          height="25"
        >
          <path
            d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707"
            style={{ fill: "green" }}
          />
        </svg>

        <p className="text-base">Product added to {props.location}</p>
        <p className="bg-green-500 w-full h-1 absolute bottom-0"></p>
      </div>
    </>
  );
};


//this is not applied particulary now but it may be used in later remove notification usage
const Removenotification = () => {
  return (
    <>
      <div className="fixed flex items-center justify-center bottom-3 right-5 border-2 p-2 h-14 rounded z-[10] bg-emerald-50 border-gray-50 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512.021 512.021"
          style={{ enableBackground: "new 0 0 512.021 512.021" }}
          xmlSpace="preserve"
          width="15"
          height="15"
        >
          <g>
            <path
              d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"
              style={{ fill: "red" }}
            />
          </g>
        </svg>

        <p className="text-base">Product removed from the wishlist</p>
        <p className="bg-red-500 w-full h-1 absolute bottom-0"></p>
      </div>
    </>
  );
};

const Notification = (props) => {
  const [type, setype] = React.useState(props.type);
  const add = type === "add" ? true : false;
  return <>{add ? <Addnotification location={props.location} /> : <Removenotification />}</>;
};

export default Notification;
