import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "storage-bar-gradient":
          "linear-gradient(180deg, rgba(214, 236, 253, 0) 0%, #D6ECFD 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
