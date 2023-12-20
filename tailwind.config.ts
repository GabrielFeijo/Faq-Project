import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'main-image': "url('/background-pattern.svg')",
			},
			backgroundColor: {
				'primary-color': '#F9EEFF',
			},
			colors: {
				'primary-color': '#2D1531',
				'secondary-color': '#AC29E7',
				answer: '#A6A3A7',
			},
		},
	},
	plugins: [],
};
export default config;
