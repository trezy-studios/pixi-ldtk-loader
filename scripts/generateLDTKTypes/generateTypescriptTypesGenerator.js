/* eslint-env node */

// Module imports
import {
	FetchingJSONSchemaStore,
	InputData,
	JSONSchemaInput,
	quicktype,
} from 'quicktype-core'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Generates a function to generate Typescript types for a particular LDtk JSON schema version.
 *
 * @param {string} version The version for which this downloader will operate.
 * @returns {Function} The JSON Schema downloader function.
 */
export function generateTypescriptTypesGenerator(version) {
	/**
	 * Generates a Typescript file with types from the LDtk JSON Schema.
	 *
	 * @param {types.ListrContext} context Listr context.
	 * @returns {Promise<types.ListrContext>} The updated Listr context.
	 */
	return async function generateTypescriptTypes(context) {
		const { versionCache } = context

		const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore)

		await schemaInput.addSource({
			name: 'LDTKProject',
			schema: versionCache[version].jsonSchema,
		})

		const inputData = new InputData
		inputData.addInput(schemaInput)

		const tsOutput = await quicktype({
			inputData,
			lang: 'ts',
		})

		versionCache[version].typescript = tsOutput.lines.join('\n')
	}
}
