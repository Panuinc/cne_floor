/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#000000",
        default: "#D9D9D9",
        primary: "#FF4752",
      },
      fontFamily: {
        prompt: ["var(--prompt)"],
        league_Spartan: ["var(--league_Spartan)"],
        sans: ["Sarabun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
