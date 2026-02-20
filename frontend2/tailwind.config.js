/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        darkbg: '#050816',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,58,237,0.6)',
      },
    },
  },
  plugins: [],
};
