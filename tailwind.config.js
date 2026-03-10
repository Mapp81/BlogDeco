/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#d5e3e1',
        slate: '#4f535b',
        steel: '#7f868b',
        cloud: '#f3f4f6',
        sky: '#3498e0'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
