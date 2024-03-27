import { preprocessMeltUI, sequence } from '@melt-ui/pp';
// import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import firebase from 'svelte-adapter-firebase';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess:  sequence([
		preprocess(),
		 mdsvex(mdsvexConfig),
		  preprocessMeltUI()
		]),
	extensions: [".svelte", ".svx", ...mdsvexConfig.extensions],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: 
		firebase({
			esbuildBuildOptions(defaultOptions) {
				return {
					...defaultOptions,
					target: 'esm'
				};
			},
			firebaseJsonPath: 'firebase.json'
		})
		// adapter()
	}
};
export default config;
