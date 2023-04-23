/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '  #F1F6FF',
        'button': '#1A75BB'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}