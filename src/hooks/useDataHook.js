"use client";
import React, { useEffect, useState } from 'react';

function useDataHook() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/data/product.json');
            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData); 
            } else {
                console.error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, setData];
}

export default useDataHook;
