/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
      'custom-bg': "url('/cool-background.png')",
      'pokemon1-bg': "url('/poke-card-bg-1.png')",
      'pokemon2-bg': "url('/poke-card-bg-2.png')",
   
    },},
  },
  plugins: [],
}

