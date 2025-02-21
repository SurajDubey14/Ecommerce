import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi"; // Hamburger icon
import { IoMdClose } from "react-icons/io"; // Cross icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex items-center justify-around w-full px-4 pt-5 text-xl">
      {/* Logo */}
      <NavLink to="/" className="text-4xl font-bold font-serif">
        Clothio
      </NavLink>

      {/* Links for larger screens */}
      <nav className="hidden md:block text-md font-semibold">
        <ul className="flex items-center gap-x-10 w-full">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/collection" className="hover:text-gray-400">
            Collection
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">
            Contact Us
          </NavLink>
          <NavLink to="/track-order" className="hover:text-gray-400">
            Track your Order
          </NavLink>
          {/* <NavLink to="/sale" className="hover:text-gray-400">
            Sale
          </NavLink> */}
        </ul>
      </nav>

      {/* Second nav for icons */}
      <nav>
        <ul className="md:flex items-center gap-x-7 hidden">
          <li>
            <NavLink to="" className="text-lg font-semibold">
              <IoIosSearch size={22} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className="text-lg font-semibold">
              <MdPersonOutline size={22} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/listing" className="text-lg font-semibold">
              <RiShoppingBagLine size={22} />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose size={30} /> : <HiMenuAlt3 size={30} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-[80%] bg-white h-full shadow-lg z-50 p-4 transform transition-all duration-300 md:hidden">
          {/* Logo */}
          <div className="text-2xl font-bold font-Syne mb-10">Clothio</div>
          <ul className="flex flex-col items-start gap-y-6">
            <NavLink
              to="/"
              className="text-md font-semibold"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/collection"
              className="text-md font-semibold"
              onClick={toggleMenu}
            >
              Collection
            </NavLink>
            <NavLink
              to="/contact"
              className="text-md font-semibold"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/track-order"
              className="text-md font-semibold"
              onClick={toggleMenu}
            >
              Track your Order
            </NavLink>
            {/* <NavLink
              to="/sale"
              className="text-md font-semibold"
              onClick={toggleMenu}
            >
              Sale
            </NavLink> */}
            <li className="">
              <NavLink
                to="/auth"
                onClick={toggleMenu}
                className={"items-center text-md font-semibold flex gap-x-2"}
              >
                <MdPersonOutline size={22} /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listing"
                onClick={toggleMenu}
                className={"items-center text-md font-semibold flex gap-x-2"}
              >
                <RiShoppingBagLine size={22} /> Cart
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
