import Link from "next/link";
import Image from "next/image";

export default function Deliv() {
  return (
    <section className="container center text-center mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="container px-5 py-24 ">
        <div className="grid  md:grid-cols-3 grid-cols-1 flex-wrap ">
          <div className="col-span-1 justify-center p-2">
            <h1 className="md:text-4xl  mb-4 font-medium text-gray-900">
              <span className="md:text-5xl text-l mb-4 font-medium text-green-600">
                DBS
              </span>
            </h1>
            <Image
              src="/design_parts/znachki3.png"
              height="466"
              width="466"
              alt="blog"
            />
            <h1 className="md:text-2xl lg:text-4xl  mb-4 font-medium text-gray-900">
              <span className="md:text-2xl lg:text-4xl  mb-4 font-medium text-green-600">
                Вы
              </span>{" "}
              храните товары, упаковываете заказы и доставляете их покупателям
            </h1>
          </div>
          <div className="col-span-1 p-2">
            <h1 className="md:text-4xl  mb-4 justify-center font-medium text-gray-900">
              <span className="md:text-5xl text-l mb-4 font-medium text-green-600">
                FBS
              </span>
            </h1>
            <Image
              src="/design_parts/znachki1.png"
              height="466"
              width="466"
              alt="blog"
            />
            <h1 className="md:text-2xl lg:text-4xl mb-4 font-medium text-gray-900">
              <span className="md:text-2xl lg:text-4xl mb-4 font-medium text-green-600">
                Вы
              </span>{" "}
                привозите готовые заказы в пункт приёма или сортировочный центр
              для доставки по России
            </h1>
          </div>
          <div className="col-span-1 p-2">
            <h1 className="md:text-4xl  mb-4 font-medium text-gray-900">
              <p className="md:text-5xl text-l mb-4 font-medium text-green-600">
                FBY
              </p>
            </h1>
            <Image
              src="/design_parts/znachki2.png"
              height="466"
              width="466"
              alt="blog"
            />
            <h1 className="md:text-2xl lg:text-4xl  mb-4 font-medium text-gray-900">
              <span className="md:text-2xl lg:text-4xl  mb-4 font-medium text-green-600">
                Вы
              </span>{" "}
              привозите товары на склад. Мы их храним, упаковываем и доставляем
              по России
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
