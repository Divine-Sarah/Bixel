/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'appblue': '#27187E',
        'appText': '#333333',
        'appWhite' : '#FFFFFF',
        'appOrange' : '#FF8600',
        'appGray' : '#EBEAF6',
        'appBlack': '#05030F',
        'appPurple' : '#F1F2F6',
        'appPurple-100' : '#758BFD',
        'textGray' : '#D9D9D9'
    },
    extend: {
      fontFamily: {
        inter: "Inter",
        anton: "Anton"
      }
    },
  },
  plugins: [],
}

