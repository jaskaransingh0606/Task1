/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      height: {
        '72': '72px',
        '513': '513px',
      },
      width: {
        '692': '692px',
        '600': '600px',
        '175': '175px',
        '472': '472px',
        '736': '736px',
        '2000': '2000px',
        '1600': '1600px',
        '1279': '1279px',
        '1023': '1023px',
        '767': '767px',
        '639': '639px',
        '425': '425px',
        '800': '800px',
      },
      textColor: {
        'green':'#008A45'
      },
      backgroundColor: {
        'greenBg':'#EFFFF4',
        'popupBg':' rgba(0, 0, 0, 0.8)',
        'btColor':'#EDEEF0'
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'ft':{'max':'900px'},

        'kt':{'max':'800px'},
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },

  },
  plugins: [],
}

