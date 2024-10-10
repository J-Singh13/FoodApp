import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
const FoodCard = ({ id, img, name, price, desc, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white shadow-lg flex flex-col p-5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-[130px] object-cover rounded-t-lg mb-4 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
        src={img}
        alt={name}
      />
      <div className="text-sm flex justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <span className="text-green-600 font-semibold">₹{price}</span>
      </div>
      <p className="text-sm font-normal text-gray-600 mb-4">
        {desc.slice(0, 50)}...
      </p>
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center text-yellow-400">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium transition-colors duration-300 ease-in-out"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;