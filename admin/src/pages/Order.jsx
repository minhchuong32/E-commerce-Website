import { React, useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currrency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fecthAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {}
  };

  const statusHandler = async (event, orderId) => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fecthAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật trạng thái đơn hàng thất bại");
    }
  };

  useEffect(() => {
    fecthAllOrders();
  }, [token]);

  return (
    <div>
      <h3 className="text-lg font-bold my-4">Trang Đơn Hàng</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img className="w-12" src={assets.parcel_icon} alt="Đơn hàng" />
            <div>
              <div>
                {order.items.map((item, idx) => {
                  const itemText = `${item.name} x ${item.quantity} (${item.sizes})`;
                  return (
                    <p className="py-0.5" key={idx}>
                      {itemText}
                      {idx !== order.items.length - 1 ? "," : ""}
                    </p>
                  );
                })}
              </div>
              <p className="mb-2 font-medium mt-3">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p> {order.address.phone} </p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                Sản phẩm: {order.items.length}
              </p>
              <p className="mt-3">Phương thức: {order.paymentMethod}</p>
              <p>Thanh toán: {order.payment ? "Hoàn tất" : "Chờ thanh toán"}</p>
              <p>Ngày: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px] font-semibold">
              {currrency}
              {order.amount}
            </p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Đã đặt hàng">Đã đặt hàng</option>
              <option value="Đang đóng gói">Đang đóng gói</option>
              <option value="Đã gửi hàng">Đã gửi hàng</option>
              <option value="Đang giao">Đang giao</option>
              <option value="Đã giao">Đã giao</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
