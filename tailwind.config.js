/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
    },
    keyframes:{
     

    }
  },
  plugins: [],
}

