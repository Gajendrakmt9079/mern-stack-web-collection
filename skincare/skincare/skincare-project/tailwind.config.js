/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F8E8E8',
          DEFAULT: '#F5C6C6',
          dark: '#E5A5A5',
        },
        secondary: {
          light: '#E8F8F5',
          DEFAULT: '#C6F5E5',
          dark: '#A5E5C6',
        },
        neutral: {
          lightest: '#FAFAFA',
          light: '#F0F0F0',
          DEFAULT: '#D9D9D9',
          dark: '#737373',
          darkest: '#262626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}