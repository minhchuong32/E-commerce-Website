import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-40">
      {/* Nội dung chính của footer */}
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 mb-10 text-sm">
        {/* Cột 1: Giới thiệu */}
        <div>
          <Link to="/">
            <img src={assets.logo} className="mb-5 w-52" alt="Xuân Hải Logo" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Xuân Hải là thương hiệu thời trang uy tín, mang đến phong cách trẻ trung, năng động và phù hợp với mọi độ tuổi.
          </p>
        </div>

        {/* Cột 2: Điều hướng */}
        <div>
          <p className="text-xl font-medium mb-5">CÔNG TY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:underline hover:text-black cursor-pointer">Trang chủ</li>
            <li className="hover:underline hover:text-black cursor-pointer">Về chúng tôi</li>
            <li className="hover:underline hover:text-black cursor-pointer">Giao hàng</li>
            <li className="hover:underline hover:text-black cursor-pointer">Chính sách bảo mật</li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div>
          <p className="text-xl font-medium mb-5">LIÊN HỆ</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><span className="font-semibold">SĐT:</span> +84 934 916 255</li>
            <li><span className="font-semibold">Email:</span> haihan.29118@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Dòng cuối cùng */}
      <hr className="border-t border-gray-300" />
      <p className="py-5 text-sm text-center text-gray-500">
        © 2025 Xuân Hải – Thời trang cho mọi phong cách.
      </p>
    </div>
  );
};

export default Footer;
