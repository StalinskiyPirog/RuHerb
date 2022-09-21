import '../styles/globals.css'
import React from "react";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
  <Component {...pageProps} />)
}