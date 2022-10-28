/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apricot: "#F9C9B6",
        coast: "#AC6651",
        topaz: "#77311D",
        lavender: "#9287FF",
        sky: "#6BD9E9",
        salmon: "#FC909F",
        canary: "#F4D150",
        calm: "#E0DDFF",
        azure: "#D2EFF3",
        seashell: "#FFEDEF",
        mellow: "#FFEBA4",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
