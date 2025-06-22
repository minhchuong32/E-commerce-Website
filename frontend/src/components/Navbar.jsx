import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="flex justify-between items-center py-5 font-mdedium">
      {/* Logo  */}
      <img src={assets.logo} alt="Logo" className="w-56 h-20" />
      {/* Navigation Links */}
      <ul className="sm:flex gap-5 text-sm text-gray-700 hidden">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Navigation Links */}
      <div className="flex items-center gap-5">
        {/* Search card  */}
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

        {/* Profile card */}
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          {/* when you hover over this icon, a dropdown menu appears */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart card */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>

      {/* Sidebar for small screen */}
      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden  bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } sm:hidden`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/'> HOME </NavLink>
          <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/collection'> COLLECTION </NavLink>
          <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/about'> ABOUT </NavLink>
          <NavLink onClick={() =>setVisible(false)} className='py-2 pl-6 border' to='/contact'> CONTACT </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
