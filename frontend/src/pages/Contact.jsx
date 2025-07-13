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
          <p className="text-gray-600">Điện Thoại: +84 934 916 255</p>
          <p className="text-gray-600">
            Tiệm may Xuân Hải, KDC 24, Thôn Thạch Thang, xã Lân Phong, huyện Mộ
            Đức, tỉnh Quảng Ngãi
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.{" "}
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white">
            Join Our Team
          </button>
        </div>

      </div>
        <NewsletterBox />
    </div>
  );
};

export default Contact;
