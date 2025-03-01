import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full lg:rounded-tr-[34%] text-white bg-[#171717] p-12">
          {/* Top footer */}
          <div className="pb-12">
            <div className="font-roboto text-lg font-semibold italic pb-8 text-center md:text-left">
              #JoinClothioLife
            </div>
            <div className="text-4xl font-semibold w-full md:w-3/5 text-center md:text-left">
              Play it our way. Unleash your style with Clothio’s vibrant fashion
            </div>
            <p className="font-roboto pt-4 w-full md:w-3/5 text-center md:text-left">
              A lifestyle for the bold and dynamic. For the trendsetters and
              trailblazers. Clothio moves with you, ready to seize every
              opportunity.
            </p>
          </div>

          {/* Divider line */}
          

          {/* Footer links */}
          <div className="flex py-10 flex-wrap justify-start sm:gap-x-[100px] items-left gap-y-8 md:gap-y-0 md:flex-row">
            <div>
              <h1 className="font-semibold text-2xl font-serif uppercase">
                QUICK LINKS
              </h1>

              <ul className="flex flex-col mt-4">
                <li>
                  <Link href="#" className="text-white hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:underline">
                    Returns & Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-semibold text-2xl font-serif uppercase">
                CONNECT WITH US
              </h1>

              <ul className="flex flex-col mt-4">
                <li>
                  <Link href="#" className="text-white hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:underline">
                   Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:underline">
                    Track Your Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider line */}
         

          <div className="flex flex-col md:flex-row justify-between items-center mt-10">
            {/* Social Media and Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-x-5 mb-6 md:mb-0">
              <div className="flex items-center text-lg font-semibold mb-4 md:mb-0">
                follow us:
              </div>
              <div className="flex items-center gap-x-8">
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

            <div className="text-center text-white font-semibold pt-8 md:pt-0">
              &copy; Clothio STORE 2024-2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
