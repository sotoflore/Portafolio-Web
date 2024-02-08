/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': 'linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );'
      },
      background: {
        'custom-background': 'rgba(255,255,255,0.45)',
      },
    },
  },
  plugins: [
        require('flowbite/plugin')
  ]
}

