"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";

import LogoAzul from "@/assets/images/logoCHouseAzul.png";
import LogoBranco from "@/assets/images/logoCHouseBranco.png";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; 
import { CiMail } from "react-icons/ci";

export function Footer() {
  const { theme } = useContext(ThemeContext);

  const logo = theme === "dark" ? LogoBranco : LogoAzul;

  return (
    <footer className="text-gray-900 bg-white dark:bg-background-dark flex justify-center items-center h-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl">
        <div className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white  mb-4 md:mb-0">
          <span>
            <Link href="/">
              <Image src={logo} alt="logo" width={150} height={150}/>
            </Link>
          </span>
        </div>
        <div className="text-center text-gray-800 dark:text-white mb-4 md:mb-0">
          <span>© 2024 Code House. Design & Desenvolvimento de Software.</span>
        </div>
        <div className="flex text-gray-800 dark:text-white space-x-4 mb-4 md:mb-0">
          <span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </span>
          <span>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/codehousecv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
          {/* <span>
            <Link href="#">
              <FaTwitter />
            </Link>
          </span>
          <span>
            <Link href="#">
              <CiMail />
            </Link>
          </span> */}
        </div>
      </div>
    </footer>
  );
}
