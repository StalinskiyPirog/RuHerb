import Filter from "@/components/customer/resultPage/resultPage";
import Layout from "@/components/customerLayout";
export default function ResultPage() {
  return (
    <Filter />
  );
}

ResultPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}