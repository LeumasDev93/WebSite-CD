"use client";

import { AiFillEuroCircle } from "react-icons/ai";

import { IoCubeOutline } from "react-icons/io5";
import { MdOutlineNetworkLocked } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export function Service() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="services" className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className={`text-gray-900 flex flex-col justify-center items-center mt-20 p-4 mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <div className="">
          <h1 className="text-teal-400 text-2xl font-bold">Nossos Serviços</h1>
        </div>
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-5 mt-8">
            {[...Array(3)].map((_, colIndex) => (
              <div key={colIndex} className="w-80 md:w-96 h-[200px] rounded bg-white dark:bg-gray-700 shadow md:shadow-md mb-5 md:mb-0 transition-transform duration-300 transform hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-700 p-4">
                <div className="">
                  {colIndex === 0 && <AiFillEuroCircle className="text-teal-400 size-8" />}
                  {colIndex === 1 && <IoCubeOutline className="text-teal-400 size-8" />}
                  {colIndex === 2 && <MdOutlineNetworkLocked className="text-teal-400 size-8" />}
                </div>
                <div className="mt-2">
                  <h2 className="text-gray-800 dark:text-white font-semibold">
                    {colIndex === 0 && "Faça seu negócio crescer"}
                    {colIndex === 1 && "Web Design"}
                    {colIndex === 2 && "Segurança de Rede"}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
