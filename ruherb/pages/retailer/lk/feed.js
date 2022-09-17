import Layout from "../../../components/businessLayout";
import { useRouter } from "next/router";
import Heading from "../../../components/customer/productDetailPage/title";
import ProductCard from "../../../components/customer/productDetailPage/productCard";
export default function LKpage() {
  const router = useRouter();
  const arr = [
    { id: 0, title: "Product_0", category: "Hurb", rating: 4, price: 100 },
    { id: 1, title: "Product_1", category: "Hurb", rating: 4, price: 100 },
    { id: 2, title: "Product_2", category: "Hurb", rating: 4, price: 100 },
    { id: 3, title: "Product_3", category: "Hurb", rating: 4, price: 100 },
    { id: 4, title: "Product_4", category: "Hurb", rating: 4, price: 100 },
    { id: 5, title: "Product_5", category: "Hurb", rating: 4, price: 100 },
  ];

  return (
    <div className="">
      <Heading text="Лента продуктов" />
      <div className="grid xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {arr.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

LKpage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
