import { React, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubcategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller ? "true" : "false");
      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Thêm sản phẩm thành công!");
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Lỗi khi gửi biểu mẫu:", error);
      toast.error("Lỗi khi gửi biểu mẫu: " + error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Tải ảnh sản phẩm lên</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, i) => (
            <label htmlFor={`image${i + 1}`} key={i}>
              <img
                className="w-20 cursor-pointer"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                onChange={(e) =>
                  [setImage1, setImage2, setImage3, setImage4][i](e.target.files[0])
                }
                type="file"
                id={`image${i + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Tên sản phẩm</p>
        <input
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          required
          placeholder="Nhập tên sản phẩm"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Mô tả sản phẩm</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          required
          placeholder="Nhập mô tả chi tiết"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div>
          <p className="mb-2">Danh mục</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2"
          >
            <option value="Men">Nam</option>
            <option value="Women">Nữ</option>
            <option value="Kids">Trẻ em</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Danh mục phụ</p>
          <select
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2"
          >
            <option value="Topwear">Áo</option>
            <option value="Bottomwear">Quần</option>
            <option value="Winterwear">Đồ mùa đông</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Giá sản phẩm</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="VD: 100"
            type="number"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Kích cỡ sản phẩm</p>
        <div className="flex gap-2 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((s) => s !== size)
                    : [...prev, size]
                )
              }
              className="cursor-pointer"
            >
              <p
                className={`${
                  sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Thêm vào danh sách bán chạy
        </label>
      </div>

      <button
        type="submit"
        className="bg-black cursor-pointer text-white px-5 py-2 sm:px-7 sm:py-2 text-xs sm:text-sm hover:bg-gray-700 transition"
      >
        THÊM
      </button>
    </form>
  );
};

export default Add;
