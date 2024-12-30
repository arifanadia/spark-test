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
        nobile: ["Nobile", "serif"],
      },
      transformOrigin: {
        center: 'center',
      },

      rotate: {
        'y': 'rotateY(360deg)',
      },
      translate: {
        'z-450': 'translateZ(450px)',
      },
      // Animation classes
      animation: {
        rotate: "animate 5s linear infinite",
      },
    },
  },
  plugins: [],
};
