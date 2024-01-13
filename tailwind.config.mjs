/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: "#237893",
			secondary: "#37B8E9",
		  },
		  fontFamily: {
			Kanit: ["Kanit", "sans-serif"],
		  },
		},
	  },
	plugins: [],
}
