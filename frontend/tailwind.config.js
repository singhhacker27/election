/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#FF9933',
          light: '#FFB366',
          dark: '#E67A00',
        },
        indiaGreen: {
          DEFAULT: '#138808',
          light: '#1AAB0B',
          dark: '#0D6105',
        },
        navyBlue: {
          DEFAULT: '#000080',
          light: '#0000A5',
          dark: '#00005C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
