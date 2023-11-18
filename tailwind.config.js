/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js, jsx}'],
  theme: {
    fontFamily: {
      Averta: ['Averta', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    }, 

    extend: {
      colors: {
        white: '#ffffff',     
        black: '#07142C',
        dark: '#121F3A',
        pink:'#F73CF2',
        cyan:'#46A2DE',
        yellow: '#F5D242',
        green: '#0eff8d',
        gray: '#ffffff12',
        blue: '#4B83F1',
        danger: '#E32A4F'
      },

      boxShadow: {
        'custom': '0 1px 15px #0000002b',
      }
    }
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  plugins: []
};