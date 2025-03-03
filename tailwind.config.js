/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/background.png')",
      },
      fontSize: {
        navSize: '21px',
      },
      fontFamily: {
        'arial': ["Arial"],
      },
      spacing: {
        '43': '43px',
      }
    },
  },
  plugins: [],
}

