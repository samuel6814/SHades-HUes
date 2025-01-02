"use client"

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { WixClientContext } from "@/context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { useContext, useEffect } from "react"

const HomePage = async () => {
   
//   const wixClient = useWixClient()

// useEffect(() => {

  
//   const getProduct = async () => { 
//     const res = await wixClient.products.queryProducts().find();
 
//     console.log(res)
//   };
//   getProduct()
// },[wixClient]
// )
const wixClient = await wixClientServer();  

const res = await wixClient.products.queryProducts().find();

console.log(res)

  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
      <ProductList/>
    </div>
    {/**another container or div or however you wanna call it */}
    <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 xl:32 2xl:px-64 mb-12">Categories</h1>
      <CategoryList/>
    </div>
    {/**here ia another one, call it whatever you wanna call it */}
    <div className="mt-24 px-4 md:px-8 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
      <ProductList/>
    </div>
    </div>
   
  )
}

export default HomePage