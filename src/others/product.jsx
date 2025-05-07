import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { BsStarFill, BsLightningFill } from "react-icons/bs";

function ProductCard(props) {
  return (
    <div className="group bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden w-[300px] transition-all duration-300 ease-in-out border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-[250px] object-contain transform group-hover:scale-105 transition-transform duration-300 ease-in-out p-4"
        />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg line-clamp-1">{props.brand}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <BsStarFill />
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 h-[40px]">{props.title}</p>
        
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-red-500">Rs {props.price}</span>
        </div>

        <div className="flex gap-2 mt-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm">
            <CiShoppingCart />
            <span>Add to Cart</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm">
            <BsLightningFill />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;