/** @type {import('tailwindcss').Config} */

// tailwind.config.js
// const { fontFamily } = require('tailwindcss/defaultTheme')

// const defaultTheme = require("tailwindcss/defaultTheme")
// sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],

// sans: ["var(--font-inter)", ...fontFamily.sans],
//         mono: ["var(--font-roboto-mono)", ...fontFamily.mono],

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: false,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen 2xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
