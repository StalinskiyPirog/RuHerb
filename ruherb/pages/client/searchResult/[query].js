import Filter from "../../../components/customer/resultPage/resultPage";
import Layout from "../../../components/customerLayout";
export default function ResultPage() {
  return (<> <div className="h-12 sm:h-16  md:h-24  lg:h-32">

  </div>
    <Filter /></>
  );
}

ResultPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}