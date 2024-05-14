/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        pblack : ['Poppins-Black', 'sans-serif'],
        pbold : ['Poppins-Bold', 'sans-serif'],
        pexbold : ['Poppins-ExtraBold', 'sans-serif'],
        pexlight : ['Poppins-ExtraLight', 'sans-serif'],
        plight : ['Poppins-Light', 'sans-serif'],
        pmedium : ['Poppins-Medium', 'sans-serif'],
        pregular : ['Poppins-Regular', 'sans-serif'],
        psemibold : ['Poppins-SemiBold', 'sans-serif'],
        hbold : ['HindSiliguri-Bold', 'sans-serif'],
        hlight : ['HindSiliguri-Light', 'sans-serif'],
        hmedium : ['HindSiliguri-Medium', 'sans-serif'],
        hregular : ['HindSiliguri-Regular', 'sans-serif'],
        hsemibold : ['HindSiliguri-SemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

