/** @type {import('tailwindcss').Config} */
import themes from 'daisyui/src/theming/themes';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Passion One', ...defaultTheme.fontFamily.sans],
				body: ['Source Sans Pro', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					...themes.fantasy,
					primary: '#2048D4',
					secondary: '#ED721A'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
