/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: "cupcake",
    darkMode: true,
    themes: ["dark"],
  },
  safelist: [
    "border-t-warning",
    "border-t-error",
    "border-t-success",
    "border-t-info",
  ],
};
