"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

import One from "@/assets/images/pagina_home_2.jpg";
import Two from "@/assets/images/pagina_home_1.jpg";
import Three from "@/assets/images/mobile-banner.jpg";
import Four from "@/assets/images/software-banner.jpg";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        speed={2000}
        effect={"coverflow"}
        loop={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] transform transition-transform duration-1000 ease-in-out hover:scale-110">
            <Image
              src={One}
              alt="Banner Image 1"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center text-white p-20 w-[800px]">
              <h1 className="text-xl md:text-5xl font-bold ">
                Simplificamos a tecnologia para amplificar seu sucesso.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] transform transition-transform duration-1000 ease-in-out hover:scale-110">
            <Image
              src={Two}
              alt="Banner Image 2"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center text-white p-20 w-[800px]">
              <h1 className="text-xl md:text-5xl font-bold ">
                Arquitetos Digitais: Construindo Sonhos em Código.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] transform transition-transform duration-1000 ease-in-out hover:scale-110">
            <Image
              src={Three}
              alt="Banner Image 3"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center text-white p-20 md:w-[800px]">
              <h1 className="text-xl md:text-5xl font-bold ">
                Transformando ideias em produtos digitais.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] transform transition-transform duration-1000 ease-in-out hover:scale-110">
            <Image
              src={Four}
              alt="Banner Image 4"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center text-white p-20 w-[800px]">
              <h1 className="text-xl md:text-5xl font-bold ">
                Conectamos seu negócio ao futuro digital.
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
