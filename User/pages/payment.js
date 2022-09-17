import Link from "next/link";
import Layout from "../../components/customerLayout";


export default function PaymentPage() {
  return (
    <div>
      <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
      <h1>Здесь должна быть инфа о способах оплаты</h1>
      <Link href="/">
        Назад
      </Link>
    </div>
  );
}




PaymentPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };