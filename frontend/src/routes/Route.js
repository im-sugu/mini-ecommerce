import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Home from "../components/Home";
import CartOrder from "../pages/CartOrder";
export default function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/card-orders" element={<CartOrder />} />
      </Routes>
    </div>
  );
}
