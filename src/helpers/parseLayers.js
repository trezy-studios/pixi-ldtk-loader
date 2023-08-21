// Local imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'

import { parseLayer } from './parseLayer.js'





/**
 * Parses a level from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {(import('./ldtk-quicktype.js').LayerInstance | null)[]} config.sourceData Level data from the LDtk source.
 * @param {types.ParsedTilesetMap} config.tilesets Tilesets that have been loaded from the LDtk source.
 * @returns {types.LDTKLevelLayer[]} The parsed level.
 */
export function parseLayers(config) {
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
