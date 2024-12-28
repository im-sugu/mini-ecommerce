import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "./CartItems/CartItems";
import StarRating from "./StarRating";

export default function ProductDetails() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const { cartItems, setCartItems, handleOnQty, qty } = useContext(CartContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    productCall();
    handleOnQty();
  }, []);
 

  const productCall = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BASE_URL + "/product/" + id
      );
      const data = await response.json();
      setSingleData(data?.singleProduct);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnAddCart = () => {
    const itemExist = cartItems.find(
      (item) => item?.singleData._id === singleData._id
    );
    if (!itemExist) {
      const newItem = { singleData, qty };
      setCartItems((state) => [...state, newItem]);
      setOrderPlaced(true)
    }
    setTimeout(() => {
      setOrderPlaced(false)
    }, 2000);
  };
  return loading ? (
    <div>  Data Loading... {error} </div>
  ) : (
    <>
      <h1 className="text-4xl p-5 justify-center flex">Details Page</h1>
      <div className="flex justify-end p-5">
        <button onClick={()=>navigate(-1)} className="px-4 py-2 rounded-md bg-lime-200">Back</button>
      </div>
      <div className=" grid grid-cols-2 gap-4 px-10 py-5">
        <div className="p-5 flex justify-center h-[400px] ">
          <img className="object-contain aspect-[4/3] w-[350px" src={singleData.images[0].image} alt={singleData.seller} />
        </div>

        <div className="p-5 flex flex-col ">
          <div className="font-bold text-gray-600 text-3xl mb-5">
            {" "}
            {singleData.name}
          </div>
          <div className="font-thin text-gray-600 text-lg mb-2">
            Description
          </div>
          <div className="text-sm text-gray-500 h-[50px]">
            {singleData.description}
          </div>
          <div className="flex justify-start py-2">
            <div className="font-thin text-gray-600 text-lg ">Price : </div>
            <div className="text-slate-500 text-lg "> {singleData.price}</div>
          </div>

          <StarRating rating={singleData.ratings} />

          <div className="flex items-center my-2">
            <span
              className="cursor-pointer bg-red-400 p-1 font-semibold"
              onClick={(e) => handleOnQty(e, "decrease")}
            >
              -
            </span>
            <span className="px-10 w-10 text-lg font-semibold">{qty}</span>
            <span
              className="p-1 cursor-pointer bg-green-400 font-semibold"
              onClick={(e) => handleOnQty(e, "increase", singleData.stock)}
            >
              +
            </span> 
            {qty > 0 &&
            <button
              className="p-1 ml-2 rounded-md text-white bg-zinc-400"
              disabled={singleData.stock == 0 }
              onClick={handleOnAddCart}
            >
              Add Cart
            </button>}
            {orderPlaced && <div className="text-green-600 pl-2"> Successfully Placed your order</div>}
          </div>
          <div className="font-bold my-2">
            Status :{" "}
            {singleData.stock <= 0 ? (
              <span className="text-red-600">Out of stack </span>
            ) : (
              <span className="text-green-600">In Stack</span>
            )}
          </div>

          <div className="text-slate-700 text-md font-bold my-2">
            Sold By : <span className="text-sky-800">{singleData.seller}</span>
          </div>
        </div>
      </div>
    </>
  );
}
