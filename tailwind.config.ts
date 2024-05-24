import type { Config } from "tailwindcss";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "cb-dark-blue": "hsl(240, 38%, 20%)",
        "cb-grayish-blue": "hsl(240, 18%, 77%)",
      },
      fontSize: {
        body: "32px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "300",
        semibold: "500",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        "footer-curve": `url('${basePath}/images/pattern-curve.svg')`,
        "pattern-bg": `url('${basePath}/images/pattern-bg.svg')`,
        "quotes-bg": `url('${basePath}/images/pattern-quotes.svg')`,
      },
    },
  },
  plugins: [],
};
export default config;
