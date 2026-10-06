import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#111111",
        secondary: "#6F6F6F",
        muted: "#9A9A9A",
        border: "#E5E5E5",
        dark: {
          surface: "#151515",
          secondary: "#222222",
        },
        status: {
          green: "#22C55E",
        },
      },
    },
  },
  plugins: [],
};

export default config;