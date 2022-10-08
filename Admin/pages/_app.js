import "../styles/globals.css";
import React from "react";
import NavigationLayout from "../components/layout/NavigationLayout";


export default function MyApp({ Component, pageProps }) {
  return (
    <NavigationLayout>
      <Component {...pageProps} />
    </NavigationLayout>
  );
}
