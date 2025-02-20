import React from "react";
import Slider from "../../components/Swipper/Slider";
import Category from "../Category.jsx/Category";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Image Background */}
        <img
          src="/Images/banner.jpg" // Replace with your image URL
          alt="Fashion Illustration"
          className="w-full h-96 sm:min-h-screen object-cover drop-shadow-xs"
        />

        {/* Content over the Image */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-start items-center text-white px-5 py-10">
          <div className="content w-full md:w-[80%] px-2 sm:px-10">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-serif">
              Redefining elegance, style, and comfort
            </h1>
            <p className="text-sm  md:text-xl font-bold mt-2">
              <span className="text-red-800 font-bold text-lg sm:text-xl md:text-4xl font-serif">
                Clothio
              </span>{" "}
              embodies elegance and individuality, merging timeless style with
              modern trends. Our garments prioritize comfort and sophistication,
              empowering you to embrace your unique fashion journey with
              confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-x-10 py-10 md:py-20 ">
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
          Our Gallery
        </div>
        <div>
          <p className="text-7xl font bold">Slider</p>
          {/* <Slider /> */}
        </div>
      </div>

      <div className="category flex xl:flex-row flex-col justify-center gap-x-10 w-full items-center sm:py-2 py-10">
        <div >
          <h1 className="text-4xl font-semibold font-serif">Category : </h1>
        </div>
        <div>
          <Category />
        </div>
      </div>
    </>
  );
};

export default Home;
