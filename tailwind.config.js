/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC300",
        secondary: "#FFD60A",
        tertiary: "#001D3D",
        bgColor: "#003566",
        fontColor: "#CFCFCF",
      },
    },
    plugins: [],
  },
};
