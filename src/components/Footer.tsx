"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="text-gray-900 bg-white dark:bg-background-dark flex justify-center items-center h-20 p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-2xl px-4 lg:px-8">
        <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-teal-400 mb-4 lg:mb-0">
          <span>
            <Link href="/">Code House</Link>
          </span>
        </div>
        <div className="text-center text-gray-800 dark:text-white mb-4 lg:mb-0">
          <span>© 2024 Code House. Design & Desenvolvimento de Software.</span>
        </div>
        <div className="flex text-gray-800 dark:text-white space-x-4 justify-center lg:justify-start">
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
