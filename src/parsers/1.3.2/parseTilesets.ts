// Module imports
import { Loader } from 'pixi.js'





// Local imports
import { type ParsedTilesetMap } from './typedefs/ParsedTilesetMap'
import { parseTileset } from './parseTileset'
import { type TilesetDefinition } from './quicktype'





// Types
type Config = {
	/** @description The base path from which tilesets will be loaded. */
	assetBasePath: string,

	/** @description The Pixi loader. */
	loader: Loader,

	/** @description LDtk source data. */
	sourceData: TilesetDefinition[],
}





/**
 * Retrieves and parses tilesets from LDtk source data.
 *
 * @param config All configs.
 * @returns A map of tilesets.
 */
export async function parseTilesets(config: Config): Promise<ParsedTilesetMap> {
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
