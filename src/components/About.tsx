"use client";

import Image from "next/image";
import TeamImage from "@/assets/images/team.jpg"; // Caminho para a primeira imagem redonda
import TechImage from "@/assets/images/about.jpg"; // Caminho para a segunda imagem redonda
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

export function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-gray-100"
      } transition-colors duration-300 py-20`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-blue-900 font-bold text-2xl md:text-3xl">
            QUEM SOMOS NÓS?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center md:w-1/3 mb-6">
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-gray-800"
              } text-center`}
            >
              Code House é uma empresa de tecnologia e desenvolvimento de
              software fundada em 2024 em Cabo Verde. Nossa missão é transformar
              desafios internos das empresas em oportunidades de crescimento,
              oferecendo soluções digitais personalizadas que impulsionam o
              sucesso dos nossos clientes.
            </p>
            <div className="flex justify-center mt-4">
              <Image
                src={TeamImage}
                alt="Team Collaboration"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:w-1/3">
            <div className="flex justify-center mt-4">
              <Image
                src={TechImage}
                alt="Technology Solutions"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-500"
              } text-center mt-4`}
            >
              Acesse recursos valiosos instantaneamente para desenvolvimento de
              software. Implemente soluções seguras, otimize sua eficiência e
              colabore com outros profissionais para criar sua rede Techwind.
              Melhore a produtividade e leve seus projetos ao próximo nível com
              ferramentas inovadoras.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            href="/about"
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded-lg"
          >
            Saber mais
          </Link>
        </div>
      </div>
    </section>
  );
}
