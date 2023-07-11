/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'quote': ['"Nova Oval"', 'sans-serif']
      },
      "colors": {
        "saltireblue": {
          50: "#E0F0FF",
          100: "#BDDFFF",
          200: "#7ABFFF",
          300: "#3DA1FF",
          400: "#0081FA",
          500: "#005EB8",
          600: "#004C94",
          700: "#003A70",
          800: "#002547",
          900: "#001224",
          950: "#000B14"
        }
      }
    },
  },
  plugins: [],
}

