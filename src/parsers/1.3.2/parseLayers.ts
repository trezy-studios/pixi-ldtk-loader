// Local imports
import { type LayerInstance } from './quicktype'
import { type LDTKLevelLayer } from './typedefs/LDTKLevelLayer'
import { type ParsedTilesetMap } from './typedefs/ParsedTilesetMap'
import { parseLayer } from './parseLayer'





// Types
type Config = {
	/** @description Level data from the LDtk source. */
	sourceData: (LayerInstance | null)[],

	/** @description Tilesets that have been loaded from the LDtk source. */
	tilesets: ParsedTilesetMap,
}





/**
 * Parses a level from LDtk source data.
 *
 * @param config All configs.
 * @returns The parsed level.
 */
export function parseLayers(config: Config): LDTKLevelLayer[] {
	const {
		sourceData,
		tilesets,
	} = config

	const layers = []

	let layerIndex = 0

	while (layerIndex < sourceData.length) {
		if (sourceData[layerIndex]) {
			const layer = parseLayer({
				sourceData: sourceData[layerIndex],
				tilesets,
			})

			layers.unshift(layer)
			layerIndex += 1
		}
	}

	return layers
}
