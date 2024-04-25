/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          700: "#333333",
        },
        gray: {
          400: "#b0b0b0",
        },
      },
      screens: {
        xl: "1680px",
        lg: "1200px",
        md: "960px",
        sm: "500px",
      },
    },
  },
  plugins: [],
};
