/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#325CE8", // It represents the main brand color and is used for key elements like buttons, links, headers, and highlights.
        secondary: "#FF7CB0", // It’s used for secondary actions, accents, and elements that need to stand out without overshadowing the primary elements.
        tertiary: "#FFD700", // It provides additional accent and can be used for backgrounds, borders, or subtle highlights.
        deceiver: "#4E598C", // This specific color can be used for elements that need to draw attention but in a more subdued way compared to primary or secondary colors. It could be used for headers, links, or important information.
        white: "#ffffff",
        grey: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
