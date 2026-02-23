
import React from "react"
import GetAllCategories from "@/app/api/getAllCtegories"
import MySlider from "@/components/ui/myslider/myslider"
import page from "@/app/page"
import { Sliders } from "lucide-react";

export default async function CategorySlider() {

 const data = await GetAllCategories();
 console.log(data);

 const dataImg = data.map((categ)=>categ.image);

 return (

<div>
{/* <MySlider imgList={dataImg} slidesPerView={7}>/> */}
</div>
  
  
);

 }



