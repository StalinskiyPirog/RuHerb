import Image from "next/image";
import Link from "next/link";

export default function CartPopup(){
    return(
        <div
  className="block w-screen max-w-sm p-10 border sm:px-12 bg-stone-100 border-stone-600"
  aria-modal="true"
  aria-label="Item added to your cart"
  role="dialog"
  tabIndex="-1"
>
  <div className="flex items-start justify-between">
    <h2 className="flex items-center text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <span className="ml-2 text-sm"> Item added to your cart </span>
    </h2>

    <button
      className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
      type="button"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <div className="flex items-start pt-8 pb-12">
    <div className="relative w-16 h-16 rounded-lg"
      >
    <Image
      src="../../photos/tee-green-person-2.png"
      alt="Basic Tee"
      layout="fill"
      objectFit="cover"
    />
    </div>

    <div className="ml-4">
      <h3 className="text-sm">Basic Tee 6-Pack</h3>

      <dl className="mt-1 space-y-1 text-xs text-gray-500">
        <div>
          <dt className="inline">Size:</dt>
          <dd className="inline">XXS</dd>
        </div>

        <div>
          <dt className="inline">Color:</dt>
          <dd className="inline">White</dd>
        </div>
      </dl>
    </div>
  </div>

  <div className="space-y-4 text-center">
    <a
      className="block p-3 text-sm border rounded-lg border-stone-600 text-stone-500 hover:ring-1 hover:ring-stone-400 hover:text-stone-600"
      href="/cart"
    >
      View my cart (2)
    </a>

    <form action="/cart" method="post">
      <button
        className="block w-full p-3 text-sm rounded-lg bg-stone-600 text-stone-100 hover:bg-stone-500"
        type="submit"
      >
        Check out
      </button>
    </form>

    <a
      className="inline-block text-sm tracking-wide underline underline-offset-4 text-stone-500 hover:text-stone-600"
      href="/collections/all"
    >
      Continue shopping
    </a>
  </div>
</div>

    );
}