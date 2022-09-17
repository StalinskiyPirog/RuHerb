import Layout from "../../components/customerLayout";

export default function ProfilePage(){
    return(<>
    <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
    Профиль
    </>);
}


ProfilePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };