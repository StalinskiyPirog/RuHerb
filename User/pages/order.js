import Link from "next/link";
import Layout from "../../components/customerLayout";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div>
      <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-12 bg-gray-50 md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-blue-900 rounded-full"></span>

                  <h2 className="ml-4 font-medium">BambooYou</h2>
                </div>

                <div className="mt-8">
                  <p className="text-2xl font-medium tracking-tight">$99.99</p>
                  <p className="mt-1 text-sm text-gray-500">
                    htmlFor the purchase of
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 relative w-16 h-16 rounded-lg">
                          <Image
                            layout="fill"
                            objectFit="scale-down"
                            src="/design_parts/watermelonDrink.png"
                            alt=""
                          /></div>

                          <div className="ml-4">
                            <p className="text-sm">Vibrant Trainers</p>

                            <dl className="mt-1 text-xs text-gray-500 space-y-1">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">Blue</dd>
                              </div>

                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">UK 10</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm">
                            $49.99
                            <small className="text-gray-500">x1</small>
                          </p>
                        </div>
                      </li>

                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 relative w-16 h-16 rounded-lg">
                          <Image
                            layout="fill"
                            objectFit="scale-down"
                            src="/design_parts/watermelonDrink.png"
                            alt=""
                          /></div>

                          <div className="ml-4">
                            <p className="text-sm">Vibrant Trainers</p>

                            <dl className="mt-1 text-xs text-gray-500 space-y-1">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">Blue</dd>
                              </div>

                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">UK 10</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm">
                            $25
                            <small className="text-gray-500">x2</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12 bg-white md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <htmlForm className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="text"
                      id="frst_name"
                    />
                  </div>

                  <div className="col-span-3">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="text"
                      id="last_name"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="phone"
                    >
                      Phone
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="tel"
                      id="phone"
                    />
                  </div>

                  <fieldset className="col-span-6">
                    <legend className="block mb-1 text-sm text-gray-600">
                      Card Details
                    </legend>

                    <div className="bg-white rounded-lg -space-y-px shadow-sm">
                      <div>
                        <label className="sr-only" htmlFor="card-number">
                          Card Number
                        </label>

                        <input
                          className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                          type="text"
                          name="card-number"
                          id="card-number"
                          placeholder="Card number"
                        />
                      </div>

                      <div className="flex -space-x-px">
                        <div className="flex-1">
                          <label
                            className="sr-only"
                            htmlFor="card-expiration-date"
                          >
                            Expiration Date
                          </label>

                          <input
                            className="border-gray-200 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                            type="text"
                            name="card-expiration-date"
                            id="card-expiration-date"
                            placeholder="MM / YY"
                          />
                        </div>

                        <div className="flex-1">
                          <label className="sr-only" htmlFor="card-cvc">
                            CVC
                          </label>

                          <input
                            className="border-gray-200 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                            type="text"
                            name="card-cvc"
                            id="card-cvc"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="col-span-6">
                    <legend className="block mb-1 text-sm text-gray-600">
                      Billing Address
                    </legend>

                    <div className="bg-white rounded-lg -space-y-px shadow-sm">
                      <div>
                        <label className="sr-only" htmlFor="country">
                          Country
                        </label>

                        <select
                          className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                          id="country"
                          name="country"
                          autoComplete="country-name"
                        >
                          <option>England</option>
                          <option>Wales</option>
                          <option>Scotland</option>
                          <option>France</option>
                          <option>Belgium</option>
                          <option>Japan</option>
                        </select>
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="postal-code">
                          ZIP/Post Code
                        </label>

                        <input
                          className="border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          placeholder="ZIP/Post Code"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <div className="col-span-6">
                    <button
                      className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                      type="submit"
                    >
                      Pay Now
                    </button>
                  </div>
                </htmlForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
