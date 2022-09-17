import Link from "next/link";
import Layout from "../../components/customerLayout";
export default function ResultPage() {
  return (
    <>
    <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
      <h1>Здесь должно быть избранное</h1>
      <Link href="/">
        Назад
      </Link>
    </>
  );
}
ResultPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};