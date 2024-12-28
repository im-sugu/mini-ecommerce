import React, { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/CartItems/CartItems";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-cyan-950">
      <div>
        <Link className="text-white font-bold text-4xl" to="/">SCart</Link>{" "}
      </div>
      <Search />
      <div>
        <Link to="/card-orders">
          <span className="text-white p-2 text-xl">Cart</span>
          <span className="bg-yellow-100 p-1 inline text-center rounded-sm text-gray-600 text-xl">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </div>
  );
}
