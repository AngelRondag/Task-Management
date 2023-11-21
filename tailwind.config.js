/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      boxShadow:{
        'custom-shadow': '-10px 10px 24px -3px rgba(0,0,0,0.1)'
        
      },
      colors: {
        'primary':'#5F33E1',
        'secondary': '#24252C',
        'custom-blue': '#EDE8FF'
      

      },
    },
  },
  plugins: [],
}

