import { defineConfig } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2')
import { viteCommonjs, esbuildCommonjs } from './plugin';
import { resolve } from 'path'
import glob from 'glob'
import VirtualHtml from './pluginHtml'
const srcPath = resolve(__dirname, 'src')
function getEntry(globPath) {
	var entries = {}, pathname
	if (globPath) {
		glob.sync(globPath).forEach(function (entry) {
			pathname = '/' + entry.split('/').splice(-3, 2).join('/')
			entries[pathname] = entry
		})
		return entries
	}
}
const pages = getEntry(`${srcPath}/**/*.html`)
export default defineConfig({
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				esbuildCommonjs(['weixin-js-sdk'])
			]
		}
	},
	plugins: [
		createVuePlugin({
			jsx: true
		}),
		VirtualHtml({
			pages: pages,
			indexPage: '/login/index'
		}),
		viteCommonjs()
	],

	assetsInlineLimit: 4096,
	build: {

		rollupOptions: {
		}
	},
	clearScreen: true,
	resolve: {
		extensions: ['.vue', '.js'],
		alias: {
			vue: 'vue/dist/vue.esm.js',
			"@": resolve(__dirname, srcPath),
		}
	},
	server: {
		port: 4500,
		open: true,
	}
})