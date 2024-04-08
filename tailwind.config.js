/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        brutal5px05opacity: '5px 5px rgba(0,0,0,0.5)',
        brutal5px02opacity: '5px 5px rgba(0,0,0,0.3)',
      },
      borderRadius: {
        'custom-shape-1': '63% 37% 25% 75% / 67% 11% 89% 32%',
        'custom-shape-2': '16% 84% 32% 68% / 29% 74% 26% 71%',
      },
    },
  },
  plugins: [],
}
