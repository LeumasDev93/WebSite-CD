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
          delay: 9000,
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
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
              {/* <div className="container mx-auto">
                <h4 className="mb-4 text-sm md:text-lg lg:text-xl">
                  <svg
                    className="inline-block mr-2"
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.500183"
                      width="25.6667"
                      height="15"
                      rx="7.5"
                      stroke="white"
                    />
                    <rect
                      x="13.3334"
                      y="0.000183105"
                      width="26.6667"
                      height="16"
                      rx="8"
                      fill="white"
                    />
                  </svg>
                  Implementação de Projetos
                </h4>
                <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">
                  Seu Melhor Parceiro para solução de serviços IT
                </h1>
                <p className="text-sm md:text-base lg:text-lg mb-6 text-blue-900">
                  Inovar através das soluções propostas, processos, serviços e
                  modelos de negócio, de modo que ofereçam diferenciais
                  competitivos aos clientes e resultados que criem valor
                </p>
                <Link href="#"
                  className="btn-one mt-4 inline-block bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded">
                  Saber Mais{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div> */}
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
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
              {/* <div className="container mx-auto">
                <h4 className="mb-4 text-sm md:text-lg lg:text-xl">
                  <svg
                    className="inline-block mr-2"
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.500183"
                      width="25.6667"
                      height="15"
                      rx="7.5"
                      stroke="white"
                    />
                    <rect
                      x="13.3334"
                      y="0.000183105"
                      width="26.6667"
                      height="16"
                      rx="8"
                      fill="white"
                    />
                  </svg>
                  Implementação de Projetos
                </h4>
                <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">
                  Seu Melhor Parceiro para solução de serviços IT
                </h1>
                <p className="text-sm md:text-base lg:text-lg mb-6 text-blue-900">
                  Inovar através das soluções propostas, processos, serviços e
                  modelos de negócio, de modo que ofereçam diferenciais
                  competitivos aos clientes e resultados que criem valor
                </p>
                <Link href="#"
                  className="btn-one mt-4 inline-block bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded">
                  Saber Mais{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
