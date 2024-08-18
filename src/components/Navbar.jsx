'use client'

import React, { useContext, useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { ProductCartContext } from '@/store/ProductCart';

function Navbar() {
    const {productCart, isOpen, setIsOpen} = useContext(ProductCartContext);
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

  return (
    <div className='fixed top-0 w-full flex justify-between items-center px-6 h-[60px] bg-slate-50 border-b-2 border-slate-100'>
        <div>
            <p className='text-md font-bold'>ECom.</p>
        </div>
        <ul className='flex gap-4 items-center'>
            <li className='text-sm hover:cursor-pointer'>Home</li>
            <li className='text-sm hover:cursor-pointer'>Products</li>
            <li className='relative flex justify-center items-center hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                
                <ShoppingBag className="w-6 h-6" />
                <div className='absolute -right-3 -top-3 bg-slate-100 px-1.5 py-0.5 rounded-full text-xs'>
                    {productCart.totalQty ?? 0}
                </div>
                
            </li>
        </ul>
    </div>
  )
}

export default Navbar