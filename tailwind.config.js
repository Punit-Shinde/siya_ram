/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD60A",
        secondary: "#FFD60A",
        tertiary: "#001D3D",
        bgColor: "#003566",
        fontColor: "#CFCFCF",
      },
    },
    plugins: [],
  },
};
