import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Lọc các sản phẩm bán chạy
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSellers(bestProduct.slice(0, 3)); // Lấy 5 sản phẩm bán chạy đầu tiên
  }, [products]);

  return (
    <div className="my-10">
      {/* Tiêu đề Bán Chạy Nhất */}
      <div className="text-center text-3xl py-8">
        <Title text1={"SẢN PHẨM"} text2={"BÁN CHẠY"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Những sản phẩm được khách hàng tin dùng và lựa chọn nhiều nhất tại cửa hàng của chúng tôi.
        </p>
      </div>

      {/* Danh sách sản phẩm bán chạy */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {bestSellers.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              images={item.images}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
