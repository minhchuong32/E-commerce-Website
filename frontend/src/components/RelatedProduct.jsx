import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Lọc sản phẩm theo danh mục và loại
      let relatedProducts = products.slice();

      // Lọc theo danh mục (category)
      relatedProducts = relatedProducts.filter((item) => category === item.category);

      // Lọc tiếp theo loại phụ (subCategory)
      relatedProducts = relatedProducts.filter((item) => subCategory === item.subCategory);

      // Chỉ lấy tối đa 5 sản phẩm liên quan
      setRelated(relatedProducts.slice(0, 5));
    }
  }, [products]);

  return (
    <div className='my-24'>
      {/* Tiêu đề */}
      <div className='text-center text-3xl py-2'>
        <Title text1='SẢN PHẨM' text2='LIÊN QUAN' />
      </div>

      {/* Hiển thị danh sách sản phẩm liên quan */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
