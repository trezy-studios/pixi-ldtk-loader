/* eslint-env node */

// Module imports
import path from 'node:path'
import { Worker } from 'worker_threads'





// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Generates a function to retrieve a particluar LDtk JSON schema version.
 *
 * @param {string} version The version for which this downloader will operate.
 * @returns {Function} The JSON Schema downloader function.
 */
export function generateJavaScriptTranspiler(version) {
	/**
	 * Transpiles TypeScript to Javascript, converting TS types to JSDoc.
	 *
	 * @param {types.ListrContext} context Listr context.
	 * @returns {Promise<types.ListrContext>} The updated Listr context.
	 */
	return async function transpileToJavaScript(context) {
		const { versionCache } = context

		await new Promise(resolve => {
			const worker = new Worker(path.resolve(process.cwd(), 'scripts', 'generateLDTKTypes', 'transpileWorker.js'))
			worker.on('message', result => {
				versionCache[version].javascript = `/* eslint-disable */\n${result}`
					// eslint-disable-next-line optimize-regex/optimize-regex
					.replace(/@returns \{import\(".+input.ts-to-jsdoc"\)\.(.+)\}/giu, '@returns {$1}')
					// eslint-disable-next-line optimize-regex/optimize-regex
					.replace(/\{t\}/giu, '{*}')
					.replace(/\/\*\* (@.*)\n(\s+\*)/giu, '/**\n$2 $1\n$2')
				resolve()
				worker.terminate()
			})
			worker.postMessage(versionCache[version].typescript)
		})

		return context
	}
}
