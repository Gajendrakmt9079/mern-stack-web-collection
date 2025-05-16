export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#2C3E50',
        primary: {
          DEFAULT: '#3498DB',
          dark: '#2980B9',  // This makes it accessible as both bg-primary-dark and hover:bg-primary-dark
        },
        success: '#2ECC71',
        warning: '#F1C40F',
        danger: '#E74C3C',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}