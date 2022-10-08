import Layout from "../layout/layout";
import RegisterForm from "../components/form/registerForm";
export default function MainPage({}){
  return(
    <>
    <RegisterForm />
    </>
  );
}

MainPage.getLayout = function getLayout(page){
  return(
    <Layout >
      {page}
    </Layout>
  )
}