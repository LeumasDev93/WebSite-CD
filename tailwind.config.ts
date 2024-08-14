import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Adiciona suporte para o modo escuro
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(card|ripple).js',
  ],
  theme: {
    extend: {
      colors: {
        // Defina as cores para o modo escuro e claro
        background: {
          light: '#f3f4f6',
          dark: '#1a202c',
        },
        foreground: {
          light: '#000000',
          dark: '#ffffff',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
};

export default config;
