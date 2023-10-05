/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./ls/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont_head: ["Montserrat", "sans-seri"],
        rubik_body: ["Rubik", "sans-seri"]
      }
    },
  },
  plugins: [],
}

