module.exports = {
  purge: [".public/index.html", "./src/**/*.{hbs,js}"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
