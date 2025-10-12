/** @type {import('tailwindcss').Config} */
module.exports = {
  // se debe cambiar la ubicacion del contenido del proyecto en este caso./app/**/*.{js,ts,tsx}'  como estaba default "./App.tsx"
  content: ['./app/**/*.{js,ts,tsx}',"/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

