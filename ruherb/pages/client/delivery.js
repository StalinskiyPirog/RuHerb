import Link from "next/link"
import Layout from "../../components/customerLayout"
export default function DeliveryPage(){
    return(
        <div>
            <div className="h-12 sm:h-16  md:h-24  lg:h-32">

</div>
            Здесь будет инфа о доставке</div>
    )
}

DeliveryPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };