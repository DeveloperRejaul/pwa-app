/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        xss: '400px',
      },
      colors: {},
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
    }
  },
  plugins: [],
}

