import Layout from "../../components/businessLayout";
import { useRouter } from "next/router";
import Heading from "../../components/business/product/title";
import ProductCard from "../../components/business/product/productCard";
export default function LKpage() {
  const router = useRouter();
  const arr = [
    { id: 0, title: "Витамишки", category: "Hurb", rating: 3, price: 110 },
    { id: 1, title: "Сладкий сироп", category: "Harb", rating: 2, price: 1300 },
    { id: 2, title: "Шото", category: "Horb", rating: 5, price: 1077 },
    { id: 3, title: "Интересное", category: "Harb", rating: 4, price: 18800 },
    { id: 4, title: "Чипсы", category: "Hirb", rating: 3, price: 10 },
    { id: 5, title: "Мороженное", category: "Herb", rating: 4, price: 80 },
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
