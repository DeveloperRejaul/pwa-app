/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        xss: '400px',
      },
      fontFamily: {
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
    colors:{
      primary:"#C89963",
      secondary:"#FFECD6",
      headline:"#2C4364",
      paragraph:"#939393",
      white:"#fff",
      black:"#000"
    }

  },
  plugins: [],
}

