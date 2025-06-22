import React from "react";
import { assets } from "../assets/assets";

const OrderPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base lg:text-lg">
      {/* Chính sách đổi trả */}
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Đổi hàng dễ dàng" />
        <p className="font-semibold">Đổi hàng dễ dàng</p>
        <p className="text-gray-400">Hỗ trợ đổi sản phẩm nhanh chóng, tiện lợi</p>
      </div>

      {/* Chính sách hoàn trả */}
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Hoàn trả trong 7 ngày" />
        <p className="font-semibold">Hoàn trả trong 7 ngày</p>
        <p className="text-gray-400">Đổi trả miễn phí trong vòng 7 ngày</p>
      </div>

      {/* Hỗ trợ khách hàng */}
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Hỗ trợ khách hàng 24/7" />
        <p className="font-semibold">Hỗ trợ khách hàng 24/7</p>
        <p className="text-gray-400">Luôn sẵn sàng lắng nghe và giải đáp</p>
      </div>
    </div>
  );
};

export default OrderPolicy;
