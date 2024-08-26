"use client";

import Image from "next/image";
import Two from "@/assets/images/about.jpg"; 
import Innovation from "@/assets/images/innovation.jpg";
import Excellence from "@/assets/images/excellence.jpg";
import Responsibility from "@/assets/images/responsibility.jpg";
import Adaptability from "@/assets/images/adaptability.jpg";
import Team from "@/assets/images/team.jpg";
import Differentiation from "@/assets/images/differentiation.jpg";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export function AboutTwo() {
  const { theme } = useContext(ThemeContext);

  const sections = [
    {
      title: "Nosso Propósito",
      content:
        "Acreditamos no poder da tecnologia para transformar negócios. Nosso propósito é garantir que cada cliente atinja seu potencial máximo por meio de sistemas eficientes e inovadores, que não apenas resolvem problemas, mas também criam novas oportunidades.",
      image: Two,
    },
    {
      title: "Missão",
      content:
        "Proporcionar manutenção contínua e performance ideal para os sistemas dos nossos clientes, utilizando as mais recentes tecnologias e práticas de desenvolvimento, com um atendimento excepcional e personalizado.",
      image: Innovation,
    },
    {
      title: "Visão",
      content:
        "Queremos criar um impacto positivo e duradouro no mercado, ajudando empresas a alcançar excelência e eficiência por meio da tecnologia. Nossa visão é ser referência em soluções que transformam desafios em crescimento.",
      image: Excellence,
    },
    {
      title: "Valores",
      content: (
        <ul className="list-disc list-inside">
          <li><strong>Inovação:</strong> Estamos sempre em busca de novas tecnologias e abordagens criativas para oferecer as melhores soluções.</li>
          <li><strong>Excelência:</strong> Comprometidos com a entrega de serviços de alta qualidade, superamos as expectativas dos nossos clientes.</li>
          <li><strong>Responsabilidade:</strong> Assumimos total responsabilidade pelos nossos projetos, garantindo integridade e profissionalismo em tudo o que fazemos.</li>
          <li><strong>Adaptabilidade:</strong> Somos flexíveis e nos adaptamos às necessidades dos nossos clientes, ajustando nossas soluções para atendê-las com precisão.</li>
        </ul>
      ),
      image: Responsibility,
    },
    {
      title: "Nossa Equipe",
      content:
        "Contamos com uma equipe jovem de profissionais responsáveis e qualificados, apaixonados por tecnologia e comprometidos com a excelência.",
      image: Team,
    },
    {
      title: "Nosso Diferencial",
      content: (
        <ul className="list-disc list-inside">
          <li>Abordagem centrada no cliente</li>
          <li>Metodologias ágeis de desenvolvimento</li>
          <li>Foco em inovação e tecnologias emergentes</li>
          <li>Compromisso com prazos e qualidade</li>
        </ul>
      ),
      image: Differentiation,
    },
  ];

  return (
    <section
      id="about"
      className={`relative ${
        theme === "dark" ? "bg-background-dark text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300 py-20`}
    >
      <div className="container mx-auto px-4 mb-10">
        {/* Seção QUEM SOMOS NÓS */}
        <motion.div
          className="flex flex-col items-center md:items-start md:flex-row md:space-x-10 space-y-10 md:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="px-4 md:px-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={Two}
              alt="About Image"
              className="w-[150px] h-auto rounded-full shadow-lg"
            />
          </motion.div>

          <motion.div
            className="mt-6 md:mt-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-blue-900 font-bold text-2xl md:text-3xl">
              QUEM SOMOS NÓS?
            </h2>
            <p className="mt-4 font-semibold text-lg md:text-xl leading-relaxed">
              Code House é uma empresa de tecnologia e desenvolvimento de
              software fundada em 2024 em Cabo Verde. Nossa missão é
              transformar desafios internos das empresas em oportunidades de
              crescimento, oferecendo soluções digitais personalizadas que
              impulsionam o sucesso dos nossos clientes.
            </p>
          </motion.div>
        </motion.div>

        {/* Iterar sobre cada seção com layout alternado */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`mt-16 flex flex-col-reverse md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Texto e Título */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-8">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-blue-900"
                }`}
              >
                {section.title}
              </h2>
              <div
                className={`text-base md:text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </div>

            {/* Imagem com Sobreposição */}
            <motion.div
              className="w-full md:w-1/3 relative md:pr-8 bg-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
