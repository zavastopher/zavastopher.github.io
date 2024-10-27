/** @type {import('tailwindcss').Config} */
export default {
	content: ['./public/**/*.html','./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
            'dark': '#0E121D',
            'light': '#FFFFFF',
            'middle': '#626F9A',
            'accent1': '#78CA9D',
            'accent2': '#D491B4',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        fontSize: {
            sm: '.75rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.75rem',
            '3xl': '2.5rem',
            '4xl': '3.75rem',
            '5xl':  '6.25rem',
            '6xl': '10rem',
            '7xl': '15rem',
        },
		extend: {
            spacing: {
                'card': '400%',
            },
        },
	},
	plugins: [],
}
