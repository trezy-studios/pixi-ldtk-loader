// Module imports
import { Texture } from 'pixi.js'





export type LDTKLevelLayerTile = {
	/** @description The opacity of the level. */
	alpha: number,

	/** @description Whether the tile should be flipped on the horizontal axis. */
	flipX: boolean,

	/** @description Whether the tile should be flipped on the vertical axis. */
	flipY: boolean,

	/** @description The height of the tile. */
	height: number,

	/** @description The ID of the tile. */
	id: number,

	/** @description The tile's grid-based position. */
	position: {
		x: number,
		y: number,
	},

	/** @description The pixel size of the tile. */
	size: {
		height: number,
		width: number,
	},

	/** @description The Pixi texture to be used when rendering the tile. */
	texture: Texture,

	/** @description The ID of the tileset. */
	tilesetID: number,

	/** @description The width of the tile. */
	width: number,
}
