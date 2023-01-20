/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
      mosquera: {
          "primary": "#056f87", 
          "secondary": "#2cba9b",
          "accent": "#00feeb",
          "neutral": "#221F2D",
          "base-100": "#363959",
          "info": "#46A0C3",
          "success": "#12A178",
          "warning": "#D4B208", 
          "error": "#F45F48",        
        },
      },
    ],
  },
  theme: {
    extend: {
      colors:{
        
      }
    },
  },
  plugins: [require("daisyui")],
}
