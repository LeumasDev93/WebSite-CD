
import SoftwareImage from "@/assets/images/software.jpg";
import WebsiteImage from "@/assets/images/website.jpg";
import MobileAppImage from "@/assets/images/mobile-app.jpg";
import MaintenanceImage from "@/assets/images/maintenance.jpg";
import IntegrationImage from "@/assets/images/integration.jpg";
import AutomationImage from "@/assets/images/automation.jpg";
import SecurityImage from "@/assets/images/security.jpg";
import EcommerceImage from "@/assets/images/ecommerce.jpg";

import BannerSecurity from "@/assets/images/banner-security.jpg";
import BannerSoftwary from "@/assets/images/software-banner.jpg";
import BannerWebSites from "@/assets/images/website-banner.jpg";
import BannerMobile from "@/assets/images/mobile-banner.jpg";
import BannerMaintenance from "@/assets/images/maintenance-banner.jpg";
import BannerIntegratiom from "@/assets/images/integratio-banner.jpg";
import BannerAutomation from "@/assets/images/automation-banner.jpg";
import BannerEcommerce from "@/assets/images/ecomerce-banner.jpg";

import { GrCloudSoftware } from "react-icons/gr";
import {
  MdDeveloperMode,
  MdOutlineNetworkLocked,
  MdOutlineWeb,
} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCodeCompare } from "react-icons/fa6";
import { GiProcessor } from "react-icons/gi";
import { RiCreativeCommonsNcFill } from "react-icons/ri";


export const services =[
  {
    id: "1",
    icon: <GrCloudSoftware className="text-blue-900 size-8" />,
    image: SoftwareImage,
    imageBanner: BannerSoftwary,
    title: "Desenvolvimento de Software Sob Medida",
    description:
      "Transformamos as suas ideias em realidade com soluções de software personalizadas, criadas especificamente para atender às necessidades exclusivas do seu negócio.",
    details:
      "Nossas soluções de software são desenvolvidas utilizando as mais recentes tecnologias do mercado, como React, Node.js, e bancos de dados escaláveis. Acreditamos na importância de entender profundamente o seu negócio para criar soluções que não apenas resolvam problemas imediatos, mas que também preparem sua empresa para o futuro.",
  },
  {
    id: "2",
    icon: <MdOutlineWeb className="text-blue-900 size-8" />,
    image: WebsiteImage,
    imageBanner: BannerWebSites,
    title: "Desenvolvimento de Websites",
    description:
      "Criamos uma presença online impactante com websites modernos, responsivos e otimizados para oferecer a melhor experiência aos seus clientes.",
    details:
      "Os websites que desenvolvemos são completamente responsivos e otimizados para SEO. Trabalhamos com uma equipe de designers especializados que garantem que cada site seja único e alinhado com a identidade visual da sua marca.",
  },
  {
    id: "3",
    icon: <MdDeveloperMode className="text-blue-900 size-8" />,
    image: MobileAppImage,
    imageBanner: BannerMobile,
    title: "Desenvolvimento de Aplicativos Móveis",
    description:
      "Levamos seu negócio ao alcance de todos com aplicativos móveis intuitivos e funcionais, projetados para oferecer uma experiência do utilizador excepcional em todas as plataformas.",
    details:
      "Nossos aplicativos móveis são projetados para iOS e Android, garantindo uma experiência de usuário impecável em ambas as plataformas. Utilizamos frameworks como React Native para maximizar a eficiência e a consistência entre diferentes dispositivos.",
  },
  {
    id: "4",
    icon: <IoSettingsOutline className="text-blue-900 size-8" />,
    image: MaintenanceImage,
    imageBanner: BannerMaintenance,
    title: "Manutenção e Suporte Técnico",
    description:
      "Garantimos a continuidade do seu negócio com serviços de manutenção e suporte técnico, que mantêm seus sistemas sempre atualizados e funcionando sem interrupções.",
    details:
      "Nosso serviço de suporte técnico é composto por uma equipe experiente e dedicada, disponível 24/7 para garantir que sua operação nunca pare. Oferecemos pacotes de manutenção preventiva e corretiva para todos os tipos de sistemas.",
  },
  {
    id: "5",
    icon: <FaCodeCompare className="text-blue-900 size-8" />,
    image: IntegrationImage,
    imageBanner: BannerIntegratiom,
    title: "Integração de Sistemas",
    description:
      "Unifique suas operações com soluções de integração que conectam diferentes sistemas e plataformas, permitindo uma gestão mais eficiente e centralizada.",
    details:
      "A integração de sistemas é fundamental para garantir que as informações fluam livremente entre diferentes departamentos e aplicações dentro da sua empresa. Nossas soluções de integração permitem uma visão unificada do seu negócio, simplificando a gestão e a tomada de decisões.",
  },
  {
    id: "6",
    icon: <GiProcessor className="text-blue-900 size-8" />,
    image: AutomationImage,
    imageBanner: BannerAutomation,
    title: "Automação de Processos",
    description:
      "Aumente a eficiência do seu negócio automatizando processos repetitivos com soluções tecnológicas que reduzem custos e aumentam a produtividade.",
    details:
      "Automatizamos processos utilizando tecnologias como RPA (Robotic Process Automation) e integração de APIs, permitindo que sua equipe se concentre em tarefas de maior valor agregado enquanto as atividades repetitivas são realizadas automaticamente.",
  },
  {
    id: "7",
    icon: <MdOutlineNetworkLocked className="text-blue-900 size-8" />,
    image: SecurityImage,
    imageBanner: BannerSecurity,
    title: "Segurança da Informação",
    description:
      "Protegemos seus dados e sistemas com soluções avançadas de segurança cibernética, garantindo a integridade e confidencialidade das informações críticas da sua empresa.",
    details:
      "Oferecemos soluções de segurança cibernética que incluem a implementação de firewalls, criptografia de dados, monitoramento de rede e políticas de segurança personalizadas, assegurando que os dados da sua empresa estejam sempre protegidos contra ameaças.",
  },
  {
    id: "8",
    icon: <RiCreativeCommonsNcFill className="text-blue-900 size-8" />,
    image: EcommerceImage,
    imageBanner: BannerEcommerce,
    title: "Desenvolvimento de E-commerce",
    description:
      "Venda online com confiança através de plataformas de e-commerce seguras, personalizadas e otimizadas para converter visitantes em clientes fiéis.",
    details:
      "Desenvolvemos plataformas de e-commerce que são seguras, escaláveis e fáceis de gerenciar. Nossos sistemas de e-commerce são integrados com métodos de pagamento modernos e ferramentas de marketing digital para maximizar suas vendas online.",
  },
];