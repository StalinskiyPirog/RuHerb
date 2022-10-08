import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function ProductCard({  id, title, category, rating, price }) {
  const [isFav, setFav] = useState(false);
  
  return (
    <div className="select-none w-full p-2 my-2">
      <div className=" shadow-lg border-gray-700 hover:shadow-xl rounded-full-lg ">
        <div
         style={{
          backgroundImage: `url("/design_parts/watermelonDrink.png")`,
        }}
         className={`bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-cover bg-center`}
         
        >
        <div className="text-right z-20" onClick={(id) => {setFav(!isFav)}}>
            <button
              className="text-pink-600 hover:text-pink-600 p-2 rounded-full"
              style={{ background: "rgba(34, 164, 127, 0.3)" }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill={isFav ? "#22a47f" : "#fff"}
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start px-2 pt-2">
          <div className="p-2 flex-grow">
            <a className=" text-xl hover:text-green-600" href="/product/1">Титле</a>
            <h2 className="text-sm text-gray-500">Здесь категория товара</h2>
            <div className="flex justify-items-start pt-2 pb-2 hover:text-yellow-600 ">
              <BsStarFill />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </div>
          </div>
          <div className="p-2 text-right">
            <div className="text-logogreen font-semibold text-lg ">
              {(100 - (0.1 * 100) / 100).toFixed(2)} ₽
            </div>
            <div className="text-md text-gray-500 line-through ">100 ₽</div>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 pb-2">
          
          <div className="">
            <button className="block text-sm hover:text-white w-full bg-white hover:bg-teal-600  border-teal-600 border-2  px-3 py-2 rounded-full  ">
              Положить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
