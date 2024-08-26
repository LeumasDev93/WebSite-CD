"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

import Image from "next/image";

import { services } from "@/data/serviceData"; 
import { ServiceType } from "@/types/service";

export function Service() {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const groupSize = 3; // Quantidade de serviços exibidos de cada vez
  const totalGroups = Math.ceil(services.length / groupSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    }, 9000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const visibleServices = services.slice(
    currentIndex * groupSize,
    currentIndex * groupSize + groupSize
  );

  return (
    <section
      id="services"
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div
        className={`shadow text-gray-900 flex flex-col justify-center items-center mt-20 p-10 mb-10 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <div className="">
          <h1 className="text-blue-900 text-2xl font-bold">Nossos Serviços</h1>
        </div>
        <div className="flex flex-row justify-center space-x-5 mt-8">
          {visibleServices.map((service, index) => (
            <Link href={`/service-details/${service.id}`} key={index}>
              <div
                className="w-80 md:w-96 h-[300px] rounded bg-white dark:bg-gray-700 shadow md:shadow-md mb-5 md:mb-0 transition-transform duration-300 transform hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-700 p-4 flex flex-col items-center"
              >
                <div className="w-full h-32 mb-4 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="text-4xl mb-2">{service.icon}</div>
                <div className="mt-2 text-center">
                  <h2 className="text-gray-800 dark:text-white font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-4 px-4 md:px-0">
          <Link
            href="/service"
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-6 md:px-4 rounded"
          >
            Ver Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
