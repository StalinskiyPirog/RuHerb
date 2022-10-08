import { useRouter } from "next/router";
import Breadcrumb from "../../../components/productDetailPage/breadcrumb";
import CategoryList from "../../../components/productDetailPage/badge";
import ProductCard from "../../../components/productDetailPage/productCard";
import Image from "next/image";
import { ReactPhotoCollage } from "react-photo-collage";

import Layout from "../../../components/businessLayout";


const setting = {
  width: "600px",
  height: ['300px', '200px'],
  layout: [1, 4],
  photos: [
    { source: '/design_parts/watermelonDrink.png' },
    { source: '/design_parts/watermelonDrink.png' },
    { source: '/design_parts/watermelonDrink.png' },
    { source: '/design_parts/watermelonDrink.png' },
    { source: '/design_parts/watermelonDrink.png' },
    { source: '/design_parts/watermelonDrink.png' },
  ],
  showNumOfRemainingPhotos: true
};

export default function ProductPage({ slug }) {
  return (
    <section>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">
            Здесь title
          </h1>

          <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
        </div>

        <div className="grid gap-8 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
            <ReactPhotoCollage {...setting} />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>


          </div>

          

          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
              </p>

              <h3>Features</h3>

              <ul>
                <li>Smooth neck design</li>
                <li>Breathable fabric</li>
                <li>Odour prevention</li>
                <li>Made from recycled materials</li>
              </ul>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ProductPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};