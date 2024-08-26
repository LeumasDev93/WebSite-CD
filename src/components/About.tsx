"use client";

import Image from "next/image";
import TeamImage from "@/assets/images/about.jpg";  // Imagem do lado esquerdo
import TechImage from "@/assets/images/team.jpg"; // Imagem do lado direito
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

export function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`${theme === "dark" ? "bg-background-dark" : "bg-gray-100"} transition-colors duration-300 py-20`}
    >
      <div
        className="shadow mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 p-10"
      >
        {/* Imagem esquerda */}
        <div className="md:w-1/4 flex justify-center">
          <Image
            src={TeamImage}
            alt="Team Collaboration"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        
        {/* Texto central */}
        <div className="md:w-1/2 text-center space-y-4">
          <h2 className="text-blue-900 font-bold text-2xl md:text-3xl">
            QUEM SOMOS NÓS?
          </h2>
          <p className={`text-justify ${theme === "dark" ? "text-white" : "text-gray-800"} text-lg md:text-xl`}>
            Code House é uma empresa de tecnologia e desenvolvimento de software fundada em 2024 em Cabo Verde.
            Nossa missão é transformar desafios internos das empresas em oportunidades de crescimento, oferecendo
            soluções digitais personalizadas que impulsionam o sucesso dos nossos clientes.
          </p>
          <p className={`text-justify ${theme === "dark" ? "text-gray-300" : "text-gray-500"} text-sm md:text-base`}>
            Acesse recursos valiosos instantaneamente para desenvolvimento de software. Implemente soluções seguras,
            otimize sua eficiência e colabore com outros profissionais para criar sua rede Techwind. Melhore a
            produtividade e leve seus projetos ao próximo nível com ferramentas inovadoras.
          </p>
         
        </div>
        
        {/* Imagem direita */}
        <div className="md:w-1/5 flex flex-col items-center justify-center">
          <Image
            src={TechImage}
            alt="Technology Solutions"
            width={300}
            height={300}
            className="rounded-full"
          />
           <Link href="/about" className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded w-36 mt-4">
            Saber Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
