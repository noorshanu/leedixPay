/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "open-sans": "'Open Sans', sans-serif",
      sohaReg: "soha-reg",
      sohaMed: "soha-med",
      sohaBold: "soha-bold",
      sohaThin: "soha-thin",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      body: "#fff",
      text: "#000",
     
      green: "#0072ff",
      // green: "#1ef93b",
      "active-blue": "rgba(84,119,255,.61)",
    },
    extend: {
      spacing: {
        "navbar-height": "var(--navbar-height)",
      },
    },
  },
  plugins: [],
};
