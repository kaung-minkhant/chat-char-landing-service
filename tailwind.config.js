/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mlg: '1170px',
        mmd: '850px',
      },
      borderRadius: {
        "4xl": "3rem",
      },
      padding: {
        "app-2xl": "13rem",
        "app-xl": "4rem",
        "app-lg": "4rem",
        'app-md': '2rem',
        'app-xm': '0.7rem',
      },
      margin: {
        app: "4rem",
      },
      colors: {
        background: "#080011",
        foreground: {
          DEFAULT: "#FFFFFF",
          100: "#E6E6E6",
          200: "#B9B9B9",
          300: "#A1A1A1",
        },
        action: "#7F00FF",
        glass: "#22222280",
        stroke: "#404040",
      },
      fontFamily: {
        walonereg: ["WaloneRegular", "sans-serif"],
        walonebold: ["WaloneBold", "sans-serif"],
        interreg: ["inter-regular", "sans-serif"],
        intermed: ["inter-medium", "sans-serif"],
        intersemi: ["inter-semibold", "sans-serif"],
        interbold: ["inter-bold", "sans-serif"],
        graphikmed: ["grafik-medium", "sans-serif"],
        graphikbold: ["grafik-bold", "sans-serif"],
      },
      backgroundImage: {
        "gradient-ellipse":
          "radial-gradient(ellipse 60% 70% at 50% 70%, rgba(127, 0, 255, 1) 0%, rgba(127, 0, 255, 1) 30%, rgba(255, 255, 255, 0) 100%);",
        "gradient-circle":
          "radial-gradient(circle at 50% -5%, rgba(127, 0, 255, 0.8) 0%,  rgba(8, 0, 17, 0) 60%);",
        "gradient-circle-mlg":
          "radial-gradient(circle at 50% -5%, rgba(127, 0, 255, 0.8) 0%,  rgba(8, 0, 17, 0) 45%);",
        "gradient-circle-sm":
          "radial-gradient(circle at 50% -5%, rgba(127, 0, 255, 0.8) 0%,  rgba(8, 0, 17, 0) 30%);",
        "gradient-footer":
          "linear-gradient(180deg, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0) 100%);",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
