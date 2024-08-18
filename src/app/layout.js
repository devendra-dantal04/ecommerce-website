import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ProductCardProvider } from "@/store/ProductCart";
import ProductCart from "@/components/ProductCart";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"]
})

export const metadata = {
  title: "Ecommerce Shop",
  description: "One Stop Solution for your shopping needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
      <ProductCardProvider>
        <Toaster />
      <Navbar />
      <ProductCart />
      {children}
      </ProductCardProvider>
      </body>
    </html>
  );
}
