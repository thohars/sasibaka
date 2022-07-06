module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: ["motion-safe"],
      colors: {
        primary: "#621631",
        secondary: "#f79ec4",
        tertiary: "#813f56",
        white: "#fedbe7",
        yellow: "#ecec88"
      },
    },
  }
}
