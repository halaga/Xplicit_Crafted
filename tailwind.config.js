/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        matchaLight: '#E8F5E9',
        matchaDark: '#A5D6A7',
        xplicitYellow: '#FEC916',
        xplicitGreen: '#42A774'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
