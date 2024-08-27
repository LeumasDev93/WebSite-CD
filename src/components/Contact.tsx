"use client";

import Image from "next/image";
import ContactIllustration from "@/assets/images/contact.jpg";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ErrorType {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorType>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let tempErrors: ErrorType = {};
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      tempErrors.name = "Por favor, insira seu nome.";
    }

    if (!formData.email) {
      formIsValid = false;
      tempErrors.email = "Por favor, insira seu email.";
    }

    if (!formData.subject) {
      formIsValid = false;
      tempErrors.subject = "Por favor, insira o assunto.";
    }

    if (!formData.message) {
      formIsValid = false;
      tempErrors.message = "Por favor, digite sua mensagem.";
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      const countryCode = "+238"; 
      const phoneNumber = "9809745";
      const fullPhoneNumber = `${countryCode}${phoneNumber}`; 
      const whatsappMessage = `Nome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      console.log(encodedMessage, "encodedMessage");
      window.open(
        `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`,
        "_blank"
      );
    }
  };
  
  return (
    <section
      id="contact"
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-gray-100"
      } transition-colors duration-300 py-20`}
    >
      <div className="shadow bg-gray-100 dark:bg-background-dark mx-auto p-10 flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-6">
          <Image
            src={ContactIllustration}
            alt="Contact Us"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
            <h2 className="text-center text-blue-900 font-bold text-xl md:text-2xl mb-4">
              Fale Connosco
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Seu Nome:*"
                className={`w-full text-gray-400 px-4 py-2 border rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Seu Email:*"
                className={`w-full text-gray-400 px-4 py-2 border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
              <input
                type="text"
                name="subject"
                placeholder="Assunto:*"
                className={`w-full text-gray-400 px-4 py-2 border rounded-md ${
                  errors.subject ? "border-red-500" : ""
                }`}
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
              <textarea
                name="message"
                placeholder="Mensagem:*"
                className={`w-full text-gray-400 px-4 py-2 border rounded-md ${
                  errors.message ? "border-red-500" : ""
                }`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 rounded-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
