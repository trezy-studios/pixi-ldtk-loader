// Local imports
import { parseTileset } from './parseTileset.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Retrieves and parses tilesets from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {string} config.assetBasePath The base path from which tilesets will be loaded.
 * @param {import('@pixi/assets').Loader} config.loader The Pixi loader.
 * @param {import('../../quicktypes/1.3.3.js').TilesetDefinition[]} config.sourceData LDtk source data.
 * @returns {Promise<types.ParsedTilesetMap>} A map of tilesets.
 */
export async function parseTilesets(config) {
	const tilesets = new Map

	const {
		assetBasePath,
		loader,
		sourceData,
	} = config

	// Load tilesets
	let tilesetIndex = 0
	while (tilesetIndex < sourceData.length) {
		const tileset = await parseTileset({
			assetBasePath,
			loader,
			sourceData: sourceData[tilesetIndex],
		})

		if (tileset) {
			tilesets.set(tileset.id, tileset)
		}

		tilesetIndex += 1
	}

	return tilesets
}
