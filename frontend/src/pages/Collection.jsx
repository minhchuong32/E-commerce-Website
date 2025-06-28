import { useContext, useState, useEffect, use } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // Toggle the category based on the checkbox value
  const toggleCategory = (e) => {
    // If the category is already selected, remove it from the state
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    }
    // If the category is not already selected, add it to the state
    else {
      setCategory((prev) => [...prev, e.target.value]); // ...prev spreads the previous state (all previous categories)
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]); // ...prev spreads the previous state (all previous subcategories)
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice(); // Create a copy of the products array
    // Filter products based on selected categories
    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      // Filter products based on selected subcategories
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  //   useEffect(() => {
  //     // Filter products based on selected categories and subcategories
  //     const filteredProducts = products.filter((product) => {
  //       // Check if the product's category is in the selected categories
  //       const isCategoryMatch = category.length === 0 || category.includes(product.category);
  //       // Check if the product's subcategory is in the selected subcategories
  //       const isSubCategoryMatch = subCategory.length === 0 || subCategory.includes(product.subCategory);
  //       return isCategoryMatch && isSubCategoryMatch;
  //     });
  //     // Update the filterProducts state with the filtered products
  //     setFilterProducts(filteredProducts);
  //   }, [category, subCategory, products]);

  useEffect(() => {
    // Initialize filterProducts with all products
    setFilterProducts(products);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter option  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl  flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/*SubCategory Filter  */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium"> CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="flex gap-2"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="flex gap-2"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="flex gap-2"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/*SubCategory Filter  */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium"> TYPE </p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="flex gap-2"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="flex gap-2"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="flex gap-2"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Collection  */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          <select className="border-2 border-gray-400 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Price (Low to High)</option>
            <option value="high-to-low">Sort by: Price (High to Low)</option>
          </select>
        </div>

        {/* Map Product  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
