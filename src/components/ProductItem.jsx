import { ProductCartContext } from '@/store/ProductCart'
import React, { useContext } from 'react'

function ProductItem({product}) {
    const {addProduct, removeProduct} = useContext(ProductCartContext);
  return (
    <div class="bg-white p-3 border border-zinc-200 rounded-lg shadow-md h-100 flex flex-col">
    <div class="flex-shrink-0">
      <img src="https://via.placeholder.com/150" alt="Product Image" class="w-full h-40 object-cover mb-4 rounded-md" />
    </div>
    <h3 class="text-lg font-semibold mb-2">{product.product_name}</h3>
    <p class="text-gray-600 mb-2">{product.description}</p>
    <div class="mt-auto">
      <p class="text-xl font-bold">${product.price}</p>
      <button class="mt-2 w-full bg-slate-800 text-white py-2 rounded" onClick={() => addProduct(product)}>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductItem