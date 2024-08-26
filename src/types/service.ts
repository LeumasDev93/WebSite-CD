import { StaticImageData } from "next/image";

// types.ts
export interface ServiceType {
  id: string;                 // Identificador único do serviço
  title: string;              // Título do serviço
  description: string;        // Descrição breve do serviço
  details: string;            // Detalhes adicionais do serviço
  image: StaticImageData; 
  imageBanner: StaticImageData;      // Objeto de imagem importado, representando uma imagem estática
  icon: JSX.Element;          // Componente JSX do ícone que representa o serviço
}
