// Local imports
import { getTileTextureFromTileset } from '../../helpers/getTileTextureFromTileset'
import { type LDTKLevelLayerTile } from './typedefs/LDTKLevelLayerTile'
import { type LDTKTileset } from './typedefs/LDTKTileset'
import { type TileInstance } from './quicktype'





// Types
type Config = {
	/** @description Tile data from LDtk source. */
	sourceData: TileInstance[],

	/** @description The layer's tileset. */
	tileset: LDTKTileset,
}





/**
 * Parses tiles from LDtk source data.
 *
 * @param config All configs.
 * @returns An array of parsed tiles.
 */
export function parseTiles(config: Config): LDTKLevelLayerTile[] {
	const {
		sourceData,
		tileset,
	} = config

	return sourceData.map(tileData => {
		const flipBit = tileData.f
		const tileID = tileData.t
		const tilePositionX = tileData.px[0]
		const tilePositionY = tileData.px[1]

		return {
			alpha: tileData.a,
			flipX: [1, 3].includes(flipBit),
			flipY: [2, 3].includes(flipBit),
			height: tileset.tile.height,
			id: tileID,
			position: {
				x: tilePositionX / tileset.tile.width,
				y: tilePositionY / tileset.tile.height,
			},
			size: {
				height: tileset.tile.height,
				width: tileset.tile.width,
			},
			texture: getTileTextureFromTileset(tileID, tileset),
			tilesetID: tileset.id,
			width: tileset.tile.width,
		}
	})
}
