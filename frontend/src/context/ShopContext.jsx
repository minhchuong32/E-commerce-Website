import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Vui lòng chọn kích thước");
      return;
    }

    let cartData = structuredClone(cartItems);

    // Check if itemId already exists in cart
    if (cartData[itemId]) {
        // if existing item in cart, increment the quantity for the selected size
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        // if size not in cart, add it with quantity 1
        cartData[itemId][size] = 1;
      }
    }
    // if itemId not in cart, add it with size and quantity 1
    else {
      cartData[itemId] = {}; // Initialize the item with an empty object for sizes. Ex: { "1": {}, "2": {} }
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        try {
          if (cartItems[item][size] > 0) {
            totalCount += cartItems[item][size];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    // make copy of  to avoid direct state mutation
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((products) => products._id === items);
        for (const item in cartItems[items]) {
            try {
                if (cartItems[items][item] > 0) {
                    totalAmount +=
                    itemInfo.price * cartItems[items][item]
                }
            }
            catch (error) {
                console.error(`Error processing item ${items} with size ${item}:`, error);
            }
        }
    }
    return totalAmount;
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
