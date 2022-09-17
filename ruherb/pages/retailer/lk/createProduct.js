import Layout from "../../../components/businessLayout";
import { useRouter } from "next/router";
export default function LKpage() {
  const router = useRouter();
  return(<div className="">
   { router.pathname}
  </div>);
}

LKpage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
