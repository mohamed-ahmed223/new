"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../../../../../public/images/images-1.jpeg";
import img2 from "../../../../../public/images/im-3.jpg";
import img4 from "../../../../../public/images/im4.webp";
import Image from "next/image";
import { Autoplay } from "swiper/modules";


export default function MainSlider() {
    return <>
        <div className="container w-[80%] mx-auto flex mt-5">

            <div className="w-3/4">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                  modules={[Autoplay]}
                  autoplay = {{delay:2000}}
                >
            <SwiperSlide><Image src={img2} className="h-[300]" object-cover alt="begtb" /></SwiperSlide>
            <SwiperSlide><Image src={img4} className="h-[300]" object-cover alt="begtb" /></SwiperSlide>

                </Swiper>
            </div>

            <div className="w-1/4 ">
                        <SwiperSlide><Image src={img1} className="h-[150]" object-cover alt="begtb" />
           <Image src={img3} className="h-[150]" object-cover alt="begtb" /></SwiperSlide>
       </div>
        </div></>
}