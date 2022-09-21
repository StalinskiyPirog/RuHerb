import { useEffect } from "react";
import {useRouter} from 'next/router';
import Layout from "components/businessLayout";

export default function Error() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {},5000)
        router.push("/")
    }, );
    return (<div><div className="h-12 sm:h-16  md:h-24  lg:h-32">

    </div><h1>Ошибка! Возможно вы перешли на несуществующую страницу</h1></div>)
  }
  
  Error.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }