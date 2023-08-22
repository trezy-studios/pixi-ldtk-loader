// Local imports
import { getTileTextureFromTileset } from '../../helpers/getTileTextureFromTileset.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './types.js'





/**
 * Parses tiles from LDtk source data.
 *
 * @param {object} config All configs.
 * @param {types.TileInstance[]} config.sourceData Tile data from LDtk source.
 * @param {types.LDTKTileset} config.tileset The layer's tileset.
 * @returns {types.LDTKLevelLayerTile[]} An array of parsed tiles.
 */
export function parseTiles(config) {
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
