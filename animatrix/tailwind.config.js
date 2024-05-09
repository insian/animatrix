/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// Rotate X utilities
const rotateY = plugin(function ({ addUtilities }) {
	addUtilities({
		'.rotate-y-0': {
			transform: 'rotateY(0deg)',
		},
		'.rotate-y-45': {
			transform: 'rotateY(45deg)',
		},
		'.rotate-y-90': {
			transform: 'rotateY(90deg)',
		},
		'.rotate-y-180': {
			transform: 'rotateY(180deg)',
		},
	})
})

//backface visibility
const backfaceVisibility = plugin(function({addUtilities}) {
	addUtilities({
		'.backface-visible': {
			'backface-visibility': 'visible',
		},
		'.backface-hidden': {
			'backface-visibility': 'hidden',
		}
	})
});

const preserve3D = plugin(function({addUtilities}) {
	addUtilities({
		'.style-preserve-3d': {
			'transform-style' : 'preserve-3d',
		},
	})
});

const textShadow = plugin(function ({ addUtilities }) {
	addUtilities({
		'.text-shadow-input': {
			'text-shadow' : '0 0 0.125rem red'
		},
		'.bg-gold': {
			'background-image': 'linear-gradient( to right,#462523 0,#cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%,#cb9b51 78%, #462523 100%)'
		}
	})
})

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			spacing:{
				'14%': '14%',
				'30%'	: '30%',
				'50%'	: '50%',
				'95%'	: '95%',
				'.9/2'	: '45%',
				'7.5/10': '75%',
				'12/10' : '120%',
				'10/12'	: 'calc(100%*10/12)',
				'11/12'	: 'calc(100%*11/12)',
				'3/2'	: '150%',
				'full2' : '200%',
				'18'	: '4.5rem',
				'58'	: '14.5rem',
				'1/7'	: 'calc(100%/7)',
				'2/5': 'calc(100%*2/5)',
			},
			dropShadow: {
				'home': '1.125rem 1.25rem 0.5rem rgba(255,255,255,0.75)',
				'input': '0 0 1rem rgba(0,0,0,1)',
			},
			rotate: {
				'7': '7deg',
			},
		},
	},
	plugins: [rotateY,backfaceVisibility,preserve3D,textShadow],
}