import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function ProductCart(props) {
  const products = props.productsList;

  

  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {products.map((productsData, index) => (
        <div
          key={index + 1}
          className="p-2 bg-white rounded-md border flex flex-col justify-between"
        >
          <div className="flex justify-center">
            <img
              className=" object-contain h-48"
              src={productsData.images[0].image}
              alt={productsData.seller}
            />
          </div>
          <Link
            className="font-bold text-gray-600 h-[50px]"
            to={`/products/${productsData._id}`}
          >
            {" "}
            {productsData.name}
          </Link>
          <div className="text-sm text-gray-500 h-[90px]">
            {productsData.description}
          </div>
          <div className="flex justify-between py-2">
            <div className="text-slate-500 text-lg">{productsData.price}</div>
            <div className="text-slate-700 text-md font-bold">
              {productsData.seller}
            </div>
          </div>

          <StarRating rating={productsData.ratings} />

          <Link
            className="text-stone-700 font-bold py-2"
            to={`/products/${productsData._id}`}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
