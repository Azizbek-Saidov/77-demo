/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      black: '#16191D',
      colors: {
        'black-custom': '#16191D',
        'btn-color': '#EAEDF0',
        'secondary-text': '#8E9297',
        'greys-grey-4': '#EAEDF0',
        'main-blue': '#388FF3'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-shadow': '0px 4px 15px 0px rgba(56, 143, 243, 0.12)', // O'zingizning hover shadow
      },
    },
  },
}

