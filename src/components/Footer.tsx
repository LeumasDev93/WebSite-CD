"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; // Verifique o ícone de compras, o correto seria 'fa6' se estivesse disponível como mencionado.
import { CiMail } from "react-icons/ci";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="text-gray-900 bg-white dark:bg-background-dark flex justify-center items-center h-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl">
        <div className="text-xl md:text-2xl font-bold text-teal-400 mb-4 md:mb-0">
          <span>
            <Link href="/">Code House</Link>
          </span>
        </div>
        <div className="text-center text-gray-800 dark:text-white mb-4 md:mb-0">
          <span>© 2024 Code House. Design & Desenvolvimento de Software.</span>
        </div>
        <div className="flex text-gray-800 dark:text-white space-x-4 mb-4 md:mb-0">
          <span>
            <Link href="#">
              <FaCartShopping />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaFacebook />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaInstagram />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaTwitter />
            </Link>
          </span>
          <span>
            <Link href="#">
              <CiMail />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
