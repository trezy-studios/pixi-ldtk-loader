// Local imports
import { type LayerInstance } from './quicktype'
import { type LDTKLevelLayer } from './typedefs/LDTKLevelLayer'
import { type ParsedTilesetMap } from './typedefs/ParsedTilesetMap'
import { parseEntities } from './parseEntities'
import { parseTiles } from './parseTiles'





// Types
type Config = {
	/** @description Layer data from LDtk source. */
	sourceData: LayerInstance,

	/** @description Tilesets that have been loaded from the LDtk source. */
	tilesets: ParsedTilesetMap,
}




/**
 * Parses a layer from LDtk source data.
 *
 * @param config All configs.
 * @returns The parsed layer.
 */
export function parseLayer(config: Config): LDTKLevelLayer {
	const {
		sourceData,
		tilesets,
	} = config

	const layer: LDTKLevelLayer = {
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
