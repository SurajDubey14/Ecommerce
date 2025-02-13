import React from "react";
import { NavLink } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 text-xl">
      <div className="text-2xl font-bold font-Syne">Clothio</div>

      {/* Links */}
      <nav className="links font-semibold">
        <ul className="flex items-center gap-x-5 w-full">
          <NavLink to="/" className={""}>
            Home
          </NavLink>
          <NavLink to="/collection" className={""}>
            Collection
          </NavLink>
          <NavLink to="/contact" className={""}>
            Contact Us
          </NavLink>
          <NavLink to="/track-order" className={""}>
            Track your Order
          </NavLink>
        </ul>
      </nav>

      {/* Second nav */}
      <nav>
        <ul className={"flex items-center gap-x-4"}>
          <li>
            <NavLink to="">
              <IoIosSearch />
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth">
              <MdPersonOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to="/listing">
              <RiShoppingBagLine />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
