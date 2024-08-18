'use client'
import { ArrowRight } from "lucide-react";
import { useContext } from "react";


export default function Home() {

 

  return (
    <main className="w-[100vw] min-h-[100vh] flex itmes-center flex flex-col">
      <h1 className="font-bold mt-[150px] text-5xl md:text-6xl lg:text-7xl w-[90%] lg:w-[60%] text-center leading-2 font-dmserif mx-auto">
        Welcome to One Stop Solution for your fashion needs.
      </h1>
  
      <a href="/products" className="mt-8 w-fit px-6 py-4 bg-zinc-800 hover:bg-zinc-900 text-white rounded-full active:scale-95 active:transition-all flex mx-auto justify-center items-center">
        <p>Checkout Products</p>
        <ArrowRight className="h-5 w-5 ml-2" />
      </a>
   
    </main>
  );
}
