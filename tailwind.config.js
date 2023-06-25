/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      "colors": {
        "saltireblue": {
          50: "#F5FAFF",
          100: "#EBF5FF",
          200: "#D1E8FF",
          300: "#B3D9FF",
          400: "#94C9FF",
          500: "#70B8FF",
          600: "#42A1FF",
          700: "#0582FF",
          800: "#005EB9",
          900: "#00458A",
          950: "#003061"
        }
      }
    },
  },
  plugins: [],
}

