import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#3F8CFF",
          light: "#e8f1ff",
          hover: "#3A81EB",
          dark: "#1F6DE0",
        },
        gray: {
          DEFAULT: "#CED5E0",
          dark: "#7D8592",
          disabled: "#CED5E0",
        },
        red: {
          DEFAULT: "#F65160",
        },
        dark: {
          DEFAULT: "#0A1629",
        },
      },
      transformOrigin: {
        "0": "0%",
        "100": "100%",
      },
    },
  },
  plugins: [],
};
export default config;
