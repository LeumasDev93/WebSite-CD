"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { useParams } from "next/navigation";
import { ServiceType } from "@/types/service";
import { ThemeProvider } from "@/context/ThemeContext";

import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { motion } from "framer-motion";
import Image from "next/image";

import { services } from "@/data/serviceData";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { Service } from "@/components/Service";

export default function ServiceDetail() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [service, setService] = useState<ServiceType | null>(null);
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

  useEffect(() => {
    if (id) {
      const selectedService = services.find((service) => service.id === id);
      setService(selectedService || null);
    }
  }, [id]);

  if (!service) {
    return <div>Carregando...</div>;
  }

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <main className="flex flex-col min-h-screen bg-gray-100 dark:bg-background-dark ">
        <Header />
        <section
          className="relative w-full h-96 flex items-center justify-center"
          style={{
            backgroundImage: `url(${service.imageBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {service.title}
            </h1>
          </div>
        </section>
        <motion.div
          className="container mx-auto p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start md:space-x-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-10">
            <motion.div
              className="text-blue-900 text-6xl mb-4 md:mb-0"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-white mb-6">
                {service.description}
              </p>
              <p className="text-base text-gray-600 dark:text-white ">
                {service.details}
              </p>
              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-blue-900 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-950 transition-colors duration-300"
              >
                Entre em contato
              </motion.button>
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
              <Image
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
        <Service />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </ThemeProvider>
  );
}
