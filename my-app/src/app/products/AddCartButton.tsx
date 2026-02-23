"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { AddToCart } from '../api/addToCart'
import { toast } from 'sonner'

export default function AddCartBtn({productId} : {productId :string}) {


      async function  HandleAddItem(){

        const data = await AddToCart(productId)

        console.log(data);
        

        if (data.status == "success") {
            toast.success("Product Added succefully ya Handasa" , {position:"top-center"})
            
        }else{
            toast.error("Error" , {position:"top-center"})
        }
     }
    return <>

        <Button onClick={HandleAddItem} className="bg-red-500"><i className="fa-solid fa-plus"></i>Add To Cart</Button>

    </>
}
