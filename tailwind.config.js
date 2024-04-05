/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        brutal5px05opacity: '5px 5px rgba(0,0,0,0.5)',
        brutal5px02opacity: '5px 5px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
