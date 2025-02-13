import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#171717] rounded-tr-[34%] text-white">
        <div className="w-full p-12">
          {/* Top footer */}
          <div className="pb-12">
            <div className="font-roboto text-lg font-semibold italic pb-8">
              #JoinClothioLife
            </div>
            <div className="text-4xl font-semibold w-3/5">
              Play it our way. Unleash your style with Clothio’s vibrant fashion
            </div>
            <p className="font-roboto pt-4 w-3/5">
              A lifestyle for the bold and dynamic. For the trendsetters and
              trailblazers. Clothio moves with you, ready to seize every
              opportunity.
            </p>
            {/* <div className="mt-8">
              <form action="" className="flex items-center w-3/5">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  className="bg-gray-600 text-white py-2 px-4 text-medium w-full rounded-l-lg border-none"
                />
                <button
                  type="submit"
                  className="bg-gray-600 text-white py-2 px-8 rounded-r-lg border-none cursor-pointer"
                >
                  <RiCheckDoubleFill className="text-xl" />
                </button>
              </form>
            </div> */}
          </div>

          {/* Divider line */}
          <p className="border-b-2 border-white mb-8"></p>

          {/* Footer links */}
          <div className="flex justify-between">
            {["Men", "Women", "Children"].map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <p className="font-roboto text-lg font-semibold pb-4">
                  Customer Support
                </p>
                <ul className="space-y-2">
                  {["Men", "Women", "Children"].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-white hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider line */}
          <p className="border-b-2 border-white mt-8 mb-8"></p>

          <div className="flex justify-between items-center ">
            {/* Social Media and Copyright */}
            <div className="flex justify-center items-center gap-x-5">
              <div className="flex items-center text-lg font-semibold">
                follow us:
              </div>
              <div className="flex items-center space-x-8">
                <a
                  href="https://www.linkedin.com/in/suraj-dubey-b83b15237/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bg3ALG04jQwCGj2AjLSfhYw%3D%3D"
                  target="_blank"
                  className="text-white text-xl hover:text-blue-600"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/SurajDubey14"
                  target="_blank"
                  className="text-white text-xl hover:text-gray-600"
                >
                  <TbBrandGithubFilled />
                </a>
                <a
                  href="https://www.instagram.com/surajpandat_01/"
                  target="_blank"
                  className="text-white text-xl hover:text-pink-600"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100011569590964"
                  target="_blank"
                  className="text-white text-xl hover:text-blue-500"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div className="text-center text-white font-semibold pt-8">
              &copy; Clothio STORE 2024-2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
