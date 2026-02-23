
"use client"
import React, { useState } from 'react'
import { createContext } from "react";
import { GetCartData } from '../api/getcartdata'


export let cartcontext = createContext( {} )


export default function CartContextProvider({children} :{children : React.ReactNode}) {

const [cartdata , setCartData] = useState(null)
const [numOfCartItem , setNumOfCartItem] = useState(0)
const [cartId , setcartId] = useState(null)




async function getdata(){

const userdatacart = await GetCartData()
console.log("userdatacart" , userdatacart);

setCartData(userdatacart.data)
setNumOfCartItem(userdatacart.numOfCartItem)
setcartId(userdatacart.cartId)
}


  return <cartcontext.Provider
      value={{
        cartdata,
        numOfCartItem,
        cartId,
        setCartData,
        setNumOfCartItem,
      }}
    >
  
  
  </cartcontext.Provider>
}
