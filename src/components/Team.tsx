"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { serviceTeam } from "@/data/teamService";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Github from "next-auth/providers/github";
import { FaSquareGithub } from "react-icons/fa6";

export function Team() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="team"
      className={`${
        theme === "dark" ? "bg-background-dark" : "bg-gray-100"
      } transition-colors duration-300 py-20`}
    >
      <div className="shadow mx-auto text-center p-10">
        <h2 className="text-blue-900 font-bold text-2xl mb-10">
          CONHEÇA NOSSA EQUIPA
        </h2>
        <div className="grid grid-cols-1 md:flex md:items-center md:justify-center md:space-x-6">
          {serviceTeam.map((member, index) => (
            <div
              key={index}
              className="w-80 md:w-60 h-80 rounded-lg bg-white dark:bg-gray-700 shadow md:shadow-md mb-5 md:mb-0 transition-transform duration-300 transform hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-700 flex flex-col items-center relative"
            >
              <div className="w-full h-60 relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h3 className="text-lg text-gray-800 dark:text-white font-semibold">
                {member.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-white">{member.role}</p>
              <div className="flex text-gray-800 dark:text-white space-x-2 mb-2">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <FaSquareGithub size={20} />
                </a>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
