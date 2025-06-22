import React from "react";

const NewsletterBox = () => {
  function onSubmitHandler(e) {
    e.preventDefault();
    // Bạn có thể thêm xử lý gửi email ở đây
  }

  return (
    <div className="text-center my-16 px-4">
      <p className="text-2xl font-semibold text-gray-800">
        Đăng ký nhận tin & nhận ưu đãi 20%
      </p>
      <p className="text-gray-500 mt-3">
        Nhận thông tin khuyến mãi, bộ sưu tập mới và xu hướng thời trang từ Xuân
        Hải.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center justify-center gap-3 mx-auto my-6 border border-gray-300 rounded-lg pl-3"
      >
        <input
          type="email"
          placeholder="Nhập email của bạn"
          required
          className="w-full sm:flex-1 outline-none py-3 text-sm"
        />
        <button
          type="submit"
          className="hover:opacity-75 bg-black text-white text-xs px-6 py-3 rounded-r-lg"
        >
          ĐĂNG KÝ
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
