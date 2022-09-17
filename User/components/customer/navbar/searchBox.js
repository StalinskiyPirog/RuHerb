import Link from "next/link";
import { useRouter } from "next/router";
import {useState} from 'react'
export default function SearchBox(){
    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("searchResult/" + route)
    }   
    return( <form className="flex items-center" onSubmit={handleSubmit}>
    <div className="relative w-full mt-1 mb-1 ml-1 mr-1">
      <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        className="text-sm text-gray-400 border border-gray-300 bg-gray-50 opacity-50 rounded-3xl focus:ring-blue-500 focus:border-blue-500 w-3/4 sm:w-3/4  lg:w-full pl-10 p-2.5  "
        placeholder="Поиск"
        onChange={(e)=>{setRoute(e.target.value)}}
      />
    </div>
  </form>)
}