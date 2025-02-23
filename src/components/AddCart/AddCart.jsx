import React from "react";
const Addcart = (props) => {
  return (
    <>
      <div >
        <div >
          <div className="relative h-[400px] xl:h-[500px] w-80  xl:w-96 overflow-hidden group">
            <img src={props.src} alt="fsdfsd"  className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"/>
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-x-2 items-center bg-black px-4 py-2 text-white justify-center max-w-fit transition-all duration-500 ease-in-out group-hover:bottom-5" >
              <a target="_blank" href="#" >
                {props.Carttitle}
              </a>
            </div>
          </div>
          <div className="text-xl pt-2 font-bold">
            <p>{props.title}</p>
          </div>
          <div className="flex items-center text-lg gap-x-5" >
            <p className="font-semibold">&#8377;{props.price}</p>
            <p className="font-semibold">&#8377;{props.org}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcart;