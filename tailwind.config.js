/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'  ],
  theme: {
    extend: {
      colors: {
        'primary': '  #F1F6FF',
        'button': '#1A75BB',
        'fcolor' : '#36B729'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}