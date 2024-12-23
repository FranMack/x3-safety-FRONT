import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#b3c62d",
        backgroundColor:"#f6fafb",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens:{
      xs:"320px",
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    
  },

  plugins: [],
};
export default config;
