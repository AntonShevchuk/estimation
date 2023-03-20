/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--r-main-color)',
        secondary: 'var(--r-link-color)',
      }
    },
  },
  plugins: [],
	important: true,
}
