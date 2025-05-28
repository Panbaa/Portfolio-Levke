/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // First primary color with different shades
          50: '#69b7fc',
          100: '#0487fb',
          200: '#0472d3',
          300: '#035caa',
          400: '#024682',
          DEFAULT: '#023E73', // Your main primary color
          600: '#02315a',
          700: '#012646',
          800: '#011b32',
          900: '#01101e',
        },
        secondary: {
          50: '#5cb75c',
          100: '#419541',
          200: '#3b873b',
          300: '#357835',
          400: '#2f6a2f',
          DEFAULT: '#285B28',
          600: '#224e22',
          700: '#1c401c',
          800: '#163216',
          900: '#102310',
        },
        accent: {
          50: '#f9c381',
          100: '#f7b05a',
          200: '#f6a746',
          300: '#f59e33',
          400: '#f4951f',
          DEFAULT: '#F28B0C',
          600: '#e0800b',
          700: '#cc750a',
          800: '#b96a09',
          900: '#a55f08',
        },
        neutral: {
          50: '#fffdfd',
          100: '#fbfaf9',
          200: '#f3f0ed',
          300: '#eae6e1',
          400: '#e2dbd4',
          DEFAULT: '#D9D0C7',
          600: '#c1b3a4',
          700: '#b9a898',
          800: '#b19e8c',
          900: '#a8947f',
        },
      },
    },
  },
  plugins: [],
}

