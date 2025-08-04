import { React, useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { currrency } from "../App";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        console.log(response.data.products);
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Lấy danh sách sản phẩm thất bại: " + error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Xóa sản phẩm thành công");
        await fetchList(); // Cập nhật lại danh sách
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      console.error("Lỗi khi xóa sản phẩm:", e);
      toast.error("Không thể xóa sản phẩm: " + e.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">Danh sách tất cả sản phẩm</p>
      <div className="flex flex-col gap-2">
        {/* Tiêu đề bảng */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Hình ảnh</b>
          <b>Tên</b>
          <b>Danh mục</b>
          <b>Giá</b>
          <b className="text-center">Hành động</b>
        </div>

        {/* Danh sách sản phẩm */}
        {list.map((product, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={product.images[0]} alt="" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>
              {currrency}
              {product.price}
            </p>
            <p
              onClick={() => removeProduct(product._id)}
              className="text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700"
              title="Xóa sản phẩm"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
