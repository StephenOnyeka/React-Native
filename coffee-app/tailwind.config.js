/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#805743",
        secondary: "#e6e6e6",
        contingentColor: "#CCAB95",
        contingentColor2: "#6e4b39",
        contingentText: "#553a2d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        image2: "/istockphoto-620952978-612x612.jpg",
      },
      fontFamily: {
        Playfair: ["Playfair", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "screen/1.2": "calc(100vh/1.2)",
        "screen/1.5": "calc(100vh/1.5)",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      width: {
        600: "600px",
        700: "700px",
        750: "750px",
        800: "800px",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 6px rgba(0, 0, 0, 0.16)", // Adjust values as needed
        "drop-shadow": "0px 4px 6px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
