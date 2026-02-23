
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import img2 from"@/images/im-2.jpg"
import img3 from"@/images/im-3.jpg"
import img4 from"@/images/im4.webp"


export default function MySlider = ({imgList}) => {
    return (
         <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                  modules={[Autoplay]}
                  autoplay = {{delay:1400}}
                >
            <SwiperSlide><Image src={img2} className="h-[300]" object-cover alt="begtb" /></SwiperSlide>
            <SwiperSlide><Image src={img4} className="h-[300]" object-cover alt="begtb" /></SwiperSlide>

{ImageTrackList.map((src , ind)=>{

return (
            <SwiperSlide key={ind}><Image src={src} className="h-[300]" object-cover alt="begtb" /></SwiperSlide>



)


})}

                </Swiper> );
}
 
