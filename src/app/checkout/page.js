'use client'
import { ProductCartContext } from '@/store/ProductCart';
import React, { useContext, useState } from 'react'

const Checkout = () => {
    const {productCart, addProduct, removeProduct} = useContext(ProductCartContext);
    const [discountAmt, setDiscountAmt] = useState(0);
    const [discount, setDiscount] = useState(0);

    const calcDiscount = () => {
        let discountedAmt = ((productCart.totalPrice.toFixed(2)) * discount) / 100;
        setDiscountAmt(discountedAmt);
    }

  return (
    <div className='mt-[110px] md:mx-[100px]'>
        <h2 className='text-3xl font-semibold'>Checkout Page</h2>
        <hr class="border-t-1 border-dashed border-gray-500 my-4 " />
        <div className='w-full h-full px-3 py-2 mt-2 flex flex-col md:flex-row'>
        <ul className='w-full md:w-2/3'>
            {
                productCart.products.map(product => (
                    <li className='w-full flex justify-between items-center my-4 bg-slate-100 rounded-md px-4 py-2'>
                        <div className='w-2/3'>
                            <h3>{product.product_name}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                        <div className='flex gap-4 h-full items-center'>
                            <span className='bg-slate-900 text-white hover:cursor-pointer px-2 py-1 rounded-md border-1 border-zinc-200' onClick={() => removeProduct(product)}>-</span>
                            <span>{product.quantity}</span>
                            <span className='bg-slate-900 text-white hover:cursor-pointer px-2 py-1 rounded-md border-1 border-zinc-200' onClick={() => addProduct(product)}>+</span>
                        </div>
                    </li>
                )) 
            }
           
        </ul> 
        <div className='w-full md:w-1/3 md:ml-4 p-4'>
            
            <p> Total Price : $ {productCart.totalPrice.toFixed(2)}</p>
            <p>Discount Amount : $ {discountAmt}</p>
            <p> Grand Total : $ {productCart.totalPrice.toFixed(2) - discountAmt}</p>
            
        <hr class="border-t-1 border-dashed border-gray-500 my-4 " />
        <div className='w-full flex'>
        <input name="discount" className='w-full px-3 py-2 border border-slate-200 p-2 rounded-md' type='number' value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <button onClick={() => calcDiscount()} className='w-fit px-3 py-2 text-center text-white bg-slate-900 ml-2 rounded-md'>Apply</button>
        </div>
        
        <hr class="border-t-1 border-dashed border-gray-500 my-4 " />
        <button className='bg-slate-900 text-white text-center px-3 py-2 rounded-md w-full'>Pay Now</button>
        </div>
        </div>
    </div>
  )
}

export default Checkout;