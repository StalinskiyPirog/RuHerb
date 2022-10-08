import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect,useState } from "react";
import ProductCard from "../productDetailPage/productCard";
import PriceSlider from "./priceSlider";

export default function Filter({products}) {
  const r = useRouter();
  
  
  
  const [bio, setBio] = useState(r.query.bio );
  const [cereal, setCereal] = useState(r.query.cereal );
  const [fruit, setFruit] = useState(r.query.fruit );
  const [tea, setTea] = useState(r.query.tea );
  const [travy, setTravy]  = useState(r.query.travy );
  const [drugs, setDrugs] = useState(r.query.drugs );
  const [vitamins, setVitamins] = useState(r.query.vitamins );
  const [drinks, setDrinks] = useState(r.query.drinks );
  const [orderBy, setOrderBy] = useState(r.query.orderBy );

 


  return (
    <section>

      <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:sticky lg:top-4">
            <details
              open
              className="overflow-hidden border border-gray-200 rounded"
            >
              <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                <span className="text-sm font-medium">Включить филтр</span>

                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              
              <form
                
                id="form_"
                className="border-t border-gray-200 lg:border-t-0"
              >
                <fieldset>
                  <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                    Категории
                  </legend>

                  <div className="px-5 py-6 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="vitamins"
                        type="checkbox"
                        checked={vitamins}
                        onChange={()=>setVitamins(!vitamins)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="vitamins"
                        className="ml-3 text-sm font-medium"
                      >
                        Витамины
                      </label>
                    </div>
                   
                    <div className="flex items-center">
                      <input
                        id="bio"
                        type="checkbox"
                        checked={bio}
                        
                        onChange={()=>setBio(!bio)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="bio"
                        className="ml-3 text-sm font-medium"
                      >
                        Биодобавки
                      </label>
                    </div>
                  
               
                    <div className="flex items-center">
                      <input
                        id="drugs"
                        type="checkbox"
                        checked={drugs}
                        className="w-5 h-5 border-gray-300 rounded"
                        
                        onChange={()=>setDrugs(!drugs)}
                      />

                      <label
                        htmlFor="drugs"
                        className="ml-3 text-sm font-medium"
                      >
                        Лекарства
                      </label>
                    </div>
                   
         
                    <div className="flex items-center">
                      <input
                        id="travy"
                        type="checkbox"
                        checked={travy}
                        
                        onChange={()=>setTravy(!travy)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="travy"
                        className="ml-3 text-sm font-medium"
                      >
                        Лечебные травы
                      </label>
                    </div>
                  
               
                    <div className="flex items-center">
                      <input
                        id="tea"
                        type="checkbox"
                        checked={tea}
                        
                        onChange={()=>setTea(!tea)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="tea"
                        className="ml-3 text-sm font-medium"
                      >
                        Чаи
                      </label>
                    </div>
                    
                  
                    <div className="flex items-center">
                      <input
                        id="fruits"
                        type="checkbox"
                        checked={fruit}
                        
                        onChange={()=>setFruit(!fruit)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="fruits"
                        className="ml-3 text-sm font-medium"
                      >
                        Фрукты
                      </label>
                    </div>
                   
                    <div className="flex items-center">
                      <input
                        id="cereals"
                        type="checkbox"
                        checked={cereal}
                        
                        onChange={()=>setCereal(!cereal)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="cereals"
                        className="ml-3 text-sm font-medium"
                      >
                        Злаки
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="drinks"
                        type="checkbox"
                        checked={drinks == 'on'}
                        
                        onChange={()=>setDrinks(!drinks)}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <label
                        htmlFor="drinks"
                        className="ml-3 text-sm font-medium"
                      >
                        Напитки
                      </label>
                    </div>

                    
                  </div>
                </fieldset>

                
              

                <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={()=>reset()}
                    className="text-xs font-medium text-gray-600 underline rounded"
                  >
                    Сбросить
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                  >
                    Применить
                  </button>
                </div>
              </form>
            </details>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="hidden sm:inline">Showing</span>6 of 24
                Products
              </p>

              <div className="ml-4">
                <label htmlFor="SortBy" className="sr-only">
                  Сортировать
                </label>

                <select
                  id="SortBy"
                  defaultValue={orderBy}
                  className="text-sm border-gray-100 rounded"
                >
                  <option readOnly>Сортировать</option>
                  <option value="title-asc">Название, А-Я</option>
                  <option value="title-desc">Название, Я-А</option>
                  <option value="price-asc">Цена, начиная с дешевых</option>
                  <option value="price-desc">Цена, начиная с дорогих</option>
                </select>
              </div>
            </div>

            <div className="mt-4 bg-gray-200 border border-gray-200 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"></div>
              {products.length == 0 ? <div
  className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
  role="alert"
>
  <strong className="text-sm font-medium">Похоже, что ничего не было найдено</strong>

  
</div>:<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
{products.map((item)=><ProductCard key={item.id} id={item.id} title={item.title} price={item.price} rating={item.rating} category={item.category} />)}
          

</div>}
          </div>
        </div>
      </div>
    </section>
  );
}


