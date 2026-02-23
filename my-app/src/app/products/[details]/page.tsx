
import productDetails from "@/app/api/productDetails";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import React from "react";


export default async function Details({params}:any){
  let {details} =  await params;
  
 let data = await productDetails(details);
 console.log(data)
 
 return (
    
  <div>
    <h1 className="text-center mt-5 border-3 border-black w-50 mx-auto">Product Detials</h1>
    <div className="flex flex-wrap justify-center items-center gap-5  mt-4">
<div className="w-full md:w-1/4">
<img src={data.imageCover} alt="" />
</div>
<div className="w-full md:w-2/3">
<h1 className="mb-4">{data.title}</h1>
<p>{data.description}</p>
<h4 className="text-green-500">{data.category.name}</h4>
<CardFooter className="flex justify-between">
    <p className="mt-2">{data.price} EGP</p>
    <p className="w-50"><i className="fa-solid fa-star text-yellow-400"></i>{data.ratingsAverage}</p>
  </CardFooter>
<Button className="bg-red-500 w-full mt-5"><i className="fa-solid fa-plus"></i>Add To Cart</Button>
</div>
</div>



  </div>
   
  );
 }
