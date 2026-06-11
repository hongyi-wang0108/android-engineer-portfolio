/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#263238",
        muted: "#667085",
        cream: "#fffaf2",
        mint: "#d9f0e4",
        peach: "#ffd8c7",
        lemon: "#fff1b8",
        sky: "#d8ecff",
        rose: "#ffdce8",
        cocoa: "#7a5c4f"
      },
      boxShadow: {
        soft: "0 20px 55px rgba(74, 92, 106, 0.12)"
      }
    }
  },
  plugins: []
};
