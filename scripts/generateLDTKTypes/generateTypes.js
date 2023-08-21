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
 * Generates a Typescript file with types from the LDtk JSON Schema.
 *
 * @param {types.ListrContext} context Listr context.
 * @returns {Promise<types.ListrContext>} The updated Listr context.
 */
export async function generateTypes(context) {
	const { ldtkJSONSchema } = context
	const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore)

	await schemaInput.addSource({
		name: 'LDTKProject',
		schema: ldtkJSONSchema,
	})

	const inputData = new InputData
	inputData.addInput(schemaInput)

	const tsOutput = await quicktype({
		inputData,
		lang: 'ts',
	})

	// eslint-disable-next-line require-atomic-updates
	context.tsOutput = tsOutput.lines.join('\n')

	return context
}
