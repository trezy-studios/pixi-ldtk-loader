// Module imports
import { DOMAdapter } from 'pixi.js'





// Local imports
import { type LDTKLevel } from './typedefs/LDTKLevel'
import { type Level } from './quicktype'
import { type ParsedTilesetMap } from './typedefs/ParsedTilesetMap'
import { parseLayers } from './parseLayers'
import path from 'path'





// Types
type Config = {
	/** @description The base path from which the level will be loaded. */
	assetBasePath: string,

	/** @description Level data from the LDtk source. */
	sourceData: Level,

	/** @description Tilesets that have been loaded from the LDtk source. */
	tilesets: ParsedTilesetMap,
}





/**
 * Parses a level from LDtk source data.
 *
 * @param config All configs.
 * @returns The parsed level.
 */
export async function parseLevel(config: Config): Promise<LDTKLevel> {
	const {
		assetBasePath,
		tilesets,
	} = config

	let { sourceData } = config

	const level = {
		layers: null,
		name: sourceData.identifier,
		worldPosition: {
			x: sourceData.worldX,
			y: sourceData.worldY,
		},
	}

	if (sourceData.fieldInstances) {
		sourceData.fieldInstances?.forEach(fieldInstance => {
			level[fieldInstance.__identifier] = fieldInstance.__value
		})
	}

	const adapter = DOMAdapter.get()

	if (sourceData.externalRelPath) {
		const levelSrc = path.join(assetBasePath, sourceData.externalRelPath)

		const levelResponse = await adapter.fetch(levelSrc)
		sourceData = await levelResponse.json()
	}

	level.layers = parseLayers({
		sourceData: sourceData.layerInstances,
		tilesets,
	})

	return level
}
