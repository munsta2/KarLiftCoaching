/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kar-blue": "#0066ff",
        "kar-white": "#f1f5f9",
        "kar-light-grey": "#d1d5db",
      },
      screens: {
        phone: "400px",
      },
    },
  },
  plugins: [],
};
