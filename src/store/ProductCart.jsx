'use client'

import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const ProductCartContext = createContext();

export const ProductCardProvider = ({ children }) => {
    const initialCart = {
        products: [],
        totalQty: 0,
        totalPrice: 0
    };

    const [isOpen, setIsOpen] = useState(false);
    const [productCart, setProductCart] = useState(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem('productCart');
            return storedCart ? JSON.parse(storedCart) : initialCart;
        }
        return initialCart; 
    });

    // Update localStorage whenever cart changes
    useEffect(() => {
        try {
            localStorage.setItem('productCart', JSON.stringify(productCart));
        } catch (e) {
            console.error("Error saving JSON to localStorage", e);
        }
    }, [productCart]);


    const addProduct = (product) => {
        setProductCart((prevCart) => {
            const updatedProducts = [...prevCart.products];
            const existingProduct = updatedProducts.find(item => item.product_id === product.product_id);

            if (existingProduct) {
                const index = updatedProducts.indexOf(existingProduct);
                updatedProducts[index] = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1
                };
            } else {
                updatedProducts.push({
                    ...product,
                    quantity: 1
                });
            }

            const totalQty = updatedProducts.reduce((total, item) => total + item.quantity, 0);
            const totalPrice = updatedProducts.reduce((total, item) => total + (item.quantity * item.price), 0);

            return { products: updatedProducts, totalQty, totalPrice };
        });
        toast.success("Added to Cart.");
    };

    const removeProduct = (product) => {
        setProductCart((prevCart) => {
            const updatedProducts = [...prevCart.products];
            const existingProduct = updatedProducts.find(item => item.product_id === product.product_id);

            if (existingProduct) {
                const index = updatedProducts.indexOf(existingProduct);
                if (existingProduct.quantity > 1) {
                    updatedProducts[index] = {
                        ...existingProduct,
                        quantity: existingProduct.quantity - 1
                    };
                } else {
                    updatedProducts.splice(index, 1);
                }
            }

            const totalQty = updatedProducts.reduce((total, item) => total + item.quantity, 0);
            const totalPrice = updatedProducts.reduce((total, item) => total + (item.quantity * item.price), 0);
            return { products: updatedProducts, totalQty, totalPrice };
        });
        toast.success("Removed from the Cart.");
    };

    return (
        <ProductCartContext.Provider value={{ productCart, addProduct, removeProduct, isOpen, setIsOpen }}>
            {children}
        </ProductCartContext.Provider>
    );
};
