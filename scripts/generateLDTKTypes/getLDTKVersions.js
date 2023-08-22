/* eslint-env node */

// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Retrieves a list of LDtk JSON schema versions.
 *
 * @param {types.ListrContext} context Listr context.
 * @returns {Promise<types.ListrContext>} The updated Listr context.
 */
export async function getLDTKVersions(context) {
	const {
		baseGithubURL,
		versionCache,
	} = context

	const response = await fetch(baseGithubURL, {
		headers: {
			Accept: 'application/vnd.github+json',
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			'X-GitHub-Api-Version': '2022-11-28',
		},
	})

	const entries = await response.json()

	entries.forEach(entry => {
		versionCache[entry.name] = {
			javascript: null,
			jsonSchema: null,
			typescript: null,
		}
	})

	return context
}
