import Layout from "../components/landingLayout";
import Jumbotrone from "../components/landing/jumbotron";
import ThirdJumbotron from "../components/landing/thirdJumbotron";
import SecondJumbotron from "../components/landing/secondJumbotron";
import RegisterForm from "../components/landing/registerForm";
import { motion } from "framer-motion";

export default function IndexPage(){
    return(
        <div className="bg-gradient-to-br from-white to-green-500">
            <div id="first" />
            <Jumbotrone />
            <div id="second" />
            <SecondJumbotron />
            <div id="third" />
            <ThirdJumbotron />
            <div id="fourth" />
            <RegisterForm />
            <div className="w-full h-4"></div>
        </div>
    )
}

IndexPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  