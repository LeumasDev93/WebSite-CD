import { ThemeProvider } from "@/context/ThemeContext";
import { About } from "@/components/About";
import { BackToTopButton } from "@/components/BackToTopButton";
import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Service } from "@/components/Service";
import Image from "next/image";
import { Contact } from "@/components/Contact";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex max-h-max flex-col bg-white">
        <Header />
        <Banner />
        <About />
        <Service />
        <Team />
        <Contact />
        <Footer />
        <BackToTopButton />
      </main>
    </ThemeProvider>
  );
}
