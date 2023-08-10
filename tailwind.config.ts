import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-peach': '#E7816B',
        'clr-light-peach': '#FFAD9B',
        'clr-black': '#1D1C1E',
        'clr-dark-gray': '#333136',
        'clr-light-gray': '#F1F3F5',
        'clr-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
