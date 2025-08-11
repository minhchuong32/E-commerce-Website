import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, setCartItems, token, backendUrl } = useContext(ShopContext);
  const [searchParams, setSeacrchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const userId = searchParams.get("userId");
  const verifyPayment = async () => {
    try {
      if (!token) return null;
      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",     
        {
          success,
          orderId,
        },
        {
          headers: {
            token,
          },
        }
      );
      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
        toast.success("Payment verified successfully");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      toast.error("Payment verification failed");
      navigate("/cart");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, [token]);
  return <div></div>;
};

export default Verify;
