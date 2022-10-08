import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsStar, BsStarFill } from "react-icons/bs";
import {AiOutlineEye} from "react-icons/ai";

export default function ProductCard({  id,title, category, rating, price }) {
  const [isFav, setFav] = useState(false);
  const router = useRouter();
  return (
    <div className="select-none w-full p-2 my-2">
      <div className=" shadow-lg border-gray-700 hover:shadow-xl rounded-full-lg ">
        <div
         style={{
          backgroundImage: `url("/design_parts/watermelonDrink.png")`,
        }}
         className={`bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-cover bg-center`}
         
        >
        
        </div>
        <div className="flex justify-between items-start px-2 pt-2">
          <div className="p-2 flex-grow">
            <a className=" text-xl hover:text-green-600" href="/lk/product/1">{title}</a>
            <h2 className="text-sm text-gray-500">{category}</h2>
            <div className="flex justify-items-start text-green-500 pt-2 pb-2 hover:text-yellow-600 ">
              {
                [...Array(rating)].map((_, i) => ( <BsStarFill /> ))
              }{[...Array(5-rating)].map((_, i) => ( <BsStar /> ))
                
              }
              
            </div>
          </div>
          <div className="p-2 text-right">
            <div className="text-logogreen font-semibold text-lg ">
              {price} ₽
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 items-center px-2 pb-2">
          
          <div className="">
            <button onClick={(_)=> router.push("/lk/productEdit/"+id)} className="inline-flex text-sm hover:text-white w-full bg-white hover:bg-teal-600  border-teal-600 border-2  px-3 py-2 rounded-full  ">
              Редактировать
            </button>
            
          </div>
          <div className="">
            <button onClick={(_)=> router.push("/lk/productGet/"+id)} className="inline-flex  hover:text-white w-full text-xl bg-white hover:bg-teal-600  border-teal-600 border-2  px-3 py-2 rounded-full  ">
              <AiOutlineEye />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
