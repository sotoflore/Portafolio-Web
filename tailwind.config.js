/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "'node_modules/flowbite-react/lib/esm/**/*.js'"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': 'linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );'
      },
      background: {
        'custom-background': 'rgba(255,255,255,0.45)',
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }
    },
  },
  plugins: [
        require('flowbite/plugin')
  ]
}

