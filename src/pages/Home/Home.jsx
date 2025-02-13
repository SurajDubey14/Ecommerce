import React from "react";
import Slider from "../../components/Swipper/Slider";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Image Background */}
        <img
          src="/Images/banner.jpg" // Replace with your image URL
          alt="Fashion Illustration"
          className="w-full min-h-screen object-cover drop-shadow-xs"
        />

        {/* Content over the Image */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-start items-center text-white px-5 py-10">
          <div className="content w-full md:w-[80%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Redefining elegance, style, and comfort
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              <span className="text-red-800 font-bold text-lg sm:text-xl md:text-2xl">
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

      <div className="flex flex-col md:flex-row items-center justify-around gap-x-10 py-10 md:py-20">
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Our Gallery
        </div>
        <div className="">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Home;
