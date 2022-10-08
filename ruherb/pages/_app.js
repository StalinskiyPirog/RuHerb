import "../styles/globals.css";
import React from "react";
import Layout from "../Components/customerLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
