import { useRouter } from "next/router";
import Filter from "../../components/resultPage/resultPage";
export default function ResultPage() {
  let products = [{},{},{},{},{}];
  const r = useRouter();
  return (<> <div className="h-12 pt-2 sm:h-16  md:h-24  lg:h-32">
      Результаты поиска по запросу: <div className="font-bold">"{r.query.text}"</div>
  </div>
    <Filter products={products} /></>
  );
}

