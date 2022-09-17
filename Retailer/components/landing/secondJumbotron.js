import Image from "next/image";

export default function SecondJumbotron() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap m-4 justify-center">
        <h1 className="md:text-4xl text-md mb-2 font-medium text-green-600">
              
                О сервисе
            </h1>
        <div className="w-full lg:h-3/4 sm:h-1/3 xl:h-screen hidden lg:block">
          <Image
            src="/design_parts/BlogSecond.png"
            alt="oportunitys"
            width="1600"
            height="807"
          /></div>
         <div className="grid w-full  lg:hidden grid-cols-1 flex-wrap ">
         <div className="col-span-1 justify-center p-2">
          <Image
            src="/design_parts/BlogSecond_1.png"
            alt="oportunitys"
            width="842"
            height="591"
          />
          </div><div className="col-span-1 justify-center p-2">
          <Image
            src="/design_parts/BlogSecond_2.png"
            alt="oportunitys"
            height="602"
            width="862"
          /></div></div>
        </div>
      </div>
    </section>
  );
}
