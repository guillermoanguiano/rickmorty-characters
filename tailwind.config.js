export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 1.5s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translateY(-25%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
