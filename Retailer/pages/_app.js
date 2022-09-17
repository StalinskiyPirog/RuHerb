import '../styles/globals.css'
import React from "react";
import { WishlistProvider } from 'react-use-wishlist';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<WishlistProvider>
    
  <Component {...pageProps} /></WishlistProvider>)
}