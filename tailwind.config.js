/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'brand':['Rajdhani', 'sans-serif']
    },
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      animation:{
        
      }
    },
    screens:{
      xxs:"320px",
      xs: "400px",
      sm:'640px',
      lg:'1024px',
      md:'768px',
      xl:'1280px',
      '2xl':'1536px',
      '3xl':'1700px',
    },
    keyframes:{
     

    }
  },
  plugins: [],
}

