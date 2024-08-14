"use client";

import Image from "next/image";
import Two from "@/assets/images/about.jpg";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div
        className={`text-gray-900 flex flex-col justify-center items-center mt-20 px-4 mb-10 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <div className="flex flex-col md:space-x-20 space-y-10 md:space-y-0 md:flex-row items-center">
          <div className="px-4 md:px-0">
            <Image
              src={Two}
              alt="About Image"
              className="w-[500px] h-auto rounded-full"
            />
          </div>
          <div className="mt-20">
            <div className="mb-4">
              <h2 className="text-teal-400 font-bold text-sm md:text-xl px-8 md:px-0">
                QUEM SOMOS NÓS?
              </h2>
            </div>
            <div className="w-96 text-center md:text-left px-4 md:px-0">
              <h1
                className={`font-bold text-xl md:text-2xl ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Somos uma consultoria global especializada em gerenciamento de
                stakeholders e construção de parcerias no setor de
                desenvolvimento de software.
              </h1>
            </div>
            <div
              className={`w-[400px] mt-5 ${
                theme === "dark" ? "text-gray-300" : "text-gray-400"
              }`}
            >
              <h3 className="px-4 md:px-0">
                Acesse recursos valiosos instantaneamente para desenvolvimento
                de software. Implemente soluções seguras, otimize sua eficiência
                e colabore com outros profissionais para criar sua rede
                Techwind. Melhore a produtividade e leve seus projetos ao
                próximo nível com ferramentas inovadoras.
              </h3>
            </div>
            <div className="flex justify-center md:justify-start mt-4 px-4 md:px-0">
              <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-6 md:px-4 rounded">
                Saber Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
