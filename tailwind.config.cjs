const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
      fontFamily: {
        'sans': ['Chivo', 'Helvetica', 'Arial', 'sans-serif'],
        'snack': ['SnackBowl'],
      },
			colors: {
				darkGray: 'hsla(0, 0%, 40%, 1)',
				lightGray: 'hsla(0, 0%, 78%, 0.7)',
				veryLightGray: 'hsl(0, 0%, 98%)'
			}
		},
		groups: ['scope']
	},
  plugins: [
    require('tw-elements/dist/plugin'),

	//  https://github.com/tailwindlabs/tailwindcss/issues/1192#issuecomment-1069149920
	plugin(({ addVariant, theme }) => {
	  const groups = theme('groups') || []
	  groups.forEach((group) => {
		addVariant(`group-${group}-hover`, () => {
		  return `:merge(.group-${group}):hover &`
		})
	  })
	})
  ],
};