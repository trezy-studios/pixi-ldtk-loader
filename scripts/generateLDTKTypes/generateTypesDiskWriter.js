/* eslint-env node */

// Module imports
import fs from 'node:fs/promises'
import path from 'node:path'





// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Generates a function to retrieve a particluar LDtk JSON schema version.
 *
 * @param {string} version The version for which this downloader will operate.
 * @returns {Function} The JSON Schema downloader function.
 */
export function generateTypesDiskWriter(version) {
	/**
	 * Saves the types to disk.
	 *
	 * @param {types.ListrContext} context Listr context.
	 * @returns {Promise<types.ListrContext>} The updated Listr context.
	 */
	return async function writeTypesToDisk(context) {
		const { versionCache } = context
		const OUTPUT_DIRECTORY = path.join(process.cwd(), 'src', 'parsers', version)
		const OUTPUT_PATH = path.join(OUTPUT_DIRECTORY, 'quicktype.ts')

		try {
			// eslint-disable-next-line security/detect-non-literal-fs-filename
			await fs.mkdir(OUTPUT_DIRECTORY)
		} catch (error) {
			/* empty */
		}

		// eslint-disable-next-line security/detect-non-literal-fs-filename
		await fs.writeFile(OUTPUT_PATH, versionCache[version].typescript, 'utf-8')

		return context
	}
}
