/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c3764", // Puedes cambiar este color por el que prefieras
      },
      container: {
        center: true,
        padding: "8px",
        screens: {
          xl: "1300px",
        },
      },
    },
  },
  plugins: [],
};
