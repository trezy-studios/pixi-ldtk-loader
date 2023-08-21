// Local imports
import { parseEntities } from './parseEntities.js'
import { parseTiles } from './parseTiles.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Parses a layer from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {import('./ldtk-quicktype.js').LayerInstance} config.sourceData Layer data from LDtk source.
 * @param {types.ParsedTilesetMap} config.tilesets Tilesets that have been loaded from the LDtk source.
 * @returns {types.LDTKLevelLayer} The parsed layer.
 */
export function parseLayer(config) {
	const {
		sourceData,
		tilesets,
	} = config

	/** @type {types.LDTKLevelLayer} */
	const layer = {
		iid: sourceData.iid,
		name: sourceData.__identifier,
	}

	if (['IntGrid', 'Tiles'].includes(sourceData.__type)) {
		const tilesetID = sourceData.__tilesetDefUid
		const tileset = tilesets.get(tilesetID)

		const tilesData = sourceData.autoLayerTiles.length
			? sourceData.autoLayerTiles
			: sourceData.gridTiles

		layer.tiles = parseTiles({
			sourceData: tilesData,
			tileset,
		})
	} else if (sourceData.__type === 'Entities') {
		layer.entities = parseEntities({
			sourceData: sourceData.entityInstances,
		})
	}

	return layer
}
