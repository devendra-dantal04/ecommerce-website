'use client';

import { ProductCartContext } from '@/store/ProductCart'
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useContext } from 'react'

function ProductCart() {
    const {productCart, addProduct, removeProduct, isOpen, setIsOpen} = useContext(ProductCartContext);

  return (
    <div className={`fixed flex flex-col justify-between ${isOpen ? 'right-0' : '-right-[100%]'} top-[60px] w-[90%] bg-slate-50 sm:w-[350px] md:w-[400px] transition-all`} style={{'height': 'calc(100vh - 60px)'}}>
        <div className='absolute right-2 top-2' onClick={() => setIsOpen(!isOpen)}>
            <XIcon className='w-5 h-5 cursor-pointer' />
        </div>
        {
            productCart.products.length > 0  ? (
                <>
            <ul className='w-full h-full px-3 py-2 mt-2'>
            {
                productCart.products.map(product => (
                    <li className='w-full flex justify-between items-center my-4'>
                        <div className='w-2/3'>
                            <h3>{product.product_name}</h3>
                            <p>{product.price}</p>
                        </div>
                        <div className='flex gap-4 h-full items-center'>
                            <span className='bg-slate-900 text-white hover:cursor-pointer px-2 py-1 rounded-md  border-1 border-zinc-200' onClick={() => removeProduct(product)}>-</span>
                            <span>{product.quantity}</span>
                            <span className='bg-slate-900 text-white hover:cursor-pointer px-2 py-1 rounded-md border-1 border-zinc-200' onClick={() => addProduct(product)}>+</span>
                        </div>
                    </li>
                )) 
            }
           
             </ul> 

            <div className='mb-2 p-2 flex flex-col w-full mx-2 px-2'>  
            <p className='font-semibold text-md flex justify-between mb-2'>Total Price : {productCart.totalPrice.toFixed(2)}</p>
            <Link href="/checkout" className='bg-slate-900 px-3 py-2 text-white rounded-md text-center'>Go to checkout</Link>
            </div>
            </>
        ) :
                <div className='w-full h-full flex justify-center items-center'>
                    <p className='font-bold'>Add Products in cart</p>
                </div>
            }
    
    </div>
  )
}

export default ProductCart