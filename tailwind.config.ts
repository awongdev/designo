import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        leaf: "url('/assets/shared/desktop/bg-pattern-leaf.svg')",
      },
      screens: {
        xs: "475px",
      },
      colors: {
        "clr-peach": "#E7816B",
        "clr-light-peach": "#FFAD9B",
        "clr-bg-peach": "#FDF3F0",
        "clr-black": "#1D1C1E",
        "clr-dark-gray": "#333136",
        "clr-light-gray": "#F1F3F5",
        "clr-white": "#FFFFFF",
      },
      letterSpacing: {
        "2px": "0.125rem",
      },
      maxWidth: {
        "1110": "69.375rem",
      },
      fontSize: {
        "15px": "0.9375rem",
      },
    },
  },
  plugins: [],
};
export default config;
