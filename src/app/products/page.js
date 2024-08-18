"use client"

import ProductItem from "@/components/ProductItem";
import useDataHook from "@/hooks/useDataHook";
import { ProductCartContext } from "@/store/ProductCart";
import { useContext, useEffect } from "react";


export default function Products() {
    const [productData, setProductData] = useDataHook();
    const {productCart, addProduct, removeProduct} = useContext(ProductCartContext);

    useEffect(() => {
      console.log(productData);
      console.log(productCart);
    }, [productData, productCart])

  return (
    <div className="mt-[80px] mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
            productData.map(product => <ProductItem product={product} />)
        }
    </div>
  );
}
