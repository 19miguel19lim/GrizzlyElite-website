/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#B21B20",
        orange: "#F7941D",
        orangeDark: "#EE3524",
        orangeLight: "#F47B20",
        deepJungleGreen: "#004047",
        sacramentoGreen: "#012f34",
        darkGreen: "#002529",
        white: "#ffffff",
      },
      backgroundImage: (theme) => ({
        mission: "url(../public/assets/bottom-img1.png)",
      }),
    },
  },
  plugins: [],
};
