import Image from "next/image";
import Link from "next/link";

export default function CategoryList({ categoryList }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {categoryList.map((item, index) => {
        switch (item) {
          case "Витамины":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Витамины
          </span>;
          case "Биодобавки":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Биодобавки
          </span>;;
          case "Лекарства":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Лекарства
          </span>;;

          case "Лечебные травы":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Лечебные травы
          </span>;;
          case "Чаи":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Чаи
          </span>;;
          case "Фрукты":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Фрукты
          </span>;;

          case "Злаки":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Злаки
          </span>;;
        case  "Напитки":
            return <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            Напитки
          </span>;;
        }
        
      })}
      
    
    </div>
  );
}
