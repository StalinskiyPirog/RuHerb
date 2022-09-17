import Layout from "../../components/customerLayout";
import NewBlock from "../../components/customer/mainPage/new";

export default function Index({ data }) {
  return (
    <div  >
      <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
      <NewBlock />
      
      <NewBlock />
      
      <NewBlock />
      
      <NewBlock />
      
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
 