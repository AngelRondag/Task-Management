/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '-10px 10px 24px -3px rgba(0,0,0,0.1)'
      },
      colors: {
        'cust-primary' : '#5F33E1',
        'cust-secondary': '#24252C',
        'cust-intermediate': '#6E6A7C',
        'custom-blue': '#EDE8FF',
        'customPurple-100': '#cabbf5fb',
        'customPurpleSecondary': '#AB94FF'
      },
      backgroundImage: {
        'blueGradient': 'linear-gradient(180deg, rgba(228,220,255,1) 49%, rgba(255,255,255,1) 100%)'
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  plugins: [

  ],
}

