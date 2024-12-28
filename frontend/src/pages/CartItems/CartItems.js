import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);


  useEffect(()=>{
setCartItems(cartItems)
console.log(1111);

  },[qty])
  const handleOnQty = (e, key, stockCount, cartQty) => {
    console.log(key, stockCount, cartQty, "quty");

    if (key === "decrease") {
      (qty > 0 || cartQty > 0) && setQty(qty - 1);
    } else if (key === "increase") {
      (qty < stockCount || cartQty < stockCount) && setQty(qty + 1);
    } else {
      setQty(0);
    }
  };
  const handleOnRemove = (item) => {
    const updateItems = cartItems.filter(
      (val, i) => val.singleData._id !== item.singleData._id
    );
    setCartItems(updateItems);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, qty, handleOnQty, handleOnRemove }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
