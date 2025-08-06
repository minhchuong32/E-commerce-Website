import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewlesterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"LIÊN HỆ"} text2={"CHÚNG TÔI"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="Liên Hệ Chúng Tôi"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">
            Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi
            qua email hoặc số điện thoại dưới đây.
          </p>
          <p className="text-gray-600">Email: haihan.291118@gmail.com</p>
          <p className="text-gray-600">Điện thoại:<b>+84 934 916 255</b> </p>
          <p className="text-gray-600">
            Địa chỉ: Tiệm may Xuân Hải, KDC 24, Thôn Thạch Thang, xã Lân Phong, huyện Mộ
            Đức, tỉnh Quảng Ngãi
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Tuyển dụng tại Forever
          </p>
          <p className="text-gray-500">
            Tìm hiểu thêm về đội ngũ của chúng tôi và các vị trí đang tuyển.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white">
            Ứng tuyển ngay
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
