/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stores/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        "3xl": "2560px",
      },
      containers: {},
      colors: {
        "base-gray": "#EFEFEF",
        "dark-orange": "#4f2a28",
        "orange-base": "#FF8717",
        "gray-border": "#DEDEDE",
      },
      keyframes: {
        "slide-from-top": {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-from-bottom": {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-from-left": {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-from-right": {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-bottom-left": {
          "0%": { transform: "translateY(1000px) translateX(-1000px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(1000px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(200px)" },
          "100%": { transform: "translateX(0)" },
        },
        "focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        "scale-up-bottom": {
          "0%": { transform: "scale(1)", "transform-origin": "50% 100%" },
          "100%": { transform: "scale(1.3)", "transform-origin": "50% 100%" },
        },
        "scale-up-bottom-reverse": {
          "0%": { transform: "scale(1.3)", "transform-origin": "50% 100%" },
          "100%": { transform: "scale(1)", "transform-origin": "50% 100%" },
        },
        "move-to-right-to-back": {
          "0%": { transform: "translate(0px, 64px)", "z-index": "30" },
          "10%": { transform: "translate(-50px, 80px)", "z-index": "30" },
          "60%": { transform: "translate(55%, 32px)", "z-index": "20" },
          "100%": { transform: "translate(64px, 0px)", "z-index": "20" },
        },
        "move-to-left-to-front": {
          "0%": { transform: "translate(64px, 0px)", "z-index": "20" },
          "10%": { transform: "translate(80px, -50px)", "z-index": "20" },
          "60%": { transform: "translate(-55%, 32px)", "z-index": "20" },
          "100%": { transform: "translate(0px, 64px)", "z-index": "30" },
        },
      },
      animation: {
        // name duration timing-function delay iteration-count direction fill-mode play-state
        // "slide-from-top": {
        //   "animation-name": "slide-from-top",
        //   "animation-duration": "3s",
        //   "animation-timing-function": "ease-in-out",
        //   "animation-delay": "0s",
        //   "animation-fill-mode": "both",
        //   "animation-direction": "normal",
        // },
        "slide-from-top":
          "slide-from-top 3s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.5s both normal",
        "slide-from-bottom":
          "slide-from-bottom 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 1s both normal",
        "slide-from-left":
          "slide-from-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s both normal",
        "slide-from-right":
          "slide-from-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s both normal",
        "slide-in-bottom-left":
          "slide-in-bottom-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-bottom":
          "slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-right":
          "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "image-focus-in":
          "focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0s both",
        "scale-up-bottom":
          "scale-up-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "scale-up-bottom-reverse":
          "scale-up-bottom-reverse 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "move-to-right-to-back": "move-to-right-to-back 2s ease-in-out 0s both",
        "move-to-left-to-front": "move-to-left-to-front 2s ease-in-out 0s both",
      },
      gridTemplateRows: {
        tab: "1fr 2px",
      },
      lineClamp: {
        10: "10",
        12: "12",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
};
