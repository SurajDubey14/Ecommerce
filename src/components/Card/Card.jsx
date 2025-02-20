

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="relative h-[500px] w-96 overflow-hidden group">
      {/* Image with zoom effect on hover */}
      <img
        src={props.data.img}
        alt={props.data.title}
        className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Text container with animation from bottom to top */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-x-2 items-center bg-black p-2 rounded-md text-white justify-center max-w-fit transition-all duration-500 ease-in-out group-hover:bottom-5">
        <Link to={`/${props.data.link}`}>{props.data.title}</Link>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Card;

