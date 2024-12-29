/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#11162E",
        btn_color: "#1677FF",
      },
      fontFamily: {
        tiltWarp: ["Tilt Warp", "serif"],
        nobile: ["Nobile", "serif"]
      },
    },
  },
  plugins: [],
}
