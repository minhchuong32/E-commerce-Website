import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">SẢN PHẨM BÁN CHẠY</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Bộ sưu tập mới nhất
          </h1>

          <div className="flex items-center gap-2 cursor-pointer group">
            <p className="text-sm md:text-base group-hover:underline transition">MUA NGAY</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141] group-hover:bg-black transition-all"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="Ảnh banner thời trang Xuân Hải"
      />
    </div>
  );
};

export default Hero;
