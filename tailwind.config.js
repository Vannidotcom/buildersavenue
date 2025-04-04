/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'builders-yellow': '#FFD700',
        'builders-gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
};