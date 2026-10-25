/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f3',
          100: '#dceee3',
          200: '#bbdcc8',
          300: '#8ec2a6',
          400: '#5da280',
          500: '#398460',
          600: '#28694b',
          700: '#20543c',
          800: '#1c4432',
          900: '#17382a',
          950: '#0b1f17',
        },
        cream: {
          50: '#fbfaf7',
          100: '#f7f4ed',
          200: '#efe9dc',
          300: '#e3d8c2',
          400: '#d3c2a3',
          500: '#c2ab85',
        },
        mustard: {
          50: '#fdfbe8',
          100: '#fbf5c3',
          200: '#f7ea89',
          300: '#f2d847',
          400: '#e7c01a',
          500: '#d1a40f',
          600: '#b4800b',
          700: '#8f5c0c',
          800: '#754811',
          900: '#643d13',
          950: '#3a2007',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
