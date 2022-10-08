import Image from "next/image";
import Link from "next/link";

export default function Jumbotrone() {
  return (
    
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  ml-1/3 md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="align-center text-xl sm:text-4xl mb-4 font-medium text-gray-900">
            
          Лучшие решения для <span className="text-xl sm:text-4xl mb-4 font-medium text-green-500">Вашего</span>{" "} бизнеса
            
          </h1>
          
          <div className="flex lg:justify-start  justify-center">
            <div className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            <Link href="#fourth"> 
              Стать продавцом
            </Link>
            </div>
            
          </div>
        </div>
        <div className="w-full">
          <Image
            alt="RuHerb"
            src="/design_parts/watermelonDrink.png"
            height="600"
            width="720"
          />
        </div>
      </div>
  
  );
}
