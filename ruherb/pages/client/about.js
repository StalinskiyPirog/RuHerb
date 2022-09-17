import Link from "next/link";
import Layout from "../../components/customerLayout";

export default function DeliveryPage() {
  return (
    <>
    <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
      <h1>Здесь должен быть &quot;О нас&quot;</h1>
      <Link href="/">
        Назад
      </Link>
    </>
  );
}
DeliveryPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};