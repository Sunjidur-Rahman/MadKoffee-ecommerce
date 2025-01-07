/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-yellow-orrange': 'radial-gradient(circle, rgba(255,202,67,1) 0%, rgba(251,183,80,1) 100%)',
        //background: radial-gradient(circle, rgba(255,202,67,1) 0%, rgba(251,183,80,1) 100%);

      },
      boxShadow: {
        'custom': '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    
    themeRoot: false, // The element that receives theme color CSS variables
  },
}

