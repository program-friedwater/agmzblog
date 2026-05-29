import adapter from '@sveltejs/adapter-auto';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = 'github-dark';

const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx', '.md'],

	highlight: {
		highlighter: async (code, lang = 'text') => {
			// unknown lang fallback
			const loaded = highlighter.getLoadedLanguages();

			if (!loaded.includes(lang)) {
				lang = 'text';
			}

			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme
				})
			);

			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) =>
			filename.split(/[/\\]/).includes('node_modules')
				? undefined
				: true
	},

	preprocess: [mdsvex(mdsvexOptions)],

	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter()
	}
};

export default config;
