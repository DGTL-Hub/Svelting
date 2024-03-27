import { defineMDSveXConfig as defineConfig } from 'mdsvex';
// import customBlockquotes from './src/lib/plugins/customBlockquotes/plugin.js';
import slug from "rehype-slug"
import abbr from "remark-abbr"
import urls from "rehype-urls"
import autoLinkHeadings from "rehype-autolink-headings"
import addClasses from "rehype-add-classes"
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const blockquoteTypes = {
    ':>TIP': 'tip-blockquote',
    ':>WARNING': 'warning-blockquote',
    ':>IMPORTANT': 'important-blockquote',
    ':>CAUTION': 'caution-blockquote',
    ':>NOTE': 'note-blockquote',
    // ... other types
};


const dirname = path.dirname(fileURLToPath(import.meta.url), '../');

function customBlockquotes() {
	return (tree) => {
	  visit(tree, 'text', (node) => {
		const type = Object.keys(blockquoteTypes).find(key => node.value.startsWith(key));
		if (type) {
		  // Logic to transform the node
		}
	  });
	};
  }
  

function processUrl(url, node) {
	if (node.tagName === "a") {
		node.properties.class = "text-link"

		if (!url.href.startsWith("/")) {
			// Open external links in new tab
			node.properties.target = "_blank"
			// Fix a security concern with offsite links
			// See: https://web.dev/external-anchors-use-rel-noopener/
			node.properties.rel = "noopener"
		}
	}
};


const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	
	layout: {
		default: path.join( dirname, './src/lib/components/layouts/default-Layout.svelte'),
		fancy: path.join( dirname, './src/lib/components/layouts/fancy-layout.svelte')
	},

	// customBlockquotes in remark plugin
	remarkPlugins: [customBlockquotes],
	rehypePlugins: [
		// // figure, // convert images into <figure elements
		abbr,
		[urls, processUrl], // adds rel and target to <a elements
		slug,   // adds slug to <h1-<h6 elements
		[autoLinkHeadings, { behavior: "wrap" }], // adds a <a around slugged <h1-<h6 elements
		[addClasses, { "ul,ol": "list" }] // add classes to these elements	
	]
});


export default config;