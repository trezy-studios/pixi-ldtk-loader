// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'

import { parseLevel } from './parseLevel.js'





/**
 * Retrieves and parses levels from the LDtk source data.
 *
 * @param {object} config All configs.
 * @param {string} config.assetBasePath The base path from which levels will be loaded.
 * @param {import('./quicktype.js').Level[]} config.sourceData LDtk source data.
 * @param {types.ParsedTilesetMap} config.tilesets Tilesets that have already been loaded from the LDtk source.
 * @returns {Promise<types.LDTKLevel[]>} An array of parsed levels.
 */
export async function parseLevels(config) {
	const {
		assetBasePath,
		sourceData,
		tilesets,
	} = config

	const levels = []

	let levelIndex = 0
	while (levelIndex < sourceData.length) {
		levels.push(await parseLevel({
			assetBasePath,
			sourceData: sourceData[levelIndex],
			tilesets,
		}))

		levelIndex += 1
	}

	return levels
}
