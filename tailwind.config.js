/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-slate-gray": ["hsl(234, 29%, 20%)"],
        "white": ["hsl(0, 0%, 100%)"],
        "charcoal-gray": ["hsl(235, 18%, 26%)"],
        "gray": ["hsl(231, 7%, 60%)"],
        "tomato": ["hsl(4, 100%, 67%)"]
      },
      fontFamily: {
        roboto: ["roboto"],
        "roboto-bold": ["roboto-bold"]
      }
    },
  },
  plugins: [],
}

