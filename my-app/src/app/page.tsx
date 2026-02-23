

import Image from "next/image";
import Mainslider from "./components/navbar/mainslider/mainslider";
import CategorySlider from "./components/navbar/categorySlider/category-slider";
import Products from "./products/page";
import React from "react";

export default function Home() {
  return (<>
<Mainslider/>
<CategorySlider/>
<Products/>
  </>
  )
}

