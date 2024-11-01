"use client";

import "../style.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import pic1 from "../../../public/images/container-1-Pic-1.jpg";
import pic2 from "../../../public/images/container-1-Pic-2.jpg";
import pic3 from "../../../public/images/container-1-Pic-3.jpg";
import pic4 from "../../../public/images/container-2-Pic-1.jpg";
import pic5 from "../../../public/images/container-2-Pic-2.jpg";
import pic6 from "../../../public/images/container-2-Pic-3.jpg";
import pic7 from "../../../public/images/container-2-Pic-4.jpg";
import pic8 from "../../../public/images/container-2-Pic-5.jpg";
import pic9 from "../../../public/images/container-2-Pic-6.jpg";
import pic10 from "../../../public/images/container-2-Pic-7.jpg";
import pic11 from "../../../public/images/container-2-Pic-8.jpg";

export default function Home2() {
  return (
    <div className="Home2-conatiner">
      <h1>
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p>
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="container-1">
        <div className="box"><Image src={pic1} alt="computing1" /></div>
        <div className="box"><Image src={pic2} alt="computing1" /></div>
        <div className="box"><Image src={pic3} alt="computing2" /></div>
      </div>

      <div className="container-2">
        <div className="wrappe">
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              1200: { slidesPerView: 2 },
              360: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic4} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic5} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic6} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic7} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic8} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic9} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800" src={pic10} alt="piaic office"/></SwiperSlide>
            <SwiperSlide><Image className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800"src={pic11} alt="piaic office"/></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
