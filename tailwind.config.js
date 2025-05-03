/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-out": "fadeOut 0.3s ease-in forwards",
        "fade-in-opacity": "fadeInOpacity 0.5s ease-out forwards",
        "fade-out-opacity": "fadeOutOpacity 0.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(10px)" },
        },
        fadeInOpacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOutOpacity: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      fontFamily: {
        manrope: ['"Manrope Variable"', "sans-serif"],
      },
      colors: {
        brand: {
          primary: {
            darkest: "#B73A2E",
            dark: "#EF6948",
            medium: "#FFC9B2",
            light: "#EFE7DB",
            lightest: "#F9F8F7",
          },
          secondary: {
            darkest: "#353D29",
            dark: "#374C52",
            medium: "#CEC3B5",
            light: "#C8EAEA",
            lightest: "#FFF699",
          },
        },
        neutral: {
          dark: "#3D3D3D",
          semidark: "#767676",
          medium: "#C2C2C2",
          semilight: "#D6D6D6",
          light: "#E8E8E8",
          ultralight: "#F7F7F7",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
