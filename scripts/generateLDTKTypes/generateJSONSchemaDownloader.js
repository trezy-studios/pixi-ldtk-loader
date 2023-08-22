/* eslint-env node */

// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Generates a function to retrieve a particluar LDtk JSON schema version.
 *
 * @param {string} version The version for which this downloader will operate.
 * @returns {Function} The JSON Schema downloader function.
 */
export function generateJSONSchemaDownloader(version) {
	/**
	 * Retrieves a list of LDtk JSON schema versions.
	 *
	 * @param {types.ListrContext} context Listr context.
	 * @returns {Promise<types.ListrContext>} The updated Listr context.
	 */
	return async function downloadJSONSchema(context) {
		const {
			baseGithubURL,
			versionCache,
		} = context

		const response = await fetch(`${baseGithubURL}/${version}/JSON_SCHEMA.json`, {
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
		})
		const responseJSON = await response.json()

		const jsonSchemaResponse = await fetch(responseJSON.download_url, {
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
		})
		const jsonSchemaResponseText = await jsonSchemaResponse.text()

		// eslint-disable-next-line require-atomic-updates
		versionCache[version].jsonSchema = jsonSchemaResponseText

		return context
	}
}
