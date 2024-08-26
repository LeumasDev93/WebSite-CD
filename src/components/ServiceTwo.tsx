"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

import { services } from "@/data/serviceData"; 
import Image from "next/image";

export function ServiceTwo() {
  const { theme } = useContext(ThemeContext);

  

  return (
    <section
      id="services"
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div
        className={`text-gray-900 flex flex-col justify-center items-center mt-20 p-4 mb-10 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <div className="">
          <h1 className="text-blue-900 text-2xl font-bold">Nossos Serviços</h1>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 justify-center md:space-y-3 space-x-0 md:space-x-5 mt-8">
          {services.map((service, index) => (
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
      </div>
    </section>
  );
}
