/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
	container: {
		center: true,
	},
    extend: {
		fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		  },
	},
  },
  plugins: [
	require('flowbite/plugin')
  ],
}

