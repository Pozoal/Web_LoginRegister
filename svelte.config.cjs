const sveltePreprocess = require('svelte-preprocess')
const { optimizeCarbonImports } = require("carbon-components-svelte/preprocess")

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
		optimizeCarbonImports()
	]
}
