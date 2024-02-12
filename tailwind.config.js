/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        xss: '400px',
      },
      colors: {
        primary: "#C89963",
        secondary: "#FFECD6",
        headline: "#2C4364",
        paragraph: "#939393",
        light: '#F1F1F1',
        gray: '#838FA0',
        border: '#EAECF0'
      },
      fontFamily: {
        manrope:["Manrope", 'sans-serif'],
        NunitoSans: ['Nunito Sans', 'sans-serif'],
        fjalla_one: ['Fjalla One', 'sans-serif'],
        libre_baskerville: ['Libre Baskerville', 'sans-serif'],
        metrophobic: ['Metrophobic', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        advent_pro: ['Advent Pro', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
        electrolize: ['Electrolize', 'sans-serif'],
        kalam: ['Kalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// table border ( root table table rounded)---
// assign modal botton aligen
// consultaion=> pagination not 
// knowlage scroll hide
// details knowlagebase3d
// switch rounded
// profile details-> advice user
// home -bottom align calender and map
// chat view+header
// side bar change data

