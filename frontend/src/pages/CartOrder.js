import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartItems/CartItems";

export default function CartOrder() {
  const [context, setContent] = useState(true);
  const { cartItems, setCartItems, handleOnRemove } =
    useContext(CartContext);

  const handleOnPlaceOrder = async () => {
    try {
      const updatedCartItems = await cartItems.map(({ singleData, qty }) => ({
        product: singleData,
        qty,
      }));
      const res = await fetch(process.env.REACT_APP_BASE_URL + "/createOrder", {
        method: "Post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCartItems),
      });
      if (res.ok) {
        setCartItems([]);
        setContent(false);
      }
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };
  return cartItems.length > 0 ? (
    <><div className="p-10 text-center text-3xl text-gray-500">Cart Items : {cartItems.length}</div>
    
    <div className="w-full flex p-10">
      <div className="w-5/6">
        {cartItems.map((data, i) => {
          return (
            <>
              <div className="flex pb-5 items-center border border-b-1 justify-between">
                <div>
                  <img
                    className="w-[150px] p-2"
                    src={data?.singleData.images[0].image}
                    alt={data.singleData.seller}
                  />
                </div>
                <div className="w-[300px] ">{data.singleData.name}</div>
                <div className="w-[200px]">{data.singleData.price}</div>
                <div className="w-[200px] flex justify-around">
                  {" "}
                  <span className="">{data?.qty}</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 cursor-pointer hover:text-red-500"
                    onClick={(e) => handleOnRemove(data)}
                    
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
                <hr />
              </div>
            </>
          );
        })}
      </div>
      <div className="w-1/6 px-2">
        <div className="p-2 flex justify-center flex-col border ">
          <div className="text-xl text-center font-bold text-slate-900">
            Order Summary
          </div>
          <div className="text-md font-semibold my-4">
            Sub :{" "}
            <span className="text-xl text-gray-600">
              {" "}
              {cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
            </span>
          </div>
          <div>
            Total :
            <span className="text-gray-600 text-xl">
              {" "}
              {cartItems.reduce(
                (acc, cur) => acc + cur.singleData.price * cur.qty,
                0
              )}
            </span>
          </div>

          <div
            className="p-2 text-center rounded-md bg-red-400 my-10 text-white font-semibold cursor-pointer"
            onClick={handleOnPlaceOrder}
          >
            Place Order
          </div>
        </div>
      </div>
    </div></>
  ) : context ? (
    <div className="font-extrabold text-5xl text-sky-800 p-10 h-[80vh] items-center flex justify-center">
      Please Select Cart items!
    </div>
  ) : (
    <div className=" font-extrabold text-5xl text-green-600 p-10 h-[80vh] items-center flex justify-center">
      Order Placed Successfully!
    </div>
  );
}
