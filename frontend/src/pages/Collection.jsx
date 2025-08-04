import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    //Nếu hiện thanh search và có từ khóa tìm kiếm thì lọc sản phẩm theo từ khóa
    if (showSearch && search) {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterProductCopys = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopys.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopys.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Bộ lọc */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          BỘ LỌC
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Lọc theo danh mục */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">DANH MỤC</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value="Men" onChange={toggleCategory} />{" "}
              Nam
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value="Women" onChange={toggleCategory} />{" "}
              Nữ
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value="Kids" onChange={toggleCategory} />{" "}
              Trẻ em
            </p>
          </div>
        </div>

        {/* Lọc theo loại sản phẩm */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">LOẠI SẢN PHẨM</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />{" "}
              Áo
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />{" "}
              Quần
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
              />{" "}
              Đồ mùa đông
            </p>
          </div>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="Tất cả" text2="SẢN PHẨM" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-400 text-sm px-2"
          >
            <option value="relevant">Sắp xếp: Phù hợp nhất</option>
            <option value="low-high">Giá: Thấp đến cao</option>
            <option value="high-low">Giá: Cao đến thấp</option>
          </select>
        </div>

        {/* Hiển thị sản phẩm */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              images={item.images}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
