import { ThemeProvider } from "@/context/ThemeContext";
import { BackToTopButton } from "@/components/BackToTopButton";
import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { AboutTwo } from "@/components/AboutTwo";
import { Contact } from "@/components/Contact";

export default function About() {
  return (
    <ThemeProvider>
      <main className="flex max-h-max flex-col bg-white">
        <Header />
        <Banner />
        <AboutTwo />
        <Contact />
        <Footer />
        <BackToTopButton />
      </main>
    </ThemeProvider>
  );
}
