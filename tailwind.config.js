/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        misterpixel: ['misterpixel', 'serif'],

      },
      colors: {
        'text-primary': "#000000" //"#FFFFFF" add this when we don't have a white background
      }
    },
  },
  plugins: [],
};
