import orderModel from "../models/orderModel.js";
import authUser from "../middleware/auth.js";
import userModel from "../models/userModel.js";

// placing order using stripe method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, paymentMethod } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod, 
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res
      .status(500)
      .json({ message: "Internal server error: " + error.message });
  }
};

// placing orders using razorpay method
const placeOrderStripe = async (req, res) => {};

// all orders data for admin panel
const placeOrderRazorpay = async (req, res) => {};
    
// user order data for frontend
const allOrders = async (req, res) => {};

// user order data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: "Internal server error: " + error.message });
    }
};

// updare order status for admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
