import { React, useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currrency}  from "../App";
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

  useEffect(() => {
    fecthAllOrders();
  }, [token]);
  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700'  key={index}>
            <img className='w-12' src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, idx) => {
                  if (idx === order.items.length - 1) {
                    return (
                      <p className='py-0.5' key={idx}>
                        {" "}
                        {item.name} x {item.quantity}{" "}
                        <span> {item.sizes} </span>{" "}
                      </p>
                    );
                  } else {
                    return (
                      <p className='py-0.5' key={idx}>
                        {" "}
                        {item.name} x {item.quantity}{" "}
                        <span> {item.sizes} </span>,{" "}
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mb-2 font-medium mt-3">{order.address.firstName + "  " + order.address.lastName}</p>
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
                <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                <p className='mt-3'>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className='text-sm sm:text-[15px]'>{currrency}{order.amount}</p> 
            <select value={order.status} className='p-2 font-semibold'>
                <option value="OrderPlaced">Order Placed</option>
                <option value="Pacing">Pacing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Deliveried">Deliveried</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
