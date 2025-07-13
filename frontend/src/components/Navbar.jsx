import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center py-5 font-mdedium">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-56 h-20" />
      </Link>

      {/* Liên kết điều hướng */}
      <ul className="sm:flex gap-5 text-sm text-gray-700 hidden">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>TRANG CHỦ</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>BỘ SƯU TẬP</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>GIỚI THIỆU</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>LIÊN HỆ</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Các biểu tượng chức năng */}
      <div className="flex items-center gap-5">
        {/* Tìm kiếm */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Tìm kiếm"
          className="w-5 cursor-pointer"
        />

        {/* Hồ sơ người dùng */}
        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="Tài khoản"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Hồ sơ của tôi</p>
              <p className="cursor-pointer hover:text-black">Đơn hàng</p>
              <p className="cursor-pointer hover:text-black">Đăng xuất</p>
            </div>
          </div>
        </div>

        {/* Giỏ hàng */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Giỏ hàng"
            className="w-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Menu icon cho thiết bị nhỏ */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>

      {/* Sidebar cho màn hình nhỏ */}
      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } sm:hidden`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Quay lại" />
            <p>Quay lại</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/"> TRANG CHỦ </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection"> BỘ SƯU TẬP </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about"> GIỚI THIỆU </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact"> LIÊN HỆ </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
