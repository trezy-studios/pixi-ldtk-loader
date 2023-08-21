/* eslint-env node */

// Module imports
import path from 'node:path'
import { Worker } from 'worker_threads'





// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Transpiles TypeScript to Javascript, converting TS types to JSDoc.
 *
 * @param {types.ListrContext} context Listr context.
 * @returns {Promise<types.ListrContext>} The updated Listr context.
 */
export async function transpileToJavaScript(context) {
	const { tsOutput } = context

	await new Promise(resolve => {
		const worker = new Worker(path.resolve(process.cwd(), 'scripts', 'generateLDTKTypes', 'transpileWorker.js'))
		worker.on('message', result => {
			context.jsOutput = context.jsOutput = `/* eslint-disable */\n${result}`
				// eslint-disable-next-line optimize-regex/optimize-regex
				.replace(/@returns \{import\(".+input.ts-to-jsdoc"\)\.(.+)\}/giu, '@returns {$1}')
				// eslint-disable-next-line optimize-regex/optimize-regex
				.replace(/\{t\}/giu, '{*}')
				.replace(/\/\*\* (@.*)\n(\s+\*)/giu, '/**\n$2 $1\n$2')
			resolve()
			worker.terminate()
		})
		worker.postMessage(tsOutput)
	})

	return context
}
