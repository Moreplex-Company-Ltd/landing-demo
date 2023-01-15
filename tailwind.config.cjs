/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#000c7c",
        secondaryBlue: "#00234d",
        primaryGold: " #f98f09",
      },
    },
  },
  plugins: [],
};
