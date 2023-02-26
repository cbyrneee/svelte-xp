const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				'window-secondary': '#ECE9D8'
			},

			fontFamily: {
				'gothic-italic': ['Franklin Gothic Italic'],
				tahoma: ['Tahoma', 'Tahoma Fallback'],
				'trebuchet-ms': ['Trebuchet MS', 'Trebuchet Fallback']
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		})
	]
};
