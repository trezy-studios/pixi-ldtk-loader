/* eslint-env node */

// Module imports
import fs from 'node:fs/promises'
import path from 'node:path'





// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Saves the types to disk.
 *
 * @param {types.ListrContext} context Listr context.
 * @returns {Promise<types.ListrContext>} The updated Listr context.
 */
export async function saveTypes(context) {
	const { jsOutput } = context
	const OUTPUT_PATH = path.join(process.cwd(), 'src', 'helpers', 'ldtk-quicktype.js')
	await fs.writeFile(OUTPUT_PATH, jsOutput, 'utf-8')
	return context
}
