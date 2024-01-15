import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Petit: ["var(--font-PetitCochon)"],
      },
      colors: {
        black: "#1c1c1c",
      },
    },
  },
  plugins: [],
};
export default config;
