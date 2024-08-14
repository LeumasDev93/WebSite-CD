"use client";

import { useState, useEffect, useRef } from "react";

export function BackToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setIsActive(window.scrollY > 50);
  };

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      ref={scrollRef}
      className={`fixed bottom-4 right-4 p-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
      onClick={handleProgressClick}
      aria-label="Voltar ao início"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 15l-7-7-7 7"
        />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="#00897b"
          strokeWidth="4"
          fill="none"
          style={{
            strokeDasharray: "300px",
            strokeDashoffset: `${300 - scrollProgress * 3}px`,
          }}
        />
      </svg>
    </button>
  );
}
