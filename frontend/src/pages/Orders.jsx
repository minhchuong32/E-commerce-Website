import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { toast } from "react-toastify";
import axios from "axios";
const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const loadOrderData = async () => {
    try {
      if (!token) return null;
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        {
          headers: { token },
        }
      );
      console.log(response.data.orders);
      if (response.data.success) {
        let allOrderItems = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            // Add order details to each item
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItems.push(item);
          });
        });
        setOrderData(allOrderItems.reverse());
      } else {
        toast.error("Lỗi khi tải dữ liệu đơn hàng");
      }
    } catch (error) {
      toast.error("Lỗi khi tải dữ liệu đơn hàng: " + error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"ĐƠN HÀNG"} text2={"ĐÃ ĐẶT"} />
      </div>
      <div>
        {orderData.map((item, index) => {
          return (
            <div className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.images[0]} alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p>
                      {currency} {item.price}
                    </p>
                    <p>Số lượng: {item.quantity}</p>
                    <p>Kích cỡ: {item.sizes}</p>
                  </div>
                  <p className="mt-2">
                     Ngày đặt hàng: 
                    <span className="text-gray-400">
                      {" "}
                     {new Date(item.date).toLocaleDateString("vi-VN")}
                    </span>
                  </p>
                  <p className="mt-2">
                    Phương thức:
                    <span className="text-gray-400">
                      {" "}
                      {item.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base px-4">{item.status}</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100">
                  Theo dõi đơn hàng
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
