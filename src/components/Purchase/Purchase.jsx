import React from "react";

const Purchase = (props) => {
  return (
    <>
      <div className=""> 
        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-x-6 w-full">
          <div className="h-[400px] xl:h-[550px] w-full xl:w-96 overflow-hidden group">
            <img
              src={props.src}
              alt="fsdfsd"
              className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col w-full xl:w-96 bg-white drop-shadow-2xl rounded-lg h-fit p-6 xl:p-10">
            <p className="font-semibold text-xl font-sans">{props.desc}</p>
            <div className="flex items-center text-lg gap-x-5">
              <p className="font-semibold">&#8377;{props.price}</p>
              <p className="font-semibold line-through text-gray-600">
                &#8377;{props.org}
              </p>
            </div>
            <p>Tax included. <span className="underline">Shipping</span> calculated at checkout.</p>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-y-4 xl:gap-x-2 mt-9">
              <button className="bg-black text-white px-4 py-2 w-full xl:w-[48%]">
                {props.Carttitle}
              </button>
              <button className="bg-black text-white px-4 py-2 w-full xl:w-[48%]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
