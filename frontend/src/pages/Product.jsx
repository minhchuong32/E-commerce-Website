import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, cartItems, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // Tìm sản phẩm theo ID từ danh sách
  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setImage(item.image[0]);
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Thông tin sản phẩm */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Hình ảnh sản phẩm */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                onClick={() => setImage(img)}
                key={index}
                src={img}
                alt={`Hình ảnh sản phẩm ${index + 1}`}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Chi tiết sản phẩm */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-2 my-3">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-3" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122 đánh giá)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {productData.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Chọn kích thước */}
          <div className="flex flex-col gap-4 my-8">
            <p>Chọn kích thước</p>
            <div className="flex gap-4">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border rounded-md py-2 px-4 ${
                    item === size ? "border-pink-800" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Thêm vào giỏ hàng
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Sản phẩm chính hãng 100%</p>
            <p>Hỗ trợ thanh toán khi nhận hàng</p>
            <p>Đổi trả dễ dàng trong vòng 7 ngày</p>
          </div>
        </div>
      </div>

      {/* Mô tả và đánh giá */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Mô tả</b>
          <p className="border px-5 py-3 text-sm">Đánh giá (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Một website thương mại điện tử là nền tảng trực tuyến cho phép các doanh nghiệp bán sản phẩm hoặc dịch vụ trực tiếp cho người tiêu dùng qua Internet. Nó cung cấp một "cửa hàng ảo" nơi khách hàng có thể duyệt, chọn và mua sản phẩm thông qua các phương thức thanh toán khác nhau.
          </p>
          <p>
            Website thương mại điện tử giúp người dùng mua sắm dễ dàng và thuận tiện, cho phép so sánh giá, xem đánh giá và đặt hàng chỉ trong vài cú nhấp chuột.
          </p>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"> </div>
  );
};

export default Product;
