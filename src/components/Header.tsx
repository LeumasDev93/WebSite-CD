"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { PiMoonStarsLight } from "react-icons/pi";
import { MdLightMode } from "react-icons/md";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-background-dark shadow-md fixed top-0 w-full z-50">
      <div className="px-4 py-5 flex justify-between items-center mx-8 md:mx-10 lg:mx-48">
        <div className="text-2xl md:text-3xl font-bold text-teal-400">
          <Link href="/">Code House</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-700 dark:text-foreground-dark hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-gray-700 dark:text-foreground-dark hover:text-teal-400"
          >
            Serviços
          </Link>
          <Link
            href="#about"
            className="text-gray-700 dark:text-foreground-dark hover:text-teal-400"
          >
            Sobre Nós
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 dark:text-foreground-dark hover:text-teal-400"
          >
            Contato
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 mb-2 bg-teal-400 text-white px-4 py-2 rounded-full"
          >
            {theme === "light" ? (
              <PiMoonStarsLight className="size-5 font-bold" />
            ) : (
              <MdLightMode className="size-5 font-bold" />
            )}
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                onClick={toggleIsOpen}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark shadow-md">
          <nav className="px-4 py-3 space-y-1">
            <div className="grid grid-cols-2">
              <div>
                <Link
                  href="#about"
                  className="block text-gray-700 dark:text-foreground-dark hover:text-gray-900"
                >
                  Sobre Nós
                </Link>
                <Link
                  href="#services"
                  className="block text-gray-700 dark:text-foreground-dark hover:text-gray-900"
                >
                  Serviços
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-700 dark:text-foreground-dark hover:text-gray-900"
                >
                  Contato
                </Link>
              </div>
            </div>
            <div>
              <button
                onClick={toggleTheme}
                className="ml-4 mb-2 bg-teal-400 text-white px-4 py-2 rounded-full"
              >
                {theme === "light" ? (
                  <PiMoonStarsLight className="size-5 font-bold" />
                ) : (
                  <MdLightMode className="size-5 font-bold" />
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
