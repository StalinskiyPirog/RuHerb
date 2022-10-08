import Image from "next/image";
import Link from "next/link";

export default function Breadcrumb({ array }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex items-center text-sm text-gray-500 space-x-1"
      >
        <li>
          <Link
            className="block transition-colors hover:text-gray-700"
            href="/client"
          >
            
            Home
          </Link>
        </li>
        {array.map((item, index) => {
          <>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <Link
                className="block transition-colors hover:text-gray-700"
                href="/client/searchResult/"
              >
                item.title
              </Link>
            </li>
          </>;
        })}
      </ol>
    </nav>
  );
}
