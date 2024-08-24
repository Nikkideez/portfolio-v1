/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#0C0C0C",
        primary: "#09142f",
        secondary: "#C3BABA",
        tertiary: "#E9E3E6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-ish": '#faf5ff',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontSize: {
        sm: 'var(--fz-sm)',
        md: 'var(--fz-md)',
      },
      animation: {
        loaderflip: 'loaderflip 2s infinite',
      },
      keyframes: {
        loaderflip: {
          '0%': { transform: 'rotateX(0)' },
          '80%, 100%': { transform: 'rotateX(360deg)' },
        },
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};