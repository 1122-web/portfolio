module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        purpleHeart: "rgb(98, 34, 204)",
        textgray: "rgb(114, 109, 123)",
        grayHeart: "rgb(246, 244, 249)",
        safron: "rgb(251, 165, 4)",
        "black-100": "#4d4d4d",
        "black-200": "#3c3c3c",
        "black-300": " #1e1e1e",
        "black-400": "#111111",
        "black-500": "#000000",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        zoomOut: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRightToLeft: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        hoverSlideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        hoverzoomIn: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "1.2",
            transform: "scale(1.2)",
          },
        }, // <-- Correctly closed the hoverzoomIn keyframes object
      }, // <-- Correctly closed the keyframes object
      animation: {
        zoomIn: "zoomIn 2s both",
        hoverzoomIn: "hoverzoomIn 0.3s ease-out both",
        zoomOut: "zoomOut 1s both",
        fadeIn: "fadeIn 2s both",
        fadeOut: "fadeOut 1s both",
        slideUp: "slideUp 1s ease-out both",
        hoverSlideUp: "hoverSlideUp 0.3s ease-out both",
        slideRightToLeft: "slideRightToLeft 1s ease-out both",
      },
      screens: {
        xxsm: '375px',
        xxxsm: '320px',
        xsm:"425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    }, // <-- Correctly closed the extend object
  }, // <-- Correctly closed the theme object
  plugins: [],
}; // <-- Correctly closed the module.exports object
