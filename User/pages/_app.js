import "../styles/globals.css";
import React from "react";
import NavigationLayout from "../components/NavigationLayout";

import { WishlistProvider } from "react-use-wishlist";
import { CartProvider } from "react-use-cart";
export default function MyApp({ Component, pageProps }) {
  return (
    <NavigationLayout>
      <WishlistProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </WishlistProvider>
    </NavigationLayout>
  );
}
