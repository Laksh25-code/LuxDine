/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1A',
        'secondary': '#F9F6F0',
        'accent': '#CAA86B',
        'highlight': '#B90E0A',
        'background': '#121212',
        'surface': '#1F1F1F',
        'card': '#2C2C2C',
        'border': '#444444',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A9A9A9',
        'success': '#6A994E',
        'warning': '#E49B0F',
        'error': '#D32F2F',
      }
    },
  },
  plugins: [],
}
