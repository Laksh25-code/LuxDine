/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-deep': '#0F0F0F',
        'gold-warm': '#F5C542',
        'crimson': '#C62828',
        'cream-soft': '#FFF7E9',
        'slate-gray': '#6D6D6D',
        'olive': '#7A8E4D',
        // Keeping some existing for now, can refine later if needed
        'primary': '#1A1A1A', // Might overlap with charcoal-deep
        'secondary': '#F9F6F0', // Might overlap with cream-soft
        'accent': '#CAA86B', // This is close to gold-warm, will keep gold-warm as primary accent
        'highlight': '#B90E0A',
        'background': '#121212', // Will use charcoal-deep for primary background
        'surface': '#1F1F1F',
        'card': '#2C2C2C',
        'border': '#444444',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A9A9A9',
        'success': '#6A994E',
        'warning': '#E49B0F',
        'error': '#D32F2F',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Inter', 'sans-serif'], // Added Inter as a potential heading font
      }
    },
  },
  plugins: [],
}
