/* eslint-env node */

// Local imports
import { generateJavaScriptTranspiler } from './generateJavaScriptTranspiler.js'
import { generateJSONSchemaDownloader } from './generateJSONSchemaDownloader.js'
import { generateTypescriptTypesGenerator } from './generateTypescriptTypesGenerator.js'
import { generateTypesDiskWriter } from './generateTypesDiskWriter.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Returns a new task for downloading the JSON Schema of an LDtk version.
 *
 * @param {string} version The LDtk version.
 * @returns {object} Blep.
 */
function mapVersion(version) {
	return {
		title: `v${version}`,
		// eslint-disable-next-line jsdoc/require-jsdoc
		task(_, task) {
			return task.newListr(
				[
					{
						title: 'Downloading JSON Schema',
						task: generateJSONSchemaDownloader(version),
					},
					{
						title: 'Generating Typescript types',
						task: generateTypescriptTypesGenerator(version),
					},
					{
						title: 'Transpiling Typescript to JavaScript with JSDoc',
						task: generateJavaScriptTranspiler(version),
					},
					{
						title: 'Saving to disk',
						task: generateTypesDiskWriter(version),
					},
				],
				{ concurrent: false },
			)
		},
	}
}

/**
 * Retrieves the LDtk JSON schema.
 *
 * @param {types.ListrContext} context Listr context.
 * @param {import('listr2').ListrTaskWrapper} task The task.
 * @returns {types.ListrContext} The updated Listr context.
 */
export function generateLDTKTypes(context, task) {
	const { versionCache } = context

	const versions = Object.keys(versionCache)

	return task.newListr(
		versions.map(mapVersion),
		{
			concurrent: true,
			rendererOptions: { collapseSubtasks: false },
		},
	)
}
