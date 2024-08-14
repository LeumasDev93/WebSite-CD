"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="text-gray-900 bg-white dark:bg-background-dark flex justify-center items-center h-20">
      <div className="flex space-x-24">
        <div className="text-xl md:text-2xl font-bold text-teal-400">
          <span>
            <Link href="/">Code House</Link>
          </span>
        </div>
        <div className="text-gray-800 dark:text-white">
          <span>© 2024 Code House. Design & Desenvolvimento de Software.</span>
        </div>
        <div className="flex text-gray-800 dark:text-white space-x-4">
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
    </div>
  );
}
