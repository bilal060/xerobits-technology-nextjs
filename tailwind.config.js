/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#077151",
        darkBg: "#0F0E19",
        dark: "#212121",
        lightGray: "#B7B7B7",
        blue: "#387DF5",
        purple: "#8A9CEC",
        lightBlue: "#E8F0FF",
        darkGray: "#3F3434",
      },
      fontFamily: {
        tripsans: ["Trip Sans", "sans-serif"],
        gothamPro: ["Gotham Pro", "sans-serif"],
      },
      screens: {
        xs: "500px",
        // => @media (min-width: 500px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1240px",
        // => @media (min-width: 1240px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1980px",
        // => @media (min-width: 1980px) { ... }
      },
      backgroundImage: {
        blackCurrve: "url('/black-curve.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
