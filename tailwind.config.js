/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      borderWidth: ["responsive", "hover"],
    },
  },
};
