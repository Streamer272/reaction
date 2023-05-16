/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        page: "100vw",
      },
      height: {
        page: "100vh",
      },
    },
  },
  plugins: [],
};
