/* eslint-env node */

// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Retrieves the LDtk JSON schema.
 *
 * @param {types.ListrContext} context Listr context.
 * @returns {Promise<types.ListrContext>} The updated Listr context.
 */
export async function getLDTKJSONSchema(context) {
	const { schemaURL } = context
	const response = await fetch(schemaURL)

	// eslint-disable-next-line require-atomic-updates
	context.ldtkJSONSchema = await response.text()

	return context
}
