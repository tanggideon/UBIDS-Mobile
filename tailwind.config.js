/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins-Regular", "sans-serif"],
        "PoppinsBold": ["Poppins-Bold", "sans-serif"],
        "PoppinsMedium": ["Poppins-Medium", "sans-serif"],
        "PoppinsExtraBold": ["Poppins-ExtraBold", "sans-serif"],
        "PoppinsSemiBold": ["Poppins-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

